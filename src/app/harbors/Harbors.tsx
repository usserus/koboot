import React from "react";
import {View,Text, Pressable, FlatList} from "react-native";
import { router } from "expo-router";
import { globalStyles, borderRadius } from "../../../theme/global";
import CustomCard from "../../../components/CustomCard";
import { harbors } from "../../../data/harbors";

export default function HarborPage(){
    return (
        <View style={globalStyles.outerContainerGreen}>
            <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen, globalStyles.roundedContainerWhite]}>
                <FlatList data={harbors} renderItem={({ item }) => (
                    <Pressable onPress={() => router.push("harbors/item.harborName")}>
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