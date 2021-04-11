import * as React from 'react'
import {Text,TouchableOpacity,View,Button,ScrollView,Alert,KeyboardAvoidingView,TextInput,StyleSheet} from 'react-native'
import db from '../config'
import firebase from 'firebase'
import {Header,Icon} from 'react-native-elements'
export default class SettingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            firstName:'',
            lastName:'',
            Contact:'',
            Address:'',
            docId:''
        }
    }
    getUserDetails=()=>{
        var email=firebase.auth().currentUser.email
        db.collection("users").where('emailId','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var Data = doc.data()
                this.setState({
                    emailId:Data.emailId,
                    firstName:Data.firstName,
                    lastName:Data.lastName,
                    Address:Data.Address,
                    Contact:Data.Contact,
                    docId:doc.id
                })
            })
        })
    }
    UpdateUserDetails=()=>{
        db.collection('users').doc(this.state.docId).update({
            "firstName":this.state.firstName,
            "lastName":this.state.lastName,
            "address":this.state.address,
            "Contact":this.state.Contact,

        })
        alert("Profile Updated Successfully")
    }
    render(){
        return(
           <View>
               <Header 
                 backgroundColor='red'
                 centerComponent={{
                     text:'Setting Screen',
                     style:{color:'purple',fontSize:25}

                 }}
                 leftComponent={<Icon
                 name='bars'onPress={()=>this.props.navigation.toggleDrawer()}
                 />}
                 rightComponent={<Icon
                  name='bell'onPress={()=>this.props.navigation.navigate('NotificationScreen')}
                 />}
               />
               <TextInput
               style={styles.ButtonSheet}
               placeholder={'ENTER YOUR FIRST NAME'}
               onChangeText={()=>{
                   this.setState({
                      firstName:text   
                   })
               }}
               value={this.state.firstName}
               />
               <TextInput
                style={styles.ButtonSheet}
                placeholder={'ENTER YOUR LAST NAME'}
                onChangeText={()=>{
                    this.setState({
                         lastName:text
                    })
                }}
                value={this.state.lastName}
               />
               <TextInput
                style={styles.ButtonSheet}
                placeholder={'ENTER YOU CONTACT NUMBER'}
                keyboardType='numeric'
                onChangeText={()=>{
                    this.setState({
                        Contact:text
                    })
                }}
                value={this.state.Contact}
               />
               <TextInput
               style={styles.ButtonSheet}
               placeholder={'ENTER YOUR ADDRESS'}
               multiline={true}
               onChangeText={()=>{
                   this.setState({
                       Address:text
                   })
               }}
               value={this.state.Address}
               />
               <Button title='SAVE'color='blue'onPress={()=>this.UpdateUserDetails()}/>
           </View>
        )
    }
} 


const styles=StyleSheet.create({
    ButtonSheet:{
        width:200,
        height:50,
        border='solid'
    }
})