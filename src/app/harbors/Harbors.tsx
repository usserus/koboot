import React from "react";
import { View, Pressable } from "react-native";
import { router } from "expo-router";
import { globalStyles } from "../../../theme/global";
import CustomCard from "../../../components/CustomCard";
import { harbors } from "../../../data/harbors";
import { FlatList } from "react-native";

export default function HarborPage(){
    return (
        <View style={globalStyles.outerContainerGreen}>
            <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen, globalStyles.roundedContainerWhite]}>
                <FlatList data={harbors} renderItem={({ item }) => (
                    <Pressable onPress={() => router.push({ pathname: "harbors/item.harborName", params: item })}>
                        <CustomCard
                            title={item.harborName}
                            location={item.location}
                            image={item.image}
                        />
                    </Pressable>
                )}/>
            </View>
        </View>
    )
}