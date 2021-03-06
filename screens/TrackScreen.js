import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';


const TrackScreen = ({ navigation }) => {
    const getAuth = () => {
        fetch("https://6587485d-6d3c-4cf6-9ae0-ceaf533de218-us-east1.apps.astra.datastax.com/api/rest/v1/auth",
            {
                "method": "POST",
                "headers": {
                    "Accept": "*/*",
                    "Content-Type": "application/json",
                },
            })
            .then(response => {
                console.log(JSON.stringify(response));
            })
            .catch(err => {
                console.error(err);
            }
        );
        navigation.navigate('HomeScreen');
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Track your current location?
            </Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                        <Icon name='times-circle' size={100} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={getAuth}>
                        <Icon name='check-circle' size={100} />
                    </TouchableOpacity>
                </View>
                <View style={styles.mapview}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.map}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                        showsUserLocation={true}
                    >
                        <Marker
                            title={'here'}
                            coordinate={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                            }}>
                                <Callout>
                                    <Text>You are here!</Text>
                                </Callout>
                        </Marker>
                    </MapView>
                </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttons: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      padding: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapview: {
        ...StyleSheet.absoluteFillObject,
        height: '50%',
        marginTop: '75%',
    },
    text: {
        fontSize: 30,
        marginTop: 50,
    },
});

export default TrackScreen;
