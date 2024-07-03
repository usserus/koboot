import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Image } from '@rneui/themed';
import { StyleSheet } from "react-native";
import { globalStyles } from "../../../theme/global";
import { useLocalSearchParams } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Divider, Chip, ButtonGroup } from '@rneui/themed';
import theme from "../../../theme/theme";
import { useState, useEffect } from "react";
import { fetchCurrentWaterLevel } from "../../../apis/currentWaterLevel-api";
import { bridge } from "../../../models/bridge";


const { width } = Dimensions.get('window');


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
        <>
            <View>
                <Image
                    source={image}
                    style={localStyles.image}>
                </Image>

                <View style={localStyles.overlayImage}></View>
                <Text style={[globalStyles.headlineText, localStyles.overlayText]}>Mehr Infos zu dieser Brücke</Text>
            </View>
            <View style={globalStyles.container}>
                <Text style={[globalStyles.headlineText]}>{bridgeName}</Text>
                <View style={localStyles.iconText}>
                    <Ionicons name="location-outline" size={18} color="black" />
                    <Text style={[globalStyles.text]}>

                        {item.location}
                    </Text>
                </View>
                <Divider style={localStyles.divider} />


                <Chip
                    title="Durchfahrt möglich"
                    containerStyle={{ marginVertical: 15 }}
                    color="green"
                />
                <Divider style={localStyles.divider} />

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
        </>
    )
}

const localStyles = StyleSheet.create({
    overlayText: {
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    image: {
        width: width,
        height: 300,
        resizeMode: 'cover'
    },
    overlayImage: {
        //setzt position auf absolute und füllt es aus
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        marginLeft: 10,
    },
    divider: {
        marginVertical: 6,
        height: 1.2,
        backgroundColor: theme.lightColors.primary,
        marginTop: 10,
        marginBottom: 10
    },
    dataContainer: {
        marginVertical: 10,
    }
});