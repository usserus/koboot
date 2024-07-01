import React from "react";
import { ThemeProvider } from '@rneui/themed';
import theme from "../../theme/theme";
import { Tabs } from "expo-router";


export default function TabsLayout() {
    return (
        <ThemeProvider theme={theme}>
            <Tabs>
                <Tabs.Screen name="index" options={{
                    headerTitle: "Home",
                    title: "Home"
                }}/>
                <Tabs.Screen name="(bridges)" options={{
                    headerShown:false
                }}/>
                <Tabs.Screen name="(harbors)" options={{
                    headerShown:false
                }}/>
                <Tabs.Screen name="(boat)" options={{
                    headerShown:false
                }}/>
            </Tabs>
        </ThemeProvider>
    )
}