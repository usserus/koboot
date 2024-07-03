import React from "react";
import {View,Text, Pressable} from "react-native";
import { router } from "expo-router";
import { Button } from "@rneui/themed";

export default function HarborPage(){
    return (
        <View>
            <Text>Harbors</Text>
            <Button title="Solid">Hi</Button>
            <Pressable onPress={() => router.push("0")}>
                <Text>See Harbor Details</Text>
            </Pressable>
        </View>
    )
}