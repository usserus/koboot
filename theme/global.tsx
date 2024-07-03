import { StyleSheet } from 'react-native';
import theme from "../theme/theme";


export const borderRadius = 40;

export const globalStyles = StyleSheet.create({
    headlineText: {
        fontSize: 18,
        fontWeight: "medium",
        fontFamily: "FireSans-Medium",
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

    },
    button: {
        backgroundColor: theme.lightColors.primary,
        borderRadius: borderRadius,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: theme.lightColors.white,
        fontSize: 16
    },
    outerContainerWhite: {
        backgroundColor: theme.lightColors.background,
        flex: 1,
    },
    containerWhite: {
        backgroundColor: theme.lightColors.background,
        height: 100,
        justifyContent: "flex-end",
    },
});

