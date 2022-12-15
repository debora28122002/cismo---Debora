import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React from 'react'
import{View, StyleSheet, Text, StatusBar, TouchableOpacity, Image}from 'react-native'

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.button}>
                    <Image
                        source={require('../../../assets/voltar.png')}
                        style={styles.imagem}
                    />
                </TouchableOpacity>
                <Text style={styles.textoCentro}>CISMO</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Image
                        source={require('../../../assets/user.png')}
                        style={styles.imagem}
                    />
                    <Text style={styles.textoUser}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2b3752',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd:16,
        paddingBottom: 15,
    },
    content:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button:{
       width: 35,
       height: 35,
       justifyContent: 'center',
       alignItems: 'center',
    },
    textoCentro:{
        fontSize: 28,
        color: '#FFF',
        fontWeight: '400'
    },
    imagem:{
        color: '#FFF',
        width: 40,
        height: 40,
    },
    textoUser:{
        color: '#FFF',
    },
    buttonUser:{
        width: 50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01b6ad',
     }
})