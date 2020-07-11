import React from 'react';
import {StyleSheet,ImageBackground} from 'react-native';

import BotonGoogle from '../components/LoginGoogle';

const fondo = require('../assets/images/skynetCiti.jpg');

export default function ScreenLoagin(){

    return (
        <ImageBackground source={fondo} style={styles.container} >
          <BotonGoogle/>
        </ImageBackground>
      );
    }
    
    ScreenLoagin.navigationOptions = {
      header: 'null'
    };
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'flex-end',
        width: '100%', 
        height: '50%',
        backgroundColor:'black',
      },
    
    });
