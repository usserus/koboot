import {View, Text, StyleSheet} from "react-native";
import { globalStyles } from "../theme/global";
import { HeaderProps } from '../models/HeaderProps';
import {Image} from "@rneui/themed";
import React from "react";



export default function ImageHeader({ image, headlineText}: HeaderProps) {
    return (
        <View>
            <Image
                source={image}
                style={[globalStyles.image,localStyles.imageBackground]}>
            </Image>
            <View style={globalStyles.overlayImage}></View>
            <Text style={[globalStyles.headlineText, globalStyles.overlayText]}>
                {headlineText}</Text>
        </View>
    );
}

const localStyles = StyleSheet.create({
    imageBackground: {
        resizeMode: "cover",
    },
});









