import React, { useState, useEffect } from "react";
import { View, Text, Pressable, ScrollView, StyleSheet, TextInput, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { globalStyles } from "../../../theme/global";
import theme from "../../../theme/theme";
import { Divider, Button } from '@rneui/themed';
import { boats } from "../../../data/boats";
import { useNavigation } from "expo-router";

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
        //load the boat data from the boats array - from boats.ts
        setBoat(boats[0]);
    }, []);

    const handleChange = (key, value) => {
        setBoat({ ...boat, [key]: value });
    };

    const navigation = useNavigation();

    const handleSave = () => {
        // Update the boat in the boats array
        const updatedBoats = boats.map(b => (b.name === boat.name ? boat : b));
        // Update the global boats array
        boats.splice(0, boats.length, ...updatedBoats);
        setIsEditing({
            name: false,
            manufacturer: false,
            length: false,
            width: false,
            height: false,
            depth: false,
        });
        navigation.goBack();
    };

    const toggleEdit = (field) => {
        setIsEditing(prev => ({ ...prev, [field]: !prev[field] }));
    };

    // solange boat null ist da es lädt
    if (!boat) {
        return (
            <View style={globalStyles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }


    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={[globalStyles.outerContainerGreen]}>
                <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen]}>
                    <Text style={globalStyles.headlineText}>Daten:</Text>
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

                
                    <Text style={globalStyles.headlineText}>Foto:</Text>
                

                    <View style={[globalStyles.container, localStyles.containerGrey]}>
                        <Image source={boat.image} style={localStyles.image} />
                        <Divider style={localStyles.divider} />
                       
                        <Button style={[globalStyles.SecondaryButton]} titleStyle={globalStyles.SecondaryButtonText}>
                            <View style={localStyles.iconContainer}>
                                <Icon name="delete" size={20} color={theme.darkColors.primary} />
                                <Text style={localStyles.iconText}>Foto löschen</Text>
                            </View>
                        </Button>

                        <Button style={[globalStyles.SecondaryButton]} titleStyle={globalStyles.SecondaryButtonText}>
                            <View style={localStyles.iconContainer}>
                                <Icon name="camera" size={20} color={theme.darkColors.primary} />
                                <Text style={localStyles.iconText}>Foto aufnehmen</Text>
                            </View>
                        </Button>
                        
                        <Button style={[globalStyles.SecondaryButton]} titleStyle={globalStyles.SecondaryButtonText}>
                            <View style={localStyles.iconContainer}>
                                <Icon name="cloud-upload" size={20} color={theme.darkColors.primary} />
                                <Text style={localStyles.iconText}>Foto hochladen</Text>
                            </View>
                        </Button>
                    </View>
                    

                    <View style={globalStyles.container}>
                        <Button style={globalStyles.PrimaryButton} titleStyle={globalStyles.PrimaryButtonText} onPress={handleSave}>
                            Boot speichern
                        </Button>
                    </View>
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
