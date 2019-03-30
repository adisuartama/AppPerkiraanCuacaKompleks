
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight,FlatList, TextInput} from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.vFooter}>
      <Text style={styles.txtFooter}>CopyRight @AdiSuartama1126</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  vFooter:
  {
    //flex:1,
    height:50,
    backgroundColor:'#00FFFF',
    alignItems:'center',
    justifyContent:'center'
  },
  txtFooter:
  {
    fontWeight: "bold",
    color:'black',
  },
});
export default Footer;