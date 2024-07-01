import {Stack} from "expo-router";
import React from "react";

export default function BridgeLayout(){
    return (
        <Stack>
            <Stack.Screen name="Bridges" options={{
                headerTitle: "Bridges",
                title: "Bridges"
            }}/>
            <Stack.Screen name="[id]" options={{
                headerTitle: "BridgeDetail",
                title: "BridgeDetail"
            }}/>
        </Stack>
    )
}