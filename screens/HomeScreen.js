import React from 'react';
import { Text,Modal ,ScrollView, View , TouchableOpacity , TextInput, StyleSheet, FlatList , KeyboardAvoidingView , Alert,Image, DrawerLayoutAndroidBase } from 'react-native';
import  * as  firebase from "firebase";
import db from "../config"

export default class HomeScreen extends React.Component {
    render(){
        return(
           <View>
               <TouchableOpacity 
                    style={{width:50,height:50,marginLeft:30}}
                    
                    >
                    <Text style={{alignItems:"center",justifyContent:"center"}}>
                        "PFP"
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity 
                    style={{width:50,height:50,marginRight:30,marginTop:-50}}
                    
                    >
                    <Text style={{alignItems:"center",justifyContent:"center"}}>
                        "NOTIFICATION"
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity 
                    style={{width:150,height:100,marginLeft:100,marginTop:100}}
                    
                    >
                    <Text style={{alignItems:"center",justifyContent:"center"}}>
                        "ADVICE"
                    </Text>
               </TouchableOpacity>
               <TouchableOpacity 
                    style={{width:50,height:50,marginLeft:200,marginTop:50,borderRadius:10}}
                    >
                    <Text style={{alignItems:"center",justifyContent:"center"}}>
                        "ADD TASK"
                    </Text>
               </TouchableOpacity>
           </View>
        ) 
    }
}


