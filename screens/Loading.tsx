import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ImageBackground } from 'react-native';



export default function Loading() {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Skynet</Text>

      <ActivityIndicator size='large' />
    </View>

  );

}


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
  titulo: {
    fontFamily: 'fontTitulo',
    fontSize: 36,
    paddingTop: 10,
    color: 'white',
  }
});