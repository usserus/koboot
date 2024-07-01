import {Stack} from "expo-router";
import React from "react";

export default function BoatLayout(){
    return (
        <Stack>
            <Stack.Screen name="Boat" options={{
                headerTitle: "Boat",
                title: "Boat"
            }}/>
            <Stack.Screen name="BoatEdit" options={{
                headerTitle: "BoatEdit",
                title: "BoatEdit"
            }}/>
        </Stack>
    )
}