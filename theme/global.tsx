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
      

    },
    SecondaryButtonText: {
        color: theme.darkColors.primary,
        fontSize: 14
    },
    roundedBackgroundContainerBottomGreen: {
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        flex: 1
    },
    roundedBackgroundContainerGreen: {
        borderRadius: borderRadius,
        flex: 1
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
    containerGrey: {
        borderRadius: borderRadius,
        backgroundColor: theme.lightColors.secondary,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flexDirection: 'column',
        flex: 1,
        flexGrow: 1
    }
});

