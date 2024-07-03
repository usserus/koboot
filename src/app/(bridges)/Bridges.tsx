import React from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { globalStyles, borderRadius } from "../../../theme/global";
import theme from "../../../theme/theme";
import { StyleSheet } from "react-native";
import CustomCard from "../../../components/CustomCard";
import { bridges } from "../../../data/bridges";
import { FlatList } from "react-native";

export default function BridgesPage() {

    const imagePath = `../../../assets/images/`;

    const renderItem = ({ item }) => (

        <CustomCard
            title={item.bridgeName}
            location={item.location}
            image={require('../../../assets/images/alterheinbrueckekonstanz.jpg')}
        />
    );

    return (
        <>
            <View style={globalStyles.outerContainerGreen}>

                <View style={[globalStyles.container, localStyles.containerGreen]}>
                    <Text style={[globalStyles.headlineText, { color: 'white' }]}>Alle Brücken in deiner Nähe</Text>
                </View>

                <View style={[globalStyles.container, localStyles.containerWhite]}>


                    <FlatList
                        data={bridges}
                        renderItem={renderItem}
                        keyExtractor={item => item.url} // Passe den KeyExtractor entsprechend deiner Datenstruktur an
                    />


                    <Pressable onPress={() => router.push("2")}>
                        <Text>See Bridge Details</Text>
                    </Pressable>


                    {/* <CustomCard
                        title="Brücke"
                        location="Ort"
                        image={require('../../../assets/images/alterheinbrueckekonstanz.jpg')} // Beispiel für lokales Bild im Projekt
                    /> */}


                </View>
            </View>
        </>
    )
}

const localStyles = StyleSheet.create({
    containerGreen: {
        backgroundColor: theme.lightColors.primary,
        height: 100,
        justifyContent: "flex-end",
    },
    containerWhite: {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        backgroundColor: theme.lightColors.white,
        flex: 1,
    }
});