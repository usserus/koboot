import React from "react";
import {View,Text, Pressable} from "react-native";
import { router } from "expo-router";

export default function BridgesPage(){
    return (
        <View>
            <Text>Bridges</Text>
            <Pressable onPress={() => router.push("1")}>
                <Text>See Bridge Details</Text>
            </Pressable>
        </View>
    )
}