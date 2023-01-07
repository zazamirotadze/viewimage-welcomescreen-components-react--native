import React from 'react'
import { ImageBackground, StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

const LogoImage = require('./assets/chair.jpg');
const ViewImageScreen  = ({navigation}) => {
  return (
    <View style={styles.container} >
        <View style={styles.boxesview}>
          <TouchableOpacity 
            style={styles.redBox}
            onPress={() => navigation.navigate('WelcomeScreen')}
          >
            <Text style={{color:"white"}} >Go Back</Text>
          </TouchableOpacity>
          <View style={styles.blueBox}/>
        </View>
        <Image source={LogoImage}    style={styles.logoImage}/>
    </View>
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"black",
      zIndex:-100
    },
    logoImage: {
      width:"100%",
      height:"100%",
      resizeMode:"contain",
      zIndex:-100
    },
    boxesview:{
      position: "absolute",
      top: "3%",
      left: "6%",
      flex:1,
      justifyContent:"space-between",
      flexDirection:"row",
      width:"90%",
      height:"7%",
    },
    redBox:{
      backgroundColor:"#fc5c65",
      alignSelf:"stretch",
      width:"15%",
      justifyContent:"center",
      alignItems:"center",
      zIndex:100
    },
    blueBox:{
      backgroundColor:"#4ECDC4",
      alignSelf:"stretch",
      width:"15%"
    }
  });

export default ViewImageScreen 