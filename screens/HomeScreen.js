import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Image, Linking, SafeAreaView } from 'react-native';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import * as Location from 'expo-location';
// import * as Device from 'expo-device';
// import { useCollectionData } from 'react-firebase-hooks/firestore';


const HomeScreen = ({ navigation }) => {
  // const firestore = firebase.firestore();
  
  // const locationRef = firestore.collection('locations');

  // const trackLocation = async(e) => {
  //   console.log("Success");
  //   Location.requestPermissionsAsync();
  //   var lat = 0;
  //   var long = 0;

  //   try {
  //     Location.getCurrentPositionAsync({})    
  //     let location = await Location.getCurrentPositionAsync();
  //     lat = await location.coords.latitude
  //     long = await location.coords.longitude
      
  //   } catch(e) {
  //     console.log("location failed");
  //   }

  //   await locationRef.add({
  //     location: new firebase.firestore.GeoPoint(lat, long),
  //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  //     uid: Device.osBuildId,
  //     covid: false
  //   })

  //   let response = await fetch('https://3f882b53.us-south.apigw.appdomain.cloud/random-numbers');
  //   let responseJson = await response.json();
  //   console.log(responseJson[0]);
  // }

  // const haveCovid = async(e) => {
  //   console.log("Success");
  //   const collection = firestore.collection("locations")
  //   const newDocumentBody = {
  //     covid: true
  //   }

  //   collection.where('uid', '==', Device.osBuildId).get().then(response => {
  //     let batch = firebase.firestore().batch()
  //     response.docs.forEach((doc) => {
  //         const docRef = doc.ref
  //         batch.update(docRef, newDocumentBody)
  //     })
  //     batch.commit().then(() => {
  //         console.log(`updated all documents inside ${collectionName}`)
  //     })
  //   })
  // }

  // const comparesLocations = () => {
  //   const haversine = require('haversine');
  //   var nearby = [];
  //   firestore.collection('locations').where('covid', '==', true).limit(2).get().then(snapshot => {
  //     firestore.collection('locations').where('uid', '==', Device.osBuildId).get().then(snapshot2 => {
  //       snapshot.docs.forEach(doc1 => {
  //         snapshot2.docs.forEach(doc2 => {
  //           let start = {latitude: doc1.data().location.latitude, longitude: doc1.data().location.longitude}
  //           let end = {latitude: doc2.data().location.latitude, longitude: doc2.data().location.longitude}
  //           if (haversine(start, end, {threshold: 100, unit: 'meter'})) {
  //             nearby.push(doc1.data().location);
  //           }
  //         })
  //       })
  //     console.log(nearby);
  //     })   
  //   })
  // }

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
