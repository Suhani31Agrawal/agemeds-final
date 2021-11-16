import React from 'react';
import { Text,Modal ,ScrollView, View , TouchableOpacity , TextInput, StyleSheet, FlatList , KeyboardAvoidingView , Alert,Image, DrawerLayoutAndroidBase } from 'react-native';
import  * as  firebase from "firebase";
import db from "../config"

export default class HomeScreen extends React.Component {
    constructor(){
        super()
        this.state={
            medname:"",
            time:"",
        }
    }
    addReminder=()=>{
        db.collection("reminder").add({
            "medicineName":this.state.medname,
            "Time":this.state.time
        })
        Alert.alert("REMINDER ADDED SUCCESSFULLY")
        this.setState({
            medname:"",
            time:""
        })
    }
    render(){
        return(
           <View>
               <TouchableOpacity 
                    style={{width:50,height:50,marginLeft:30}}
                    onPress ={()=>{
                        this.props.navigation.navigate("SettingScreen")
                      }}
                    >
                     <Image
                        source={require("../assets/settings.png")}
                        style={styles.santaImage}
                    />
               </TouchableOpacity>
               <TouchableOpacity 
                    style={{width:50,height:50,marginRight:30,marginTop:-50}}
                    onPress ={()=>{
                        this.props.navigation.navigate("NotificationScreen")
                      }}
                    >
                     <Image
                        source={require("../assets/bell.png")}
                        style={styles.santaImage}
                    />
               </TouchableOpacity>
               <TouchableOpacity 
                    style={{width:150,height:100,marginLeft:100,marginTop:100}}
                    onPress ={()=>{
                        this.props.navigation.navigate("AdviceScreen")
                      }}
                    >
                    <Image
                        source={require("../assets/advice.png")}
                        style={styles.santaImage}
                    />
               </TouchableOpacity>
               <TextInput
                    onChangeText={text=>this.setState({
                        medname:text
                    })}
                    style={styles.inputField}
                    placeholder='Medicine'
                    value={this.state.medname}
                 />
                 <TextInput
                    onChangeText={text=>this.setState({
                       time:text
                    })}
                    style={styles.inputField}
                    placeholder='Time'
                    value={this.state.time}
                />
               <TouchableOpacity 
                    style={{width:50,height:50,marginLeft:200,marginTop:50,borderRadius:10}}
                    onPress={()=>{
                        this.addReminder()
                    }}
                    >
                     <Image
                        source={require("../assets/addTask.png")}
                        style={styles.santaImage}
                    />
               </TouchableOpacity>
               <View style={{marginTop:50,justifyContent:"center",alignItems:"center"}}>
                   <Text>{this.state.medname}</Text>
                   <Text>{this.state.time}</Text>
               </View>
           </View>
        ) 
    }
}

const styles=StyleSheet.create({
      santaImage:{
        width: "70%",
        height: "100%",
        resizeMode: "stretch",
        marginTop:30
      },
      inputField:{
        width:150,
        height:40,
        borderWidth:1.5,
        fontSize:20
      },
})
