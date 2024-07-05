import { Divider } from "@rneui/base";
import { View, Text } from "react-native";
import { globalStyles } from "../theme/global";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HeaderProps } from '../models/HeaderProps';
import { StyleSheet } from "react-native";

export default function DetailHeader({ name, location, icon }: HeaderProps) {
    return (
        <View>
            <Text style={[globalStyles.headlineText]}>{name}</Text>
            <View style={localStyles.iconText}>
                <Ionicons name={icon} size={18} color="black" />
                <Text style={[globalStyles.text]}>{location}</Text>
            </View>
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







