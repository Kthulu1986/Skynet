import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Google_icon = require('../assets/images/Google_icon.png');

export default () => {


    function ingresar() {

        // aqui se inica el logeo usando api de google sign
        /* y el resuktado sera una user que luego es leido en el componente "Navigation" variable ´user´ */
        alert('tito tapia');
    }


    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5} onPress={() => ingresar()}>
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