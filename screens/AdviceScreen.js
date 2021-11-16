import React from 'react';
import { Text ,ScrollView, View , StyleSheet, Image } from 'react-native';

export default class HomeScreen extends React.Component {
    render(){
        return(
            <ScrollView>
                <View style={{justifyContent:"center", alignItems:"center",padding:10,width:RFvalue(100),height:50,backgroundColor:"#66CCFF"}}>
                    <Text style={{fontSize:25,fontWeight:"bold",fontFamily:"cursive"}}>
                        HEALTH ADVICE
                    </Text>
                </View>
                <Image
                    source={require("../assets/fc.png")}
                    style={styles.santaImage}
                />
                <Image
                    source={require("../assets/hc.png")}
                    style={styles.santaImage}
                />
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    santaImage: {
        width: "70%",
        height: "100%",
        resizeMode: "stretch",
        marginTop:30
      },
})
    