import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native';

type CardProps = {
    title: string,
    location: string,
    image: any,
}
export default function CustomCard({title, location, image}: CardProps){
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>

                <Text>{title}</Text>
                <Image source={image} style={styles.cardImage}/>
                <Text>{location}</Text>    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
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
    },
    cardImage: {
        width: "50%",
        height: "50%",
    }
});
