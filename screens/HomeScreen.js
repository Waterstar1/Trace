import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Linking, SafeAreaView } from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import * as Location from 'expo-location';
// import * as Device from 'expo-device';
// import { useCollectionData } from 'react-firebase-hooks/firestore';


const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => navigation.navigate('TrackScreen')}>
          <Image source={require('../assets/track.png')} style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('COVIDScreen')}>
          <Image source={require('../assets/covid.png')} style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html')}>
          <Image source={require('../assets/sick.png')} style={styles.button} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/prevention.html')}>
          <Image source={require('../assets/health.png')} style={styles.button} />
        </TouchableOpacity>
      </View>
        <Image source={require('../assets/twitter.png')} style={styles.twitter} />
    </SafeAreaView>
  );
}

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
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 130,
    padding: 10,
    minWidth: 150,
    maxWidth: 150,
    backgroundColor: '#66b0ff',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  twitter: {
    borderRadius: 25,
    top: 200,
    height: 450,
    padding: 0,
    minWidth: 300,
    maxWidth: 300,
  },
});

export default HomeScreen;
