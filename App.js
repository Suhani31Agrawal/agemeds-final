import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from "./screens/LoginScreen"
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { BottomTabNavigator } from './components/BottomTabNavigator';


export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator=createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  AppDrawerNavigator:{screen:AppDrawerNavigator},
  BottomTab: {screen: BottomTabNavigator}
})
const AppContainer=createAppContainer(switchNavigator)