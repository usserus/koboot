import React from "react";
import {View, Text, Pressable, ScrollView, StyleSheet} from "react-native";
import {borderRadius, globalStyles} from "../../../theme/global";
import theme from "../../../theme/theme";
import { router } from "expo-router";
import { Divider } from "@rneui/themed";
import { Button } from '@rneui/themed';

export default function BoatEditPage() {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={[globalStyles.outerContainerWhite]}>

                <View style={globalStyles.container}>
                    <Text style={[globalStyles.headlineText, { color: theme.lightColors.primary }]}>Mein Boot</Text>
                </View>

                <View style={globalStyles.container}>
                    <Text style={globalStyles.headlineText}>Daten:</Text>
                </View>

                <View style={[globalStyles.container, localStyles.containerGrey]}>
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Name:</Text>
                        <Text style={localStyles.valueLabel}>Pandora</Text>
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Hersteller:</Text>
                        <Text style={localStyles.valueLabel}>Pandora</Text>
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Länge:</Text>
                        <Text style={localStyles.valueLabel}>Pandora</Text>
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Breite:</Text>
                        <Text style={localStyles.valueLabel}>Pandora</Text>
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Höhe:</Text>
                        <Text style={localStyles.valueLabel}>Pandora</Text>
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Tiefgang:</Text>
                        <Text style={localStyles.valueLabel}>Pandora</Text>
                    </View>
                </View>

                <View style={globalStyles.container}>
                    <Text style={globalStyles.headlineText}>Foto:</Text>
                </View>

                <View style={[globalStyles.container, localStyles.containerGrey]}>
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Foto hochgeladen:</Text>
                        <Text style={localStyles.valueLabel}>pandora.jpg</Text>
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Button style={globalStyles.SecondaryButton}  titleStyle={globalStyles.SecondaryButtonText}>
                            Foto löschen
                        </Button>
                        <Button style={[globalStyles.SecondaryButton, localStyles.valueLabel]}  titleStyle={globalStyles.SecondaryButtonText}>
                            Foto aufnehmen
                        </Button>
                    </View>
                    <View style={localStyles.nameContainer}>
                        {/* Einzeiliger Kommentar */}
                        <Text style={localStyles.nameLabel}> </Text>
                        <Button style={[globalStyles.SecondaryButton, localStyles.valueLabel]}  titleStyle={globalStyles.SecondaryButtonText}>
                            Foto hochladen
                        </Button>
                    </View>
                </View>

                <View style={globalStyles.container}>
                    <Button style={globalStyles.PrimaryButton}  titleStyle={globalStyles.PrimaryButtonText}>
                        <Pressable style={globalStyles.PrimaryButton} onPress={() => router.push("BoatEdit")}>
                            <Text style={globalStyles.PrimaryButtonText}>Boot speichern</Text>
                        </Pressable>
                    </Button>
                </View>



            </View>
        </ScrollView>
    );
}

// Lokale Styles für die Komponente
const localStyles = StyleSheet.create({
        nameContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        nameLabel: {
            flex: 1,
        },
        valueLabel: {
            textAlign: 'right',
        },
        divider: {
            width: '100%',
            height: 1.5,
            marginVertical: 16,
            backgroundColor: theme.lightColors.primary,
        },
        containerGrey: {
            backgroundColor: theme.lightColors.secondary,
            borderRadius: 40,
            margin: 20,
            padding: 20,
        },
    }
);
