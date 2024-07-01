import React from "react";
import { ThemeProvider } from '@rneui/themed';
import theme from "../../theme/theme";
import { Tabs, SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
export default function TabsLayout() {

    const [loaded, error] = useFonts({
        'FireSans-Medium':require('../../assets/fonts/FiraSans-Medium.ttf'),
        'FireSans-Regular':require('../../assets/fonts/FiraSans-Regular.ttf'),
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }



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