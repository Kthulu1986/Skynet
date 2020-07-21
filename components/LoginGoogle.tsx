import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as Google from "expo-google-app-auth";
import * as GoogleSignIn from "expo-google-sign-in";
import * as firebase from 'firebase';

const Google_icon = require('../assets/images/Google_icon.png');
const IOS_CLIENT_ID = "813579348442-sdk92jvi4ht83c7deitfe5ntmnh2bkh2.apps.googleusercontent.com"

export default () => {


    async function signInWithGoogleAsync() {

        try {
            const result = await Google.logInAsync({
             //androidClientId: YOUR_CLIENT_ID_HERE,--
              iosClientId: "813579348442-sdk92jvi4ht83c7deitfe5ntmnh2bkh2.apps.googleusercontent.com",
              scopes: ['profile', 'email'],
            });

        /*const { type, accessToken } = await Google.logInAsync({
            iosClientId: "813579348442-sdk92jvi4ht83c7deitfe5ntmnh2bkh2.apps.googleusercontent.com",
            androidClientId: `<YOUR_ANDROID_CLIENT_ID_FOR_EXPO>`,
            iosStandaloneAppClientId: `<YOUR_IOS_CLIENT_ID>`,
            androidStandaloneAppClientId: `<YOUR_ANDROID_CLIENT_ID>`,
          });*/
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } 
        catch (e) {
          return { error: true };
        }           
    }

        
        return (
            <View style={styles.container} >
                <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={() => signInWithGoogleAsync()}>
                    <Image source={Google_icon} style={styles.ImageIconStyle} />
                    <View style={styles.SeparatorLine} />
                    <Text style={styles.TextStyle}> Ingresar Usando Google  </Text>
                </TouchableOpacity>
            </View>
        )
    
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
       
        flexDirection:'column-reverse',
        marginBottom: 100,
        maxHeight: 60,
    },

    GooglePlusStyle: {

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: .5,
        borderColor: '#fff',
        height: 50,
        width: 280,
        margin: 5,
        borderRadius: 20,

    },

    ImageIconStyle: {

        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',

    },

    TextStyle: {

        color: "#fff",
        marginBottom: 4,
        marginRight: 20,
        marginLeft: 20,
        fontWeight: 'bold'

    },

    SeparatorLine: {

        backgroundColor: '#fff',
        width: 1,
        height: 40

    }
});