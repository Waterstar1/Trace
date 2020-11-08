import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';


const AlertsScreen = () => {
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
