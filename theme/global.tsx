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
    PrimaryButton: {
        backgroundColor: theme.lightColors.primary,
        borderRadius: borderRadius,
        paddingVertical: 2,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    PrimaryButtonText: {
        color: theme.lightColors.white,
    },
    SecondaryButton: {
        backgroundColor: theme.lightColors.background,
        borderRadius: borderRadius,
        paddingVertical: 2,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        type: "clear",

    },
    SecondaryButtonText: {
        color: theme.darkColors.primary,
        fontSize: 14
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

