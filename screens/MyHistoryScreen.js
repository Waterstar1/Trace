import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const MyHistoryScreen = () => {
  // useEffect(
  //   "Fetch database and show locations on Google Map"
  // , []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
  },
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default MyHistoryScreen;
