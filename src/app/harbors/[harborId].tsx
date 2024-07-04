import React from "react";
import {View,Text, Dimensions, ScrollView} from "react-native";
import { Image } from '@rneui/themed';
import { StyleSheet } from "react-native";
import { globalStyles } from "../../../theme/global";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../theme/theme";


const { width } = Dimensions.get('window');

export default function HarborDetail(){
    return (
        <ScrollView>
            <View>
                <Image 
                    source={require('../../../assets/images/alterheinbrueckekonstanz.jpg')} 
                    style={globalStyles.image}>
                </Image>
                <View style={globalStyles.overlayImage}></View>
                <Text style={[globalStyles.headlineText, globalStyles.overlayText]}>Mehr Infos zu diesen Hafen</Text>
            </View>

            <LinearGradient
                colors={['transparent', theme.lightColors.primary]}
                style={globalStyles.gradientContainer}
            >
                <View style={[globalStyles.contentContainer]}>
                    <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerGreen]}>
                    
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                        <Text>hi</Text>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}