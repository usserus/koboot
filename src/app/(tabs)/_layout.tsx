import {Tabs} from "expo-router";
import React from "react";

export default function TabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerTitle: "Home",
                title: "Home"
            }}/>
            <Tabs.Screen name="Boat" options={{
                headerTitle: "Boat",
                title: "Boat"
            }}/>
            <Tabs.Screen name="Bridges" options={{
                headerTitle: "Bridges",
                title: "Bridges"
            }}/>
            <Tabs.Screen name="Harbors" options={{
                headerTitle: "Harbors",
                title: "Harbors"
            }}/>
        </Tabs>
    )
}