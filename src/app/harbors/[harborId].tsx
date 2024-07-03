import React from "react";
import {View,Text, Dimensions} from "react-native";
import { Image } from '@rneui/themed';
import { StyleSheet } from "react-native";
import { globalStyles } from "../../../theme/global";


const { width } = Dimensions.get('window');

export default function HarborDetail(){
    return (
        <View>
            <Image 
                source={require('../../../assets/images/alterheinbrueckekonstanz.jpg')} 
                style={localStyles.image}>
            </Image>
            <View style={localStyles.overlayImage}></View>
            <Text style={[globalStyles.headlineText, localStyles.overlayText]}>Mehr Infos zu diesen Hafen</Text>
        </View>
    )
}

const localStyles = StyleSheet.create({
    overlayText: {
        color: 'white',
        position: 'absolute',
        bottom: 10,
        left: 20
    },
    image: {
        width: width, 
        height: 300, 
        resizeMode: 'cover'
    },
    overlayImage: {
        //setzt position auf absolute und füllt es aus
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
});