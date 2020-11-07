import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FriendsScreen from '../screens/FriendsScreen';


const Stack = createStackNavigator();

const FriendsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Friends' component={FriendsScreen} options={{ title:'' }}/>
        </Stack.Navigator>
    );
};

export default FriendsStackNavigator;
