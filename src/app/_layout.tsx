import {Tabs} from "expo-router";
import React from "react";

export default function TabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                headerTitle: "Home",
                title: "Home"
            }}/>
            <Tabs.Screen name="(boat)" options={{
                headerShown: false
            }}/>
            <Tabs.Screen name="(bridges)" options={{
                headerShown: false
            }}/>
            <Tabs.Screen name="(harbors)" options={{
                headerShown: false
            }}/>
        </Tabs>
    )
}