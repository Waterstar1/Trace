import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';


const AlertsScreen = () => {
  // let response = await fetch('https://3f882b53.us-south.apigw.appdomain.cloud/random-numbers%27);
  // let responseJson = await response.json();
  // console.log(responseJson[0]);

  return (
    <SafeAreaView style={styles.container}>
        <Text>
            Alerts
        </Text>
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
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  scrollview: {

  }
});

export default AlertsScreen;
