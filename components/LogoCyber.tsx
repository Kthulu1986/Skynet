import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
const logo = require('../assets/images/imageLoading.jpeg');


export default () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.bgImagen} ></Image>
            <Text style={styles.titulo}>
                Skynet
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212',
        opacity: 0.7,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderLeftWidth: .5,
        borderRightWidth: .5,
        borderBottomWidth: .5,
        width: '70%',
    },

    bgImagen: {

        backgroundColor: 'transparent',
        marginTop: 30,
        width: 40,
        height: 50

    },
    titulo: {

        fontFamily: 'fontNK2',
        fontSize: 50,
        paddingTop: 30,
        color: '#E1E1E1',

    }
});


