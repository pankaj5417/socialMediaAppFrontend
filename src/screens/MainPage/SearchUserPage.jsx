import { StatusBar, StyleSheet, Text, View,Image, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { pageCss } from '../../commonCss/pageCss'
import { formCss } from '../../commonCss/formCss'
import BottomNavbar from '../../components/BottomNavbar'
import logo from "../../../assets/logo.png"
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import TopNavbar from '../../components/TopNavbar'
import FollowersRandomPosts from '../../components/FollowersRandomPosts'
import { data } from '../../data'
import UserCard from '../../Cards/UserCard'

const SearchUserPage = ({navigation}) => {
    const [keyword,setKeyword]=useState("")

   // console.log(data)
  return (
    <View style={styles.container}>

    <StatusBar />
   
    <TopNavbar navigation={navigation}/>
    {/* <FollowersRandomPosts/> */}
    <Text style={formCss.formHead}>Search User</Text>
    <TextInput
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={text => setKeyword(text)}
        />
    <BottomNavbar navigation={navigation} page={"SearchUserPage"}/>
    <ScrollView style={styles.userlists}>
        {
            data.filter((user)=>{
                if(keyword==""){
                    return user
                }else if((user.username).toLowerCase().includes(keyword.toLowerCase())){
                    return user
                }
            }).map((item,index)=>
                (
                    <UserCard key={item.username} data={item}/>
                )
            )
        }
    </ScrollView>
  </View>
  )
}

export default SearchUserPage

const styles = StyleSheet.create({
    container:{
      width:"100%",
      height:"100%",
      backgroundColor:"black",
      paddingVertical:50
    },
    searchbar: {
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        fontSize: 18,
        alignSelf:"center"
      },
      userlists:{
        width:"100%",
        marginTop:20,
      }
  })