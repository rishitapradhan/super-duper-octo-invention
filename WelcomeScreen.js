import * as React from 'react'
import {Text,View,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
export default class WelcomeScreen extends React.Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      password:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      confirmPassword:'',
      isModalVisible:'false'
    }
  }
  showModal=()=>{
    return(
      <Modal
      animationType="fade"
      transparent={true}
      visible={this.state.isModalVisible}
      >
        <View>  
        <ScrollView style={{width:'100%'}}>
          <KeyboardAvoidingView>


            <Text>REGISTERATION FORM</Text>
            <TextInput style={styles.ButtonSheet}
             placeholder="Enter your Email ID"
             keyboardType="email address"
             onChangeText={(text)=>{
               this.setState({
                 emailId:text
               })
             }}
            />
            <TextInput style={styles.ButtonSheet}
            placeholder="ENTER YOUR FIRST NAME"
            onChangeText={(text)=>{
              this.setState({
                firstName:text
              })
            }}
            />
            <TextInput style={styles.ButtonSheet}
            placeholder="ENTER YOUR LAST NAME"
            onChangeText={(text)=>{
              this.setState({
                lastName:text
              })
            }}
            />
            <TextInput style={styles.ButtonSheet}
            placeholder="ENTER YOUR CONTAT NO."
            keyboardType="numeric"
            onChangeText={(text)=>{
              this.setState({
                contact:text
              })
            }}
            />
            <TextInput style={styles.ButtonSheet}
            placeholder="ENTER YOUR ADDRESS"
            multiline={true}
            onChangeText={(text)=>{
              this.setState({
                address:text
              })
            }}
            />

            <TextInput style={styles.ButtonSheet}
            placeholder="ENTER YOUR PASSWORD"
            secureTextEntry={true}
            onChangeText={(text)=>{
              this.setState({
                password:text
              })
            }}
            />
            <TextInput style={styles.ButtonSheet}
            placeholder="PLEASE CONFIRM YOUR PASSWORD"
            secureTextEntry={true}
            onChangeText={(text)=>{
              this.setState({
                confirmPassword:text
              })
            }}
            />
            <Button title="SIGN UP" color="Purple" onPress={()=>this.userSignUp(this.state.emailId,this.state.password,this.state.confirmPassword)}/>
            
         </KeyboardAvoidingView>
        </ScrollView>
       </View>
      </Modal>
    )
  }
  userSignUp=(emailId,password,confirmPassword)=>{
    if(password!==confirmPassword){
      alert("INCORRECT PASSWORD")
    }
    else
    {

    }
    firebase.auth().createUserWithEmailAndPassword(emailId, password)
    .then(() => {
      db.collection("users").add({
        firstName:this.state.firstName,
        lastName:this.state.lastName,
        contact:this.state.contact,
        address:this.state.address,
        emailId:this.state.emailId
      })
      return Alert.alert( 'User Added Successfully',
     '',
     [
      {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
     ]
      )
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("ERROR")
    });
  
  }
  
  userLogin=(emailId,password)=>{
    firebase.auth().signInWithEmailAndPassword(emailId, password)
  .then((user) => {
   alert("SUCCESSFULLY LOGGED IN")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("ERROR")
  });

  }
  render(){
    return(
      <View>
      <Text style={styles.TextStyle}>BOOK-SANTA</Text>
      <TextInput style={styles.ButtonSheet}
      placeholder="ENTER YOUR EMAIL ADDRESS"
      keyboardType='email-address'
      onChangeText={(text)=>{
        this.setState({
          emailId:text
        })
      }}
      />
      <TextInput style={styles.ButtonSheet}
      placeholder="ENTER YOUR PASSWORD"
      secureTextEntry={true}
      onChangeText={(text)=>{
        this.setState({
          password:text
        })
      }}
      />
      <Button title ="LOGIN" color="red" onPress={()=>{this.userLogin(this.state.emailId,this.state.password)}}/>
      <Button title ="SIGN UP" color="green" onPress={()=>{this.userSignUp(this.state.emailId,this.state.password)}}/>
 </View>
    )
  }
}

const styles = StyleSheet.create({
  TextStyle:{
    backgroundColor:'pink',
    fontSize:25,
    color:'purple'
  },
  ButtonSheet:{
    borderColor:'red',
    border:'solid',
    width:200,
    height:35
  }
})
