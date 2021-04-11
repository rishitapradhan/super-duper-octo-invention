import * as React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import SideBarMenu from './SideBarMenu'
import SettingScreen from '../screens/SettingScreen'
export const AppDrawerNavigation=createDrawerNavigator({
    Home:{
     screen:AppTabNavigator
 },
 setting:{
     screen:SettingScreen
 }
},
{contentComponent:SideBarMenu},
{
    initialRouteName:'Home'
})