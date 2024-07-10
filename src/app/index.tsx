import React, { useEffect, useState } from "react";
import {View,Text, Dimensions} from "react-native";
import { globalStyles, borderRadius } from "../../theme/global";
import * as Location from 'expo-location';
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function HomePage(){
    //states initialisieren
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            //Standort von User abfragen
            let { status } = await Location.requestForegroundPermissionsAsync();
            //wenn User ablehnt
            if (status !== 'granted') {
                setErrorMsg('Du hast den Standortzugriff zur Karte verweigert.');
                return;
            }

            //aktuellen Standort abfragen, in location speichern
            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);


    const bridges = [
        { id: 1, latitude: 47.666282, longitude: 9.178676, title: "Alterheinbrücke Konstanz" },
        { id: 2, latitude: 47.66825, longitude: 9.174083, title: "Fahrradbrücke Konstanz" },
        { id: 3, latitude: 47.670107, longitude: 9.163039, title: "Schänzlebrücke Konstanz" }
    ];

    return (
        <View style={globalStyles.outerContainerGreen}>
            <View style={[globalStyles.container, globalStyles.roundedBackgroundContainerBottomGreen]}>
                <View style={[globalStyles.container, globalStyles.containerGrey]}>
                    {location ? (
                        <MapView
                            style={localStyles.map}
                            region={location}
                            showsUserLocation={true}
                        >
                            {bridges.map(bridge => (
                                <Marker
                                    key={bridge.id}
                                    coordinate={{ latitude: bridge.latitude, longitude: bridge.longitude }}
                                    title={bridge.title}
                                />
                            ))}
                        </MapView>
                    ) : (
                        <Text>{errorMsg ? errorMsg : "Karte wird geladen..."}</Text>
                    )}
                </View>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});