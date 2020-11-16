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
      <ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AlertScreen')}>
          <Text style={styles.text}>
            Somebody from Fran's Cafe has contracted COVID.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            Paul A. tested negative!
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
    minWidth: 350,
    maxWidth: 350,
    backgroundColor: '#66b0ff',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AlertsScreen;
