import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../../../theme/global";
import theme from "../../../theme/theme";
import { Divider, Button } from '@rneui/themed';
import { useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function BoatEditPage() {

    const navigation = useNavigation();

    const [boatName, setBoatName] = useState('');
    const [boatManufacturer, setBoatManufacturer] = useState('');
    const [boatLength, setBoatLength] = useState('');
    const [boatWidth, setBoatWidth] = useState('');
    const [boatHeight, setBoatHeight] = useState('');
    const [boatDraft, setBoatDraft] = useState('');

    useEffect(() => {
        const loadBoatData = async () => {
            try {
                const storedBoatData = await AsyncStorage.getItem('boatData');
                if (storedBoatData) {
                    const boatData = JSON.parse(storedBoatData);
                    setBoatName(boatData.boatName || '');
                    setBoatManufacturer(boatData.boatManufacturer || '');
                    setBoatLength(boatData.boatLength || '');
                    setBoatWidth(boatData.boatWidth || '');
                    setBoatHeight(boatData.boatHeight || '');
                    setBoatDraft(boatData.boatDraft || '');
                }
            } catch (error) {
                console.error('Failed to load boat data', error);
            }
        };
        loadBoatData();
    }, []);


    const handleSave = async () => {
        const boatData = {
            boatName,
            boatManufacturer,
            boatLength,
            boatWidth,
            boatHeight,
            boatDraft
        };
        try {
            await AsyncStorage.setItem('boatData', JSON.stringify(boatData));
            navigation.goBack();
        } catch (error) {
            console.error('Failed to save boat data', error);
        }
    };

    const handleDelete = async () => {
        try {
            await AsyncStorage.removeItem('boatData');
            navigation.goBack();
        } catch (error) {
            console.error("Failed to delete boat data", error);
        }
    };


    const handleNumberChange = (setter) => (value) => {
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            setter(value);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={[globalStyles.outerContainerGreen]}>
                <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen]}>
                    <Text style={globalStyles.headlineText}>Daten:</Text>
                    <View style={[globalStyles.container, localStyles.containerGrey]}>
                        <View style={localStyles.nameContainer}>
                            <Text style={localStyles.nameLabel}>Name:</Text>
                            <TextInput
                                style={localStyles.inputField}
                                value={boatName}
                                onChangeText={setBoatName}
                            />
                        </View>

                        <Divider style={localStyles.divider} />

                        <View style={localStyles.nameContainer}>
                            <Text style={localStyles.nameLabel}>Hersteller:</Text>
                            <TextInput
                                style={localStyles.inputField}
                                value={boatManufacturer}
                                onChangeText={setBoatManufacturer}
                            />
                        </View>

                        <Divider style={localStyles.divider} />

                        <View style={localStyles.nameContainer}>
                            <Text style={localStyles.nameLabel}>Länge:</Text>
                            <TextInput
                                style={localStyles.inputField}
                                keyboardType="numeric"
                                value={boatLength}
                                onChangeText={handleNumberChange(setBoatLength)}
                            />
                        </View>

                        <Divider style={localStyles.divider} />

                        <View style={localStyles.nameContainer}>
                            <Text style={localStyles.nameLabel}>Breite:</Text>
                            <TextInput
                                style={localStyles.inputField}
                                keyboardType="numeric"
                                value={boatWidth}
                                onChangeText={handleNumberChange(setBoatWidth)}
                            />
                        </View>

                        <Divider style={localStyles.divider} />

                        <View style={localStyles.nameContainer}>
                            <Text style={localStyles.nameLabel}>Höhe:</Text>
                            <TextInput
                                style={localStyles.inputField}
                                keyboardType="numeric"
                                value={boatHeight}
                                onChangeText={handleNumberChange(setBoatHeight)}
                            />
                        </View>

                        <Divider style={localStyles.divider} />

                        <View style={localStyles.nameContainer}>
                            <Text style={localStyles.nameLabel}>Tiefgang:</Text>
                            <TextInput
                                style={localStyles.inputField}
                                keyboardType="numeric"
                                value={boatDraft}
                                onChangeText={handleNumberChange(setBoatDraft)}
                            />
                        </View>
                    </View>
                    <View style={globalStyles.container}>
                        <Button style={globalStyles.PrimaryButton} titleStyle={globalStyles.PrimaryButtonText} onPress={handleSave}>
                            Boot speichern
                        </Button>
                     </View>
                    <View style={globalStyles.container}>
                        <Button style={globalStyles.PrimaryButton} titleStyle={globalStyles.PrimaryButtonText} onPress={handleDelete}>
                            Boot löschen
                         </Button>
                    </View>
                </View>
            </View>       
        </TouchableWithoutFeedback>
    );
}

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
        fontSize: 16,
        color: theme.darkColors.primary,
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
        marginTop: 10,
        marginBottom: 40
    },
    inputField: {
        flex: 1,
        paddingHorizontal: 6,
        paddingVertical: 1,
        borderWidth: 1,
        borderColor: theme.lightColors.primary,
        borderRadius: 8,
        fontSize: 16,
        color: theme.darkColors.primary,
    },
    editableRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconText: {
        marginLeft: 5,
        color: theme.darkColors.primary,
    }
});
