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
               <TouchableOpacity 
                    style={{width:50,height:50,marginLeft:200,marginTop:50,borderRadius:10}}
                    >
                     <Image
                        source={require("../assets/addTask.png")}
                        style={styles.santaImage}
                    />
               </TouchableOpacity>
           </View>
        ) 
    }
}


