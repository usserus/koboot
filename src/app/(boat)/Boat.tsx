import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { borderRadius, globalStyles } from "../../../theme/global";
import theme from "../../../theme/theme";


export default function BoatPage() {
    return (
        <>
            <View style={[globalStyles.outerContainerWhite, localStyles.outerContainerWhite]}>

                <View style={[globalStyles.container, localStyles.containerWhite]}>
                    <Text style={[globalStyles.headlineText, { color: theme.lightColors.primary }]}>Mein Boot</Text>
                </View>

                <View style={[globalStyles.container, localStyles.containerGrey]}>

                    <Text style={[globalStyles.headlineText, localStyles.centeredText]}>Du hast noch kein Boot erstellt.</Text>

                    <Text style={localStyles.centeredText}>Füge dein Boot hinzu, damit du deinen aktuellen Standort verfolgen kannst,
                        deine Routen bis zur nächsten Brücke berechnen kannst und den aktuellen Wasserstand
                        bezüglich Brückendurchfahrt checken kannst. Mache deinen Bootstrip am Bodensee so
                        angenehm wie möglich.</Text>

                    <Text style={localStyles.centeredText}>Worauf wartest du noch? Füge jetzt dein Boot hinzu und erlebe die Möglichkeiten
                        die Koboot dir für deine Booterfahrung bietet!</Text>

                    <Pressable style={globalStyles.button} onPress={() => router.push("BoatEdit")}>
                        <Text style={globalStyles.buttonText}>Mein eigenes Boot hinzufügen</Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
}

const localStyles = StyleSheet.create({
    outerContainerWhite: {
        backgroundColor: theme.lightColors.background,
        flex: 1,
    },
    containerWhite: {
        backgroundColor: theme.lightColors.background,
        height: 100,
        justifyContent: "flex-end",
    },
    containerGrey: {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius,
        backgroundColor: theme.lightColors.secondary,
        flex: 1,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    centeredText: {
        textAlign: "center",
        marginBottom: 40
    }
});
