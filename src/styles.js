import React from 'react';
import { StyleSheet, } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        marginTop:15,
        marginHorizontal:20,
        backgroundColor: 'hsla(0, 0%, 100%, 0.5)',
        borderRadius:25,
        paddingVertical:15,
        alignItems: 'center',
    },
    containerSwitch: {
        flexDirection: 'row',
        justifyContent:'center',
        marginTop:-20,
    },
    containerChip: {
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom:15,
        flexWrap:"wrap",
    },
    containerImagePerfil: {
        flexDirection: 'row',
    },
    imageback: {
        flex: 1,
        justifyContent: 'center',
    },
    imagePerfil:{
        height:150,
        width:150,
        borderRadius:100,
    },
    textLogin: {
        color: '#746',
        fontFamily: 'fantasy',
        fontSize: 40,
        lineHeight: 80,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: '#746AA9',
        fontFamily: 'fantasy',
        fontSize: 20,
        lineHeight: 84,
        textAlign: 'center',
    },
    textInput: {
        width: 275,
        height: 60,
    },
    helpersText: {
        width: 275,
        height: 25,
        color: 'hsla(0, 100%, 52%, 1)',
    },
    button:{
        width: 200,
    },
    switch:{
        marginLeft: 20,
        justifyContent: 'center',
        alignItems:'center',
    },
    chip:{
        width: 100,
        margin:3,
        marginBottom:5,
    }
});
