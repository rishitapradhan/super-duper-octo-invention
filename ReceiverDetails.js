import * as React from 'react'
import {Text,View,Button,TextInput,StyleSheet, Touchable, TouchableOpacity, FlatList} from 'react-native'
import firebase from 'firebase'
import db from '../config'
import {Header,Icon,Card} from 'react-native-elements'
export default class ReceiverDetails extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            ReceiverId:this.props.navigation.getParam('details')["user_id"],
            RequestId:this.props.navigation.getParam('details')["request_id"],
            BookName:this.props.navigation.getParam('details')["book_id"],
            ReasonToRequest:this.props.navigation.getParam('details')["reason_id"],
            ReceiverName:'',
            ReceiverContact:'',
            ReceiverAddress:'',
            ReceiverRequestDocId:''
        }
    }
    getReceiverDetails(){
        db.collection('users').where('emailId','==',this.state.ReceiverId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                this.setState({
                    ReceiverName:doc.data().firstName,
                    ReceiverContact:data().lastName,
                    ReceiverAddress:data().Address
                })
            })
        })
        db.collection('requested_books').where('request_id','==',this.state.RequestId).get()

    }
    updateBookStatus=()=>{
        db.collection('all_donations').add({
            BookName:this.state.BookName,
            RequestId:this.state.RequestId,
            RequestedBy:this.state.ReceiverName,
            DonorId:this.state.userId,
            RequestStatus:"Donor interested"
        })
    }
    addNotifications=()=>{
        console.log("in the function ", this.state.rec)
        var message = this.state.UserName + "has shown interest in exchanging the item"
        db.collection("all_notifications").add({
            "targeted_user_id"  : this.state.ReceiverId,
            "donor_id"          : this.state.userId,
            "exchangeId"        : this.state.exchangeId,
            "item_name"         : this.state.itemName,
            "date"              : firebase.firestore.FieldValue.serverTimestamp(),
            "notification_status": "unread",
            "message"           : message
        })
    }
    getNotifications=()=>{
        this.requestref = db.collection("all_notifications")
        .where("notification_status", "==","unread")
        .where("targeted_user_id", "==",this.state.userId)
        .onSnapShot((snapshot)=>{
            var allNotifications = []
            snapshot.docs.map((doc) =>{
                var notification = doc.data()
                notification["doc_id"] = doc.doc_id
                allNotifications.push(notification)
            });
            this.setState({
                allNotifications : allNotifications
            })
        })
    }
    render(){
        return(
            <View style={style.container}>
                <View style={{flex:0.1}}>
                    <MyHeader title={"Notifications"} navigation={this.props.navigation}/>
                    </View>
                    <View style={{flex:0.9}}>
                        {
                            this.state.allNotifications.length === 0
                            ?(
                                <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{fontSize:25}}>YOU HAVE NO NOTIFICATIONS</Text>
                                </View>
                            )
                            :(
                               <FlatList
                                keyExtractor={this.keyExtractor}
                                data={this.state.allNotifications}
                                renderItem={this.renderItem}
                               />
                            )
                        }
                </View>
            </View>
        )
    }
}