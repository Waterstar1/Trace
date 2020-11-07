import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStackNavigator from './HomeStackNavigator';
import FriendsStackNavigator from './FriendsStackNavigator';
import AlertsStackNavigator from './AlertsStackNavigator';
import MyHistoryStackNavigator from './MyHistoryStackNavigator';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({tintColor}) => (<Icon name='home' color={tintColor} size={25} />)
                }}
            />
            <Tab.Screen
                name='Friends'
                component={FriendsStackNavigator}
                options={{
                    tabBarIcon: ({tintColor}) => (<Icon name='user-friends' color={tintColor} size={25} />)
                }}
            />
            <Tab.Screen
                name='Alerts'
                component={AlertsStackNavigator}
                options={{
                    tabBarIcon: ({tintColor}) => (<Icon name='bell' color={tintColor} size={25} />)
                }}
            />
            <Tab.Screen
                name='My History'
                component={MyHistoryStackNavigator}
                options={{
                    tabBarIcon: ({tintColor}) => (<Icon name='list-alt' color={tintColor} size={25} />)
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
