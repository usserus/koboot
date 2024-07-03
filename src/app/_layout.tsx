import React from "react";
import { ThemeProvider } from '@rneui/themed';
import theme from "../../theme/theme";
import { Tabs, SplashScreen } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from "../../theme/global";

SplashScreen.preventAutoHideAsync();
export default function TabsLayout() {

    const [loaded, error] = useFonts({
        'FireSans-Medium':require('../../assets/fonts/FiraSans-Medium.ttf'),
        'FireSans-Regular':require('../../assets/fonts/FiraSans-Regular.ttf'),
        'FireSans-Bold':require('../../assets/fonts/FiraSans-Bold.ttf')
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
            <Tabs screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.lightColors.primary,
                    height: 80,
                    paddingTop: 10,
                    paddingBottom: 20
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#C1C1C1'
            }}>
                <Tabs.Screen name="index" options={{
                    headerTitle: "Dein Standort",
                    title: "Home",
                    headerTintColor: theme.lightColors.primary,
                    headerTitleStyle: globalStyles.headlineText,
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="map-signs" color={color} size={size} />
                    )
                }}/>
                <Tabs.Screen name="(harbors)" options={{
                    headerShown:false,
                    title: "Häfen",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="lighthouse" color={color} size={size} />
                    )
                }}/>
                <Tabs.Screen name="(bridges)" options={{
                    headerShown:false,
                    title: "Brücken",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="bridge-water" color={color} size={size} />
                    )
                }}/>
                <Tabs.Screen name="(boat)" options={{
                    headerShown:false,
                    title: "Boot",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6 name="sailboat" color={color} size={size} />
                    )
                }}/>
            </Tabs>
        </ThemeProvider>
    )
}