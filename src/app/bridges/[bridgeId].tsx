import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Image } from '@rneui/themed';
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


export default function BridgeDetail() {

    const item = useLocalSearchParams() as unknown as bridge;
    const { url, bridgeName, location, refClearanceHeight, image } = item;

    const [selectedIndex, setSelectedIndex] = useState(1);
    const [data, setData] = useState(null);


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
        loadData();
    }, [selectedIndex]);

    if (!data) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView>
            <View>
                <Image
                    source={image}
                    style={globalStyles.image}>
                </Image>
                <View style={globalStyles.overlayImage}></View>
                <Text style={[globalStyles.headlineText, globalStyles.overlayText]}>Mehr Infos zu dieser Brücke</Text>
            </View>



            <LinearGradient
                colors={['transparent', theme.lightColors.primary]}
                style={globalStyles.gradientContainer}
            >
                <View style={[globalStyles.contentContainer, globalStyles.imagegap]}>
                    <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerGreen]}>
                        <DetailHeader
                            name={item.bridgeName}
                            location={item.location}
                            icon={"location-outline"}>
                        </DetailHeader>
                        <Text style={localStyles.passageText}>DURCHFAHRT MÖGLICH</Text>
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
                            <Text style={[globalStyles.boldText]}>28.06.2024:</Text>
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
    },

});