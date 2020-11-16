import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AlertsScreen from '../screens/AlertsScreen';
import AlertScreen from '../screens/AlertScreen';


const Stack = createStackNavigator();

const AlertsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='AlertsScreen' component={AlertsScreen} options={{ title:'' }}/>
            <Stack.Screen name='AlertScreen' component={AlertScreen} options={{ title:'' }}/>
        </Stack.Navigator>
    );
};

export default AlertsStackNavigator;
