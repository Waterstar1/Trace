import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const TrackScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                Track your current location?
            </Text>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
                        <Icon name='times-circle' size={100} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
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
