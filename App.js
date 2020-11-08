import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomTabNavigator from './navigators/BottomTabNavigator';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBXkIiLkGJ7ulKhskEnlcsQTmTKSSthJZ0",
  authDomain: "hackrpi-back.firebaseapp.com",
  databaseURL: "https://hackrpi-back.firebaseio.com",
  projectId: "hackrpi-back",
  storageBucket: "hackrpi-back.appspot.com",
  messagingSenderId: "121524464331",
  appId: "1:121524464331:web:330e7c78eac8ce9fea494e",
  measurementId: "G-16G2GRZP65"
})

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
