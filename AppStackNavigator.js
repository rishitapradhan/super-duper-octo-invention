import * as React from 'react'
import {Text,View,StyleSheet}from 'react-native'
import{createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonateScreen'
import MessageScreen from '../screens/MessageScreen'
import ReceiverDetails from '../screens/ReceiverDetails'
export const AppStackNavigator=createStackNavigator({
    BookExchange:{screen:BookExchange,
    navigationOptions:{
       headerShown:false

    }
    },
    MessageScreen:{screen:MessageScreen,
    navigationOptions:{
        headerShown:false

    }
   }},
    {intialRouteName:'BookExchange'}
)