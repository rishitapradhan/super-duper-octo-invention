import * as React from 'react'
import{Text,View,Button,TouchableOpacity,TextInput, FlatList} from 'react-native'
import {ListItem,Header,Icon} from 'react-native-elements' 

export default class BookDonateScreen extends React.Component{
    constructor(){
        super();
        this.state={
           RequestedBookList:[]

        }
        this.Requestref=null
    }
    getRequestedBookList=()=>{
        this.requestref=db.collection("requested_books")
        .onSnapshot((snapshot)=>{
            var RequestedBookList=snapshot.docs.map(document=>document.data())
            this.setState({
                RequestedBookList:RequestedBookList
            })
        })
    }
    componentDidMount(){
        this.getRequestedBookList()
    }
    componentWillMount(){
        this.Requestref()
    }
    keyExtracter=(item,index)=>index.toString()
    renderItem=({item,i})=>{
        return(
            <ListItem 
            key={i}
            title={item.BookName}
            subtitle={item.ReasonToRequest}
            rightElement={
               <TouchableOpacity 
                 onPress={()=>{
                     this.props.navigation.navigate("ReceiverDetails",{"Details":item})
                 }}
               ><Text>View</Text></TouchableOpacity>
            }
            bottomDivider
            />
        )
    }
    render(){
        return(
            <View>
          <Header 
          backgroundColor={'#9c8210'}
          centerComponent={{
              text: 'Book Donate',
              style:{ color:'#fff', fontSize:20}
          }}
          leftComponent={<Icon
            name='bars'onPress={()=>this.props.navigation.toggleDrawer()}
            />}
            rightComponent={<Icon
              name='bell'onPress={()=>this.props.navigation.navigate('NotificationScreen')}
            />}
          />
          {this.state.RequestedBookList.length===0
          ?(<View>
              <Text>List of all requested books</Text>
            </View> )
            :(<FlatList 
              keyExtractor={this.keyExtracter}
              data={this.state.RequestedBookList}
              renderItem={this.renderItem}
            />)
          }
             </View>
        )
    }
}