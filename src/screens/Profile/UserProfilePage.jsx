import { StatusBar, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { pageCss } from '../../commonCss/pageCss'
import { formCss } from '../../commonCss/formCss'
import BottomNavbar from '../../components/BottomNavbar'
import logo from "../../../assets/logo.png"
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import TopNavbar from '../../components/TopNavbar'
import FollowersRandomPosts from '../../components/FollowersRandomPosts'


const UserProfilePage = ({navigation}) => {
  return (
    <View style={styles.container}>

    <StatusBar />
   
    <TopNavbar navigation={navigation}/>
    <FollowersRandomPosts/>
    <Text style={formCss.formHead}>Your Profile</Text>
    <BottomNavbar navigation={navigation} page={"UserProfilePage"}/>
  </View>
  )
}

export default UserProfilePage

const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:"100%",
      backgroundColor:"black",
      paddingVertical:50
    }
  })