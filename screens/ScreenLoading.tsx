import React from 'react';
import { StyleSheet, View, ActivityIndicator, ImageBackground } from 'react-native';

const logo = require('../assets/images/imageLoading.jpeg');


export default function ScreenLoading() {

  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.bgImagen} ></ImageBackground>
      <ActivityIndicator size='large' />
    </View>
  );

}

//estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bgImagen: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 200
  },
});