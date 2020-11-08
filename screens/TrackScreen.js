import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';


const TrackScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>
                Are you sure you want to track your current location?
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}>
                    <Icon name='times-circle' size={100} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Icon name='check-circle' size={100} />
                </TouchableOpacity>
            </View>
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
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
      padding: 10,
    },
});

export default TrackScreen;
