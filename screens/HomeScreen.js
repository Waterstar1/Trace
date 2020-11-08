import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Image, View, Linking } from 'react-native';


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
      <ScrollView>
        <Text>
          Scrollview.
        </Text>
      </ScrollView>
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
});

export default HomeScreen;
