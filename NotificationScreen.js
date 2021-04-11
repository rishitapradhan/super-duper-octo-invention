import * as React from 'react'
import {StyleSheet,Text,View,Button,TouchableOpacity,TextInput} from 'react-native'
import {Header,ListItem,Icon} from 'react-native-elements'
import firebase from 'firebase'
import db from "../config"
import { FlatList } from 'react-native'
export default class NotificationScreen extends React.Component{
    constructor(){
        super()
        this.state={
            userId:firebase.auth().currentUser.email,
            allNotifications:[],
        }
        this.notificationref=null
    }
    getNotifications=()=>{
       this.requestref=db.collection("all_notifications").where("NotificationStatus","==","unread").where("TargetedUserId","==",this.state.userId
       .onSnapShot((snapshot)=>{
           var allNotifications = []
           snapshot.docs.map((doc)=>{
               var notification = doc.data()
               notification["docId"]=doc.id
               allNotifications.push(notification)
          })
          this.setState({allNotifications:allNotifications})
       })
       )
    }
    componentDidMount(){
        this.getNotifications()
    }
     componentWillUnmount(){
         this.notificationref()
     }
     keyExtractor=(item,index)=>index.toString()
     renderItem=({item,index})=>{
        return(
           <ListItem
            key={index}
            leftElement={<Icon
              name="Book"type="font-awsome"

            />}
            title={item.bookName}
            titleStyle={{color:'black',fontWeight:'bold'}}
            subtitle={item.message}
            bottomDivider
           />
         )
       }
       render(){
           return(
               <View>
                   <Header
                   backgroundColor='red'
                   centerComponent={{
                       text:'Notification Screen',
                       style:{color='pink',fontSize:25}
                   }}
                   leftComponent={<Icon
                      name='bars'onPress={()=>this.props.navigation.toggleDrawer()}
                    />}
                   rightComponent={<Icon
                      name='bell'onPress={()=>this.props.navigation.navigate('NotificationScreen')}
                   />}
                   />
                   {this.state.allNotifications.length===0
                   ?(<Text>YOU HAVE NOT GOT ANY NOTIFICATIONS</Text>)
                   :(
                       <FlatList
                          keyExtractor={this.keyExtractor}
                          data={this.state.allNotifications}
                          renderItem={this.renderItem}
                       />
                   )
                   }
               </View>
           )
       }
    }
