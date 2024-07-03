import {Stack} from "expo-router";
import React from "react";
import theme from "../../../theme/theme";
import { globalStyles } from "../../../theme/global";

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
                headerTitle: "Mehr Infos zu diesem Hafen",
                headerShown: false
            }}/>
        </Stack>
    )
}