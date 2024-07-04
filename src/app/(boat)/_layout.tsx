import {Stack} from "expo-router";
import React from "react";

export default function BoatLayout(){
    return (
        <Stack>
            <Stack.Screen name="Boat" options={{
                headerShown: false
            }}/>
            <Stack.Screen name="BoatEdit" options={{
                headerShown: false
            }}/>
        </Stack>
    )
}