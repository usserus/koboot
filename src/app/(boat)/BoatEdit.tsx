import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet, TextInput, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from "../../../theme/global";
import theme from "../../../theme/theme";
import { Divider, Button } from '@rneui/themed';
import { boats } from "../../../data/boats";

export default function BoatEditPage() {
    const [boat, setBoat] = useState(null);
    const [isEditing, setIsEditing] = useState({
        name: false,
        manufacturer: false,
        length: false,
        width: false,
        height: false,
        depth: false,
    });

    useEffect(() => {
        // Load the boat data from the boats array
        setBoat(boats[0]);
    }, []);

    const handleChange = (key, value) => {
        setBoat({ ...boat, [key]: value });
    };

    const handleSave = () => {
        // Update the boat in the boats array
        const updatedBoats = boats.map(b => (b.name === boat.name ? boat : b));
        // Update the global boats array (you might need to implement a global state or use context for a real app)
        boats.splice(0, boats.length, ...updatedBoats);
        setIsEditing({
            name: false,
            manufacturer: false,
            length: false,
            width: false,
            height: false,
            depth: false,
        });
    };

    const toggleEdit = (field) => {
        setIsEditing(prev => ({ ...prev, [field]: !prev[field] }));
    };

    if (!boat) {
        return (
            <View style={globalStyles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

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
                        {isEditing.name ? (
                            <TextInput
                                style={localStyles.inputField}
                                value={boat.name}
                                onChangeText={(text) => handleChange('name', text)}
                            />
                        ) : (
                            <View style={localStyles.editableRow}>
                                <Text style={localStyles.valueLabel}>{boat.name}</Text>
                                <Pressable onPress={() => toggleEdit('name')}>
                                    <Icon name="edit" size={20} color={theme.darkColors.primary} />
                                </Pressable>
                            </View>
                        )}
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Hersteller:</Text>
                        {isEditing.manufacturer ? (
                            <TextInput
                                style={localStyles.inputField}
                                value={boat.manufacturer}
                                onChangeText={(text) => handleChange('manufacturer', text)}
                            />
                        ) : (
                            <View style={localStyles.editableRow}>
                                <Text style={localStyles.valueLabel}>{boat.manufacturer}</Text>
                                <Pressable onPress={() => toggleEdit('manufacturer')}>
                                    <Icon name="edit" size={20} color={theme.darkColors.primary} />
                                </Pressable>
                            </View>
                        )}
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Länge:</Text>
                        {isEditing.length ? (
                            <TextInput
                                style={localStyles.inputField}
                                value={boat.length.toString()}
                                onChangeText={(text) => handleChange('length', text)}
                                keyboardType="numeric"
                            />
                        ) : (
                            <View style={localStyles.editableRow}>
                                <Text style={localStyles.valueLabel}>{boat.length}</Text>
                                <Pressable onPress={() => toggleEdit('length')}>
                                    <Icon name="edit" size={20} color={theme.darkColors.primary} />
                                </Pressable>
                            </View>
                        )}
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Breite:</Text>
                        {isEditing.width ? (
                            <TextInput
                                style={localStyles.inputField}
                                value={boat.width.toString()}
                                onChangeText={(text) => handleChange('width', text)}
                                keyboardType="numeric"
                            />
                        ) : (
                            <View style={localStyles.editableRow}>
                                <Text style={localStyles.valueLabel}>{boat.width}</Text>
                                <Pressable onPress={() => toggleEdit('width')}>
                                    <Icon name="edit" size={20} color={theme.darkColors.primary} />
                                </Pressable>
                            </View>
                        )}
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Höhe:</Text>
                        {isEditing.height ? (
                            <TextInput
                                style={localStyles.inputField}
                                value={boat.height.toString()}
                                onChangeText={(text) => handleChange('height', text)}
                                keyboardType="numeric"
                            />
                        ) : (
                            <View style={localStyles.editableRow}>
                                <Text style={localStyles.valueLabel}>{boat.height}</Text>
                                <Pressable onPress={() => toggleEdit('height')}>
                                    <Icon name="edit" size={20} color={theme.darkColors.primary} />
                                </Pressable>
                            </View>
                        )}
                    </View>
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}>Tiefgang:</Text>
                        {isEditing.depth ? (
                            <TextInput
                                style={localStyles.inputField}
                                value={boat.depth.toString()}
                                onChangeText={(text) => handleChange('depth', text)}
                                keyboardType="numeric"
                            />
                        ) : (
                            <View style={localStyles.editableRow}>
                                <Text style={localStyles.valueLabel}>{boat.depth}</Text>
                                <Pressable onPress={() => toggleEdit('depth')}>
                                    <Icon name="edit" size={20} color={theme.darkColors.primary} />
                                </Pressable>
                            </View>
                        )}
                    </View>
                </View>

                <View style={globalStyles.container}>
                    <Text style={globalStyles.headlineText}>Foto:</Text>
                </View>

                <View style={[globalStyles.container, localStyles.containerGrey]}>
                    <Image source={boat.image} style={localStyles.image} />
                    <Divider style={localStyles.divider} />
                    <View style={localStyles.nameContainer}>
                        <Button style={globalStyles.SecondaryButton} titleStyle={globalStyles.SecondaryButtonText}>
                            Foto löschen
                        </Button>
                        <Button style={[globalStyles.SecondaryButton, localStyles.valueLabel]} titleStyle={globalStyles.SecondaryButtonText}>
                            Foto aufnehmen
                        </Button>
                    </View>
                    <View style={localStyles.nameContainer}>
                        <Text style={localStyles.nameLabel}></Text>
                        <Button style={[globalStyles.SecondaryButton, localStyles.valueLabel]} titleStyle={globalStyles.SecondaryButtonText}>
                            Foto hochladen
                        </Button>
                    </View>
                </View>

                <View style={globalStyles.container}>
                    <Button style={globalStyles.PrimaryButton} titleStyle={globalStyles.PrimaryButtonText} onPress={handleSave}>
                        Boot speichern
                    </Button>
                </View>

            </View>
        </ScrollView>
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
        margin: 20,
        padding: 20,
    },
    inputField: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
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
});
