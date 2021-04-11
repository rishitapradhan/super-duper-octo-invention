import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import {AppTabNavigator} from './Components/AppTabNavigator' 
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


 export default class App extends React.Component{
  render(){
    return(
    <AppContainer/>
    )
  }
}
const SwitchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
 
})
const AppContainer=createAppContainer(
  SwitchNavigator
)
