import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AlertsScreen from '../screens/AlertsScreen';


const Stack = createStackNavigator();

const AlertsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Alerts' component={AlertsScreen} options={{ title:'' }}/>
        </Stack.Navigator>
    );
};

export default AlertsStackNavigator;
