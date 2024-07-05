import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { borderRadius, globalStyles } from "../../../theme/global";
import theme from "../../../theme/theme";
import { Button } from '@rneui/themed';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";


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
                <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen]}>
                    <View style={[globalStyles.container, globalStyles.containerGrey]}>
                        <Text style={[globalStyles.headlineText, localStyles.centeredText]}>Dein Boot:</Text>
                        <Text style={localStyles.centeredText}>Name: {boatData.boatName}</Text>
                        <Text style={localStyles.centeredText}>Hersteller: {boatData.boatManufacturer}</Text>
                        <Text style={localStyles.centeredText}>Länge: {boatData.boatLength}</Text>
                        <Text style={localStyles.centeredText}>Breite: {boatData.boatWidth}</Text>
                        <Text style={localStyles.centeredText}>Höhe: {boatData.boatHeight}</Text>
                        <Text style={localStyles.centeredText}>Tiefgang: {boatData.boatDraft}</Text>
                        <Button style={globalStyles.PrimaryButton} titleStyle={globalStyles.PrimaryButtonText}>
                            <Pressable style={globalStyles.PrimaryButton} onPress={() => router.push("BoatEdit")}>
                                <Text style={globalStyles.PrimaryButtonText}>Boot bearbeiten</Text>
                            </Pressable>
                        </Button>
                    </View>
                </View>
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

                    <Button style={globalStyles.PrimaryButton}  titleStyle={globalStyles.PrimaryButtonText}>
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
        marginBottom: 40
    }
});
