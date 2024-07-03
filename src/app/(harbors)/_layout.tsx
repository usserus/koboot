import {Stack} from "expo-router";
import React from "react";

export default function HarborLayout(){
    return (
        <Stack>
            <Stack.Screen name="Harbors" options={{
                headerTitle: "Harbors",
                title: "Harbors"
            }}/>
            <Stack.Screen name="[harborId]" options={{
                headerTitle: "HarborDetail",
                title: "HarborDetail"
            }}/>
        </Stack>
    )
}