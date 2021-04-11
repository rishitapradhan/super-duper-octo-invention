import * as React from 'react'
import{Text,View,TouchableOpacity}from 'react-native'
import firebase from 'firebase'
import {DrawerItems}from 'react-navigation-drawer'
export default class SideBarMenu extends React.Component{
    render(){
        return(
            <View>
            <DrawerItems{...this.props}/>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('WelcomeScreen')
                firebase.auth().signOut()
              
            }}>  
            <Text>Log Out</Text>
            </TouchableOpacity>
            </View>
        )
    }
}