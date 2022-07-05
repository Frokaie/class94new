import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from "./Screens/LoginScreen";
import Catagories from './Screens/catagories';
import BottomTabNavigator from './navigation/bottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  render(){
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <BottomTabNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
