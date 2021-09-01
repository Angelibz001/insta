import { StatusBar } from "expo-status-bar";
import React from 'react';
import * as firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "./components/auth/landing";


const firebaseConfig = {
    apiKey: "AIzaSyAECHTYBlzAzYJlqBUS7eP4VtQdw547epQ",
    authDomain: "intsagram-20be0.firebaseapp.com",
    projectId: "intsagram-20be0",
    storageBucket: "intsagram-20be0.appspot.com",
    messagingSenderId: "930382250417",
    appId: "1:930382250417:web:f757e4aeaa8d52d4a57d90",
    measurementId: "G-011JPRLDVL"
};

if (firebase.apps.length === 0) { 
    firebase.initializeApp(firebaseConfig)
}


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options = {{headerShow: false}}/> 
      </Stack.Navigator>

    </NavigationContainer>
  );
}