import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Linking } from 'react-native';


const AlertScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            You were at Fran's Cafe within fifteen minutes of somebody who just tested positive for COVID.
        </Text>
        <Image source={require('../assets/frans.jpg')} />
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/testing.html')}>
            <Text style={styles.buttontext}>
                Get Tested
            </Text>
        </TouchableOpacity>
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
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 70,
    padding: 10,
    minWidth: 100,
    maxWidth: 100,
    backgroundColor: '#66b0ff',
  },
  buttontext: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
  },
  text: {
    color: '#000',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default AlertScreen;
