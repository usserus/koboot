import { Dimensions, Platform, StyleSheet } from 'react-native';
import theme from "../theme/theme";


export const borderRadius = 40;
const { width } = Dimensions.get('window');

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
    boldText: {
        fontSize: 12,
        fontFamily: "FireSans-Bold",
    },
    divider: {
        marginVertical: 6,
        height: 1.5,
        backgroundColor: theme.lightColors.primary,
        marginTop: 20,
        marginBottom: 20
    },
    

    // Buttons
    /**PrimaryButton: {
        backgroundColor: theme.lightColors.primary,
        borderRadius: Platform.OS === "android" ? 0 : borderRadius,
        paddingVertical: 3,
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
        paddingVertical: 3,
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    SecondaryButtonText: {
        color: theme.darkColors.primary,
        fontSize: 14
    },**/







    // Layout Styles
    roundedBackgroundContainerBottomGreen: {
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        flex: 1
    },
    roundedBackgroundContainerGreen: {
        borderRadius: borderRadius,
        flex: 1
    },
    container: {
        padding: 20,
        backgroundColor: "#ffffff",
    },
    outerContainerGreen: {
        flex: 1,
        backgroundColor: theme.lightColors.primary,
    },
    outerContainerWhite: {
        backgroundColor: theme.lightColors.background,
        flex: 1,
    },
    roundedContainerWhite: {
        borderTopLeftRadius: borderRadius,
        borderTopRightRadius: borderRadius,
        backgroundColor: theme.lightColors.white,
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
    },



    //Layout Detail Seiten
    overlayText: {
        color: 'white',
        position: 'absolute',
        bottom: 50,
        left: 40
    },
    image: {
        width: width, 
        height: 300, 
        resizeMode: "cover"
    },
    overlayImage: {
        //setzt position auf absolute und füllt es aus
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    contentContainer: {
        marginTop: -50,
    },
    gradientContainer: {
        flex: 1,
    },
    noOverlay:{
        marginTop: -40,
        flex: 1,
    }

});

