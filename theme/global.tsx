import { StyleSheet } from 'react-native';
import theme from "../theme/theme";


export const borderRadius = 40;

export const globalStyles = StyleSheet.create({
    headlineText: {
        fontSize: 18,
        fontWeight: "medium",
        fontFamily: "FireSans-Medium",
    },
    text: {
        fontSize: 12,
        fontFamily: "FireSans-Regular",
    },
    container: {
        padding: 20,
        backgroundColor: "#ffffff",
    },
    outerContainerGreen: {
        flex: 1,
        backgroundColor: theme.lightColors.primary,
    },
    card: {

    }
});

