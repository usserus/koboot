import { Stack } from "expo-router";
import React from "react";
import { ThemeProvider } from '@rneui/themed';
import theme from "../../theme/theme";

export default function TabsLayout() {
    return (
        <ThemeProvider theme={theme}>
            <Stack>
                <Stack.Screen name="index" options={{
                    headerTitle: "Home",
                    title: "Home"
                }}/>
                <Stack.Screen name="(bridges)" options={{
                    headerShown:false
                }}/>
                <Stack.Screen name="(harbors)" options={{
                    headerShown:false
                }}/>
                <Stack.Screen name="(boat)" options={{
                    headerShown:false
                }}/>
            </Stack>
        </ThemeProvider>
    )
}