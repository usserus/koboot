import {Tabs} from "expo-router";
import React from "react";

export default function TabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerTitle: "Home",
                title: "Home"
            }}/>
            <Tabs.Screen name="../../src/screens/Boat" options={{
                headerTitle: "Boat",
                title: "Boat"
            }}/>
        </Tabs>
    )
}