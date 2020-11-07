import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ title:'' }}/>
        </Stack.Navigator>
    );
};

export default HomeStackNavigator;
