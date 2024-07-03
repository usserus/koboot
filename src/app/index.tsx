import React from "react";
import {View,Text} from "react-native";
import { globalStyles } from "../../theme/global";
import { StyleSheet } from "react-native";

export default function HomePage(){
    return (
        <View style={globalStyles.outerContainerGreen}>
            <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen]}>
                <View style={[globalStyles.container, globalStyles.containerGrey]}>
                    <Text>placeholder map</Text>
                </View>
            </View>
        </View>
    )
}