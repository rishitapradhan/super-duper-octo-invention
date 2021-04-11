import * as React from 'react'
import{Text,View,Button,TouchableOpacity,TextInput}from 'react-native'
import db from '../config'
import firebase from 'firebase'
import {Header,Icon} from 'react-native-elements'
export default class BookRequestScreen extends React.Component{
    constructor(){
        super();
        this.state={
           BookName:'',
           ReasonToRequest:'',
           UserId:firebase.auth().currentUser.email
        }
    }
    render(){
        return(
            <View>
            <Header 
             backgroundColor={'#9c8210'}
             centerComponent={{
                 text: 'Book Request',
                 style:{ color:'#fff', fontSize:20}
             }}
             leftComponent={<Icon
                name='bars'onPress={()=>this.props.navigation.toggleDrawer()}
                />}
             rightComponent={<Icon
                name='bell'onPress={()=>this.props.navigation.navigate('NotificationScreen')}
             />}
            />
            <TextInput
             style={{borer:'solid',borderColor:'red',width:200,height:50}}
             placeholder="ENTER YOUR BOOK NAME"
             onChangeText={(text)=>{
                 this.setState({
                     BookName:text
                 })
             }}
            />
            <TextInput
             style={{borer:'solid',borderColor:'red',width:200,height:50}}
             placeholder="WHY DO YOU NEED THE BOOK"
             multiline={true}
             numberOfLines={8}
             onChangeText={(text)=>{
                 this.setState({
                     ReasonToRequest:text
                 })
             }}
            />
            </View>
        )
    }
}
