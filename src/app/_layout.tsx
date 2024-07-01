import { Stack } from "expo-router";
import React from "react";
import { ThemeProvider } from '@rneui/themed';
import theme from "../../theme/theme";

export default function TabsLayout() {
    return (
        <ThemeProvider theme={theme}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false
                }} />
            </Stack>
        </ThemeProvider>
    )
}