import { StatusBar, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { pageCss } from '../../commonCss/pageCss'
import { formCss } from '../../commonCss/formCss'
import BottomNavbar from '../../components/BottomNavbar'
import logo from "../../../assets/logo.png"
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import TopNavbar from '../../components/TopNavbar'
import FollowersRandomPosts from '../../components/FollowersRandomPosts'


const NotificationPage = ({navigation}) => {
  return (
    <View style={styles.container}>

      <StatusBar />
     
      <TopNavbar navigation={navigation}/>
      <View style={styles.c1}>
        <View style={styles.notification}>
      <Text style={formCss.formHead2}>Some Notifications</Text>

        </View>
        <View style={styles.notification}>
      <Text style={formCss.formHead2}>Some Notifications</Text>

        </View>
        <View style={styles.notification}>
      <Text style={formCss.formHead2}>Some Notifications</Text>

        </View>
      </View>

      <BottomNavbar navigation={navigation} page={"NotificationPage"}/>
    </View>
  )
}

export default NotificationPage

const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:"100%",
      backgroundColor:"black",
      paddingVertical:50
    },
    notification:{
      width:"100%",
      height:50,
      backgroundColor:"#111111",
      marginTop:10,

    },
    c1:{
      width:"100%",
      height:"100%",
      alignItems:"center"
    }
  })