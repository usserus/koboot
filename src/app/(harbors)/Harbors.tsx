import React from "react";
import {View,Text, Pressable} from "react-native";
import { router } from "expo-router";

export default function HarborPage(){
    return (
        <View>
            <Text>Harbors</Text>
            <Pressable onPress={() => router.push("1")}>
                <Text>See Harbor Details</Text>
            </Pressable>
        </View>
    )
}