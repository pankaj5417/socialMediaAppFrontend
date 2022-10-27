import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { formCss } from '../commonCss/formCss'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { pageCss } from '../commonCss/pageCss';

const BottomNavbar = () => {
  return (
    <View style={styles.container}>
      
      <Icon size={24} color="black" name="home" style={pageCss.icons1} />
      <Icon size={24} color="black" name="search" style={pageCss.icons1}/>

      <Icon size={24} color="black" name="heart" style={pageCss.icons1}/>

      <Icon size={24} color="black" name="user-circle" style={pageCss.icons1}/>

    </View>
  )
} 

export default BottomNavbar

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-evenly",
borderBottomLeftRadius:20,
borderTopRightRadius:20,
    backgroundColor:"#111",
    width:"100%",
    height:40,
    position:"absolute",
    bottom:0,
    zIndex:100
  }
})