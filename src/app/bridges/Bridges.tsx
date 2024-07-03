import React from "react";
import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { globalStyles, borderRadius } from "../../../theme/global";
import CustomCard from "../../../components/CustomCard";
import { bridges } from "../../../data/bridges";
import { FlatList } from "react-native";

export default function BridgesPage() {
    return (
        <View style={globalStyles.outerContainerGreen}>
            <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen, globalStyles.roundedContainerWhite]}>
                <FlatList data={bridges} renderItem={({ item }) => (
                    <Pressable onPress={() => router.push({ pathname: "bridges/item.harborName", params: item })}>
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