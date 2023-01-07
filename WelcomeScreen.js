import React from "react";
import { ImageBackground, StyleSheet, Image, View, Text,  TouchableOpacity } from "react-native";


const backgorundImage = require('./assets/background.jpg');
const LogoImage = require('./assets/logo-red.png');

const WelcomeScreen = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={backgorundImage} resizeMode="cover" style={styles.image}>
      <View style={styles.textlogoview}>
        <Image source={LogoImage}    style={styles.logoImage}/>
        <Text>sell what you do not need</Text>
      </View>
      <View style={styles.rectanglesview}>
        <View style={styles.redBox} />
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewImageScreen')}
          style={styles.blueBox}
         >
          <Text style={{color:"white"}}>Click here to Change the Route</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  logoImage: {
    width: 100,
    height:100,
    alignSelf: "center"
  },
  textlogoview:{
    position: "absolute",
    top: "10%",
    alignSelf: "center"
  },
  rectanglesview:{
    position: "absolute",
    width:"100%",
    height:"15%",
    bottom:0
  },
  redBox:{
    backgroundColor:"#fc5c65",
    height:"50%",

  },
  blueBox:{
    backgroundColor:"#4ECDC4",
    height:"50%",
    justifyContent:"center",
    alignItems:"center"
  }
});

export default WelcomeScreen;