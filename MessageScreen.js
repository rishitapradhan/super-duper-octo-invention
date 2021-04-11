import * as React from 'react'
import {StyleSheet,Text,View,Button,TouchableOpacity,TextInput} from 'react-native'
import {Header,ListItem,Icon} from 'react-native-elements'
import firebase from 'firebase'
import db from "../config"
export default class MessageScreen extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            allNotifications:[]
        }
        this.notificationref=null
    }
    getNotifications=()=>{
        this.requestref=db.collection("all_notifications").where("NotificationStatus","==","unread").where("TargetedUserId","==",this.state.userId
        .onSnapShot((snapshot)=>{
        var allNotifications = [] 
        snapshot.docs 
        }
    }
    render(){
        return(

        )
    }
}