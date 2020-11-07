import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyHistoryScreen from '../screens/MyHistoryScreen';


const Stack = createStackNavigator();

const MyHistoryStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='My History' component={MyHistoryScreen} options={{ title:'' }}/>
        </Stack.Navigator>
    );
};

export default MyHistoryStackNavigator;
