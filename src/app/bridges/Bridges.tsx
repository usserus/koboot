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
    return (
            <View style={globalStyles.outerContainerGreen}>

                <View style={[globalStyles.container, localStyles.containerGreen]}>
                    <Text style={[globalStyles.headlineText, { color: 'white' }]}>Alle Brücken in deiner Nähe</Text>
                </View>

                <View style={[globalStyles.container, localStyles.containerWhite]}>
                    <FlatList data={bridges} renderItem={({ item }) => (
                        <Pressable onPress={() => router.push("bridges/item.bridgeName")}>
                            <CustomCard
                                title={item.bridgeName}
                                location={item.location}
                                image={item.image}
                            />
                        </Pressable>
                    )} />
                </View>
            </View>
    )
}

const localStyles = StyleSheet.create({
    containerGreen: {
        backgroundColor: theme.lightColors.primary,
        height: 80,
        justifyContent: "flex-end",
    },
    containerWhite: {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        backgroundColor: theme.lightColors.white,
        flex: 1,
    }
});