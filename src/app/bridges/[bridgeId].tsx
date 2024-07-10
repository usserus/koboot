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

export default function BridgeDetail() {

    const item = useLocalSearchParams() as unknown as bridge;
    const { url, bridgeName, location, refClearanceHeight, image } = item;
    const [selectedIndex, setSelectedIndex] = useState<number>(1);
    const [data, setData] = useState(null);
    const [boatData, setBoatData] = useState(null); // eingegebene Bootdaten
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function loadData() {
            try {
                // Daten für Wasserpegel und Durchfahrtshöhe laden
                const currentWaterLevel = await fetchCurrentWaterLevel();
                let measuringTime = new Date(currentWaterLevel.timestamp).toLocaleString();
                const waterLevel: number = currentWaterLevel.value / 100;
                const refWaterLevel: number = 2.5;
                let clearanceHeight: string = '';
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
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        async function loadBoatData() {
            try {
                // Bootdaten aus AsyncStorage laden und in boatData setzen
                const storedBoatData = await AsyncStorage.getItem('boatData');
                if (storedBoatData) {
                    setBoatData(JSON.parse(storedBoatData));
                }
            } catch (error) {
                console.error('Failed to load boat data', error);
            }
        }
        loadData();
        loadBoatData();
    }, [selectedIndex]);

    let isPassagePossible: boolean = false;
    let clearanceDifference: number = 0;
    if (data && boatData) {
        // Höhendifferenz zwischen Brücke und Boot
        clearanceDifference = parseFloat((parseFloat(data.clearanceHeight) - parseFloat(boatData.boatHeight)).toFixed(2));
        if (clearanceDifference > 0) {
            isPassagePossible = true;
        }
    }

    return (
        <ScrollView style={globalStyles.outerContainerGreen}>
            <ImageHeader
                image={image}
                headlineText={"Mehr Infos zu dieser Brücke"}
            />

            <LinearGradient
                colors={['transparent', theme.lightColors.primary]}
                style={globalStyles.gradientContainer}
            >
                <View style={[globalStyles.contentContainer, globalStyles.noOverlay]}>
                    <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerGreen]}>
                        <DetailHeader
                            name={item.bridgeName}
                            location={item.location}
                            icon={"location-outline"}
                        />

                        {loading ? (
                            <View>
                                <Text>Loading...</Text>
                            </View>
                        ) : error ? (
                            <View>
                                <Text>Error: {error.message}</Text>
                            </View>
                        ) : (
                            <>
                                {boatData && data && (
                                    <>
                                        <Text style={[localStyles.passageText, !isPassagePossible && localStyles.notPossible]}>
                                            {isPassagePossible ? 'DURCHFAHRT MÖGLICH' : 'DURCHFAHRT NICHT MÖGLICH'}
                                        </Text>
                                        <Divider style={globalStyles.divider} />
                                    </>
                                )}

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
                                    <Text style={[globalStyles.boldText]}>{data.waterLevel} m</Text>
                                </View>
                                <View style={localStyles.dataContainer}>
                                    <Text style={[globalStyles.text]}>Durchfahrshöhe:</Text>
                                    <Text style={[globalStyles.boldText]}>{data.clearanceHeight} m</Text>
                                </View>

                                {boatData ? (
                                    <View style={localStyles.dataContainer}>
                                        <Text style={[globalStyles.text]}>Abstand vom Boot zur Brücke:</Text>
                                        <Text style={[globalStyles.boldText]}>{clearanceDifference} m</Text>
                                    </View>
                                ) : (
                                    <View style={localStyles.dataContainer}>
                                        <Text style={[globalStyles.text]}>Zum Anzeigen des Abstandes zwischen Boot und Brücke, sowie ob aktuell eine Durchfahrt möglich ist, bitte unter dem Menüpunkt "Boot" ein Boot einspeichern.</Text>
                                    </View>
                                )}
                            </>
                        )}
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
    },
    notPossible: {
        color: '#d23b07',
    },
});