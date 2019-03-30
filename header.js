import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight,FlatList, TextInput} from 'react-native';

const Header = (props) => {
  return (
    <View style={{
        height:60, 
        justifyContent:'center' ,
        alignItems:'center',
        backgroundColor: '#00FFFF',
        marginTop: 25,
    }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold',
            color:'black'
        }}> {props.judul} </Text>
    </View>
  );
}

export default Header;