import React from "react";
import {View,Text, Pressable} from "react-native";
import { router } from "expo-router";

export default function BoatPage(){
    return (
        <View>
            <Text>Boat Page!!</Text>
            <Pressable onPress={() => router.push("BoatEdit")}>
                <Text>Edit your boat</Text>
            </Pressable>
        </View>
    )
}