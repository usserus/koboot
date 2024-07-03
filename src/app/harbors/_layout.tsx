import {Stack, router} from "expo-router";
import React from "react";
import theme from "../../../theme/theme";
import { globalStyles } from "../../../theme/global";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HarborLayout(){
    return (
        <Stack>
            <Stack.Screen name="Harbors" options={{
                headerTitle: "Alle Häfen in deiner Nähe",
                headerStyle: {backgroundColor: theme.lightColors.primary},
                headerTintColor: 'white',
                headerTitleStyle: globalStyles.headlineText
            }}/>
            <Stack.Screen name="[harborId]" options={{
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="chevron-back-outline" size={24} color="white" />
                    </TouchableOpacity>
                ),
                headerTitle: '',
                headerTransparent: true
            }}/>
        </Stack>
    )
}