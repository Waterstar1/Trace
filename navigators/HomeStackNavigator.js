import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import TrackScreen from '../screens/TrackScreen';
import COVIDScreen from '../screens/COVIDScreen';
import { Push } from 'bmd-push-react-native';
import { DeviceEventEmitter } from 'react-native';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title: ''}} />
            <Stack.Screen name='TrackScreen' component={TrackScreen} options = {{title: ''}} />
            <Stack.Screen name='COVIDScreen' component={COVIDScreen} options={{title: ''}} />
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
