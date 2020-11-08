import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';


const AlertsScreen = ({ navigation }) => {
  const [numToAlert, setNumToAlert] = useState(null);

  const api = 'https://3f882b53.us-south.apigw.appdomain.cloud/random-numbers';

  useEffect(() => {
    const getRandom =  async () => {
      const response = await fetch(api);
      if (!response.ok) throw response;
      const json = await response.json();
      setNumToAlert(json[0]);
    }
    getRandom();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        You have made contact with {numToAlert} people in the past fourteen days.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttontext}>
          ALERT
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
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 130,
    padding: 10,
    minWidth: 150,
    maxWidth: 150,
    backgroundColor: 'red',
  },
  buttontext: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  }
});

export default AlertsScreen;
