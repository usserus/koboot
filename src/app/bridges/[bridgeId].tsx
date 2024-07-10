import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { globalStyles } from "../../../theme/global";
import { useLocalSearchParams } from "expo-router";
import { Divider, ButtonGroup } from '@rneui/themed';
import theme from "../../../theme/theme";
import { useState, useEffect } from "react";
import { fetchCurrentWaterLevel } from "../../../apis/currentWaterLevel-api";
import { bridge } from "../../../models/bridge";
import { LinearGradient } from "expo-linear-gradient";
import DetailHeader from "../../../components/DetailHeader";
import ImageHeader from "../../../components/ImageHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const localImage = require('../../../assets/images/alterheinbrueckekonstanz.jpg');

export default function BridgeDetail() {

    const item = useLocalSearchParams() as unknown as bridge;
    const { url, bridgeName, location, refClearanceHeight, image } = item;

    const [selectedIndex, setSelectedIndex] = useState(1);
    const [data, setData] = useState(null);
    const [boatData, setBoatData] = useState(null); // eingegebene Bootdaten


    useEffect(() => {
        async function loadData() {
            const currentWaterLevel = await fetchCurrentWaterLevel();
            let measuringTime = new Date(currentWaterLevel.timestamp).toLocaleString();
            const waterLevel = currentWaterLevel.value / 100;
            const refWaterLevel = 2.5;
            let clearanceHeight;
            if (bridgeName !== "Alter Rheinbrücke Konstanz") {
                clearanceHeight = (Number(refClearanceHeight) - (waterLevel - refWaterLevel)).toFixed(2);
            } else {
                const stringValue = refClearanceHeight.toString();
                const valuesArray = stringValue.split(',').map(Number);
                clearanceHeight = (valuesArray[selectedIndex] - (waterLevel - refWaterLevel)).toFixed(2);
            }
            setData({
                measuringTime,
                waterLevel,
                clearanceHeight,
            });
        }

        async function loadBoatData() {
            try {
                // Bootdaten aus AsyncStorage laden und in boatData setzen
                const storedBoatData = await AsyncStorage.getItem('boatData');
                if (storedBoatData) {
                    setBoatData(JSON.parse(storedBoatData));
                } else {
                    // TODO: Funktion machen, die sagt, dass man zuerst ein Boot erstellen soll!
                }
            } catch (error) {
                console.error('Failed to load boat data', error);
            }
        }
        loadData();
        loadBoatData();
    }, [selectedIndex]);

    if (!data || !boatData) {
        return <Text>Loading...</Text>;
    }

    // Boothöhe extrahieren
    const { boatHeight } = boatData;
    // Höhendifferenz zw Brücke und Boot
    const clearanceDifference = (parseFloat(data.clearanceHeight) - parseFloat(boatHeight)).toFixed(2);
    const isPassagePossible = clearanceDifference > 0;

    return (
        <ScrollView style={globalStyles.outerContainerGreen}>
            <ImageHeader
                image={localImage}
                headlineText={"Mehr Infos zu dieser Brücke"}>
            </ImageHeader>


            <LinearGradient
                colors={['transparent', theme.lightColors.primary]}
                style={globalStyles.gradientContainer}
            >
                <View style={[globalStyles.contentContainer, globalStyles.noOverlay]}>
                    <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerGreen]}>
                        <DetailHeader
                            name={item.bridgeName}
                            location={item.location}
                            icon={"location-outline"}>
                        </DetailHeader>
                        <Text style={localStyles.passageText}>
                            {isPassagePossible ? 'DURCHFAHRT MÖGLICH' : 'DURCHFAHRT NICHT MÖGLICH'}
                        </Text>
                        <Divider style={globalStyles.divider} />

                        <Text style={[globalStyles.headlineText]}>Durchfahrt</Text>

                        {bridgeName === "Alter Rheinbrücke Konstanz" && (
                            <ButtonGroup
                                buttons={['links', 'mitte', 'rechts']}
                                selectedIndex={selectedIndex}
                                onPress={(value) => {
                                    setSelectedIndex(value);
                                }}
                                containerStyle={{ marginBottom: 20, marginTop: 20 }}
                            />
                        )}

                        <View style={localStyles.dataContainer}>
                            <Text style={[globalStyles.text]}>Zeitpunkt der Wasserpegel-Messung:</Text>
                            <Text style={[globalStyles.boldText]}>{data.measuringTime}</Text>
                        </View>
                        <View style={localStyles.dataContainer}>
                            <Text style={[globalStyles.text]}>Wasserpegel:</Text>
                            <Text style={[globalStyles.boldText]}>{data.waterLevel}</Text>
                        </View>
                        <View style={localStyles.dataContainer}>
                            <Text style={[globalStyles.text]}>Durchfahrshöhe:</Text>
                            <Text style={[globalStyles.boldText]}>{data.clearanceHeight}</Text>
                        </View>
                        <View style={localStyles.dataContainer}>
                            <Text style={[globalStyles.text]}>Abstand vom Boot zur Brücke:</Text>
                            <Text style={[globalStyles.boldText]}>{clearanceDifference} m</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    dataContainer: {
        marginVertical: 10,
    },
    passageText: {
        textAlign: 'center',
        color: theme.lightColors.primary,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
});
