import React from "react";
import {View, Text, Pressable, StyleSheet, ScrollView} from "react-native";
import { router } from "expo-router";
import { borderRadius, globalStyles } from "../../../theme/global";
import theme from "../../../theme/theme";
import {Button, Divider} from '@rneui/themed';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import ImageHeader from "../../../components/ImageHeader";
import image from "../../../assets/images/alterheinbrueckekonstanz.jpg";
import DetailHeader from "../../../components/DetailHeader";



export default function BoatPage() {

    const [boatData, setBoatData] = useState(null);
    const loadBoatData = async () => {
        try {
            const storedBoatData = await AsyncStorage.getItem('boatData');
            setBoatData(JSON.parse(storedBoatData));
        } catch (error) {
            console.error("Failed to load boat data", error);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            loadBoatData();
        }, [])
    );

    if (boatData) {
        return (
            <View style={[globalStyles.outerContainerGreen]}>
                <ImageHeader
                    image={image}
                    headlineText={"Mein Boot"}>
                </ImageHeader>

                <ScrollView style={localStyles.scrollViewContent}>
                    <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerGreen]}>
                    <View style={[globalStyles.container]}>
                        <DetailHeader
                            name={boatData.boatName}
                            location={boatData.boatManufacturer}
                            >
                        </DetailHeader>

                        <Text style={globalStyles.headlineText}>Maße</Text>

                        <View style={localStyles.measurementContainer}>
                            <View style={localStyles.measurementRow}>
                                <View style={localStyles.measurement}>
                                    <Text style={localStyles.labelText}>Länge</Text>
                                    <Text style={localStyles.valueText}>{boatData.boatLength} m</Text>
                                </View>
                                <View style={localStyles.measurement}>
                                    <Text style={localStyles.labelText}>Breite</Text>
                                    <Text style={localStyles.valueText}>{boatData.boatWidth} m</Text>
                                </View>
                            </View>
                            <View style={localStyles.measurementRow}>
                                <View style={localStyles.measurement}>
                                    <Text style={localStyles.labelText}>Höhe</Text>
                                    <Text style={localStyles.valueText}>{boatData.boatHeight} m</Text>
                                </View>
                                <View style={localStyles.measurement}>
                                    <Text style={localStyles.labelText}>Tiefe</Text>
                                    <Text style={localStyles.valueText}>{boatData.boatDraft} m</Text>
                                </View>
                        </View>
                        </View>

                        <Divider style={globalStyles.divider} />

                        <Text style={localStyles.centeredText}>Du möchtest deine Bootdaten ändern?</Text>
                        <Button style={globalStyles.PrimaryButton} titleStyle={globalStyles.PrimaryButtonText}>
                            <Pressable style={globalStyles.PrimaryButton} onPress={() => router.push("BoatEdit")}>
                                <Text style={globalStyles.PrimaryButtonText}>Boot bearbeiten</Text>
                            </Pressable>
                        </Button>
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={[globalStyles.outerContainerGreen]}>
            <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen]}>
                <View style={[globalStyles.container, globalStyles.containerGrey]}>

                    <Text style={[globalStyles.headlineText, localStyles.centeredText]}>Du hast noch kein Boot erstellt.</Text>

                    <Text style={localStyles.centeredText}>Füge dein Boot hinzu, damit du deinen aktuellen Standort verfolgen kannst,
                        deine Routen bis zur nächsten Brücke berechnen kannst und den aktuellen Wasserstand
                        bezüglich Brückendurchfahrt checken kannst. Mache deinen Bootstrip am Bodensee so
                        angenehm wie möglich.</Text>

                    <Text style={localStyles.centeredText}>Worauf wartest du noch? Füge jetzt dein Boot hinzu und erlebe die Möglichkeiten
                        die Koboot dir für deine Booterfahrung bietet!</Text>

                    <Button style={globalStyles.PrimaryButton} titleStyle={globalStyles.PrimaryButtonText}>
                        <Pressable style={globalStyles.PrimaryButton} onPress={() => router.push("BoatEdit")}>
                            <Text style={globalStyles.PrimaryButtonText}>Mein eigenes Boot hinzufügen</Text>
                        </Pressable>
                    </Button>
                </View>
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    centeredText: {
        textAlign: "center",
        marginBottom: 20
    },
    measurementContainer: {
        flexDirection: "column",
        marginTop: 10,
        marginBottom: 20
    },
    measurementRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    measurement: {
        flexDirection: "column",
        flex: 1
    },
    labelText: {
        flex: 1,
        marginRight: 10,
    },
    valueText: {
        flex: 1,
        fontWeight: "bold"

    },
    ScrollViewContent: {
        flexGrow: 1,
    }
});
