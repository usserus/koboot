import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../theme/global";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { Divider } from "@rneui/base";
import {DetailHeaderProps} from "../models/DetailHeaderProps";



export default function DetailHeader({ name, location, icon }: DetailHeaderProps) {
    return (
        <View>
            <Text style={[globalStyles.headlineText]}>{name}</Text>
            {icon && (
                <View style={localStyles.iconText}>
                    <Ionicons name={icon} size={18} color="black" />
                    <Text style={[globalStyles.text]}>{location}</Text>
                </View>
            )}
            {!icon && (
                <Text style={[globalStyles.text]}>{location}</Text>
            )}
            <Divider style={globalStyles.divider} />
        </View>
    );
}

const localStyles = StyleSheet.create({
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        marginLeft: 10,
    }
});
