import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native';
import { Divider } from '@rneui/themed';
import theme from '../theme/theme';
import { globalStyles } from '../theme/global';
import { CardProps } from '../data/cardProps';

export default function CustomCard({ title, location, image }: CardProps) {
    return (
        <View style={styles.cardShadow}>
            <View style={styles.card}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardContent}>
                        <Text style={[globalStyles.headlineText, { fontSize: 16 }]}>{title}</Text>
                        <Divider style={styles.divider} />
                        <Text style={globalStyles.text}>{location}</Text>
                    </View>
                    <Image source={image} style={styles.cardImage} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        overflow: "hidden",
        borderRadius: 26,
        height: 110,
    },
    cardShadow: {
        borderRadius: 26,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        flex: 1,
        justifyContent: "center",
    },
    cardImage: {
        flex: 1,
        height: 110,
        resizeMode: "cover",
        borderRadius: 26,
    },
    cardContainer: {
        flexDirection: "row",
    },
    divider: {
        marginVertical: 6,
        height: 1.2,
        backgroundColor: theme.lightColors.primary,
    },
});
