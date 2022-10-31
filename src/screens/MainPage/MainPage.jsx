import { StatusBar, StyleSheet, Text, View,Image, AsyncStorage } from 'react-native'
import React, { useEffect, useState } from 'react'
import { pageCss } from '../../commonCss/pageCss'
import { formCss } from '../../commonCss/formCss'
import BottomNavbar from '../../components/BottomNavbar'
import logo from "../../../assets/logo.png"
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import TopNavbar from '../../components/TopNavbar'
import FollowersRandomPosts from '../../components/FollowersRandomPosts'

const MainPage = ({navigation,route}) => {
  //const {data}=route.params
  //console.log("userdata",data)
const [userData, setuserData]=useState(null)
useEffect(()=>{
  AsyncStorage.getItem("user").then(data=>{
    console.log("async userdata",data)
    setuserData(JSON.parse(data))
  }).catch(err=>{
    console.log("error",err)
  })

},[])
console.log("userdata",userData)
  return (
    <View style={styles.container}>

      <StatusBar />
     
      <TopNavbar navigation={navigation} page={"MainPage"}/>
      <FollowersRandomPosts/>
      <BottomNavbar navigation={navigation} page={"MainPage"}/>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"black",
    paddingVertical:50
  }
})