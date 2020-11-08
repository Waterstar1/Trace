import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import {SearchBar} from 'react-native-elements';


const FriendsScreen = () => {
  return (
    <SafeAreaView>
      <SearchBar placeholder="Add a friend's username..." />
      <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            Paul A.
          </Text>
        </TouchableOpacity>
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
  button: {
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    height: 100,
    padding: 10,
    minWidth: 350,
    maxWidth: 350,
    backgroundColor: '#66b0ff',
  },
  text: {
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default FriendsScreen;
