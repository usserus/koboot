import React from "react";
import {View,Text, Dimensions, ScrollView} from "react-native";
import { Divider, Image } from '@rneui/themed';
import { StyleSheet } from "react-native";
import { globalStyles } from "../../../theme/global";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../../theme/theme";
import { useLocalSearchParams } from "expo-router";
import { harbor } from "../../../models/harbor";
import DetailHeader from "../../../components/DetailHeader";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function HarborDetail(){
    const item = useLocalSearchParams() as unknown as harbor;
    const { harborName, location, image, description, openingHours } = item;

    return (
        <ScrollView>
            <View>
                <Image 
                    source={image} 
                    style={globalStyles.image}>
                </Image>
                <View style={globalStyles.overlayImage}></View>
                <Text style={[globalStyles.headlineText, globalStyles.overlayText]}>Mehr Infos zu diesem Hafen</Text>
            </View>

            <LinearGradient
                colors={['transparent', theme.lightColors.primary]}
                style={globalStyles.gradientContainer}
            >
                <View style={[globalStyles.contentContainer, globalStyles.noOverlay]}>
                    <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerGreen]}>
                        <DetailHeader
                            name={item.harborName}
                            location={item.location}
                            icon={"location-outline"}>
                        </DetailHeader>
                        <Text style={[globalStyles.headlineText]}>Beschreibung</Text>
                        <Text style={globalStyles.text}>{description}</Text>
                        <Divider style={globalStyles.divider} />

                        <Text style={[globalStyles.headlineText]}>Öffnungszeiten</Text>

                        <View>
                            <View style={localStyles.iconText}>
                                <Ionicons name={"time-outline"} size={18} color="black" />
                                <Text style={[globalStyles.text]}>{item.openingHours}</Text>
                            </View>
                            <Divider style={globalStyles.divider} />
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        marginLeft: 10,
    }
});
