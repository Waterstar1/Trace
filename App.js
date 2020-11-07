import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from './navigators/BottomTabNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
