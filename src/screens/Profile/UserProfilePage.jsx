import { StatusBar, StyleSheet, Text, View,Image, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { pageCss } from '../../commonCss/pageCss'
import { formCss } from '../../commonCss/formCss'
import BottomNavbar from '../../components/BottomNavbar'
import logo from "../../../assets/logo.png"
import  Ionicons  from 'react-native-vector-icons/Ionicons'; 
import TopNavbar from '../../components/TopNavbar'
import FollowersRandomPosts from '../../components/FollowersRandomPosts'
import { profileData } from '../../profileData'
import nopic from "../../../assets/nopic.png"


const UserProfilePage = ({navigation}) => {

  const [userData, setuserData]=useState(null)
  const [userAllData, setuserAllData]=useState(null)


useEffect(()=>{
  AsyncStorage.getItem("user").then(async data=>{
    
     fetch("http://localhost:8000/auth/userdata",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer `+JSON.parse(data).token
      },
     // body:JSON.stringify({email:JSON.parse(data).token})
    }).then(res=>res.json())
    .then(alldata=>{
      if(alldata.message==="User Data Fetched Successfully"){
        setuserAllData(alldata.user)

      }else{
        navigation.navigate("Login")
      }

    }).catch(err=>{
      console.log("error",err)
    })
   // console.log("async userdata",data)
   // setuserData(JSON.parse(data))
  }).catch(err=>{
    console.log("error",err)
  })

},[])
//console.log("userdata",userData)
console.log("userAlldata",userAllData)



  return (
    <View style={styles.container}>

    <StatusBar />
   
    <TopNavbar navigation={navigation} page={"UserProfilePage"}/>
    {
      userAllData?
      <ScrollView>
      <View style={styles.c1}>
        {
          userAllData.profilepic.length?
          <Image source={{uri:userAllData.profilepic}} style={styles.profilepic}/>:
          <Image source={nopic} style={styles.profilepic}/>


        }
        <Text style={styles.txt}>@{userAllData.username?userAllData.username:profileData[0].username}</Text>
        <View style={styles.c11}>
          <View style={styles.c111}>
           <Text style={styles.txt1}>Followers</Text>
           <Text style={styles.txt2}>{userAllData.followers?userAllData.followers.length:profileData[0].followers}</Text>

          </View>
          <View style={styles.vr1}></View>
          <View style={styles.c111}>
          <Text style={styles.txt1}>Following</Text>
           <Text style={styles.txt2}>{userAllData.following?userAllData.following.length:profileData[0].following}</Text>

          </View>
          <View style={styles.vr1}></View>

          <View style={styles.c111}>
          <Text style={styles.txt1}>Posts</Text>
           <Text style={styles.txt2}>{userAllData.posts?userAllData.posts.length:profileData[0].posts.length}</Text>

          </View>
          <View style={styles.vr1}></View>


          


        </View>
     <Text style={styles.description}>{userAllData.description?userAllData.description:profileData[0].description}</Text>
      </View>
      <View style={styles.c1}>
        <Text style={styles.txt}>
          Your Posts
        </Text>

        <View style={styles.c13}>
        {
         userAllData.posts.length?userAllData.posts.map((item)=>(
            <Image key={item.id} source={{uri:item.post_image}} style={styles.postpic}/>
          )):
          <Text style={styles.txt}>You have not create any post yet</Text>
        }
        </View>
      </View>
    </ScrollView>:
    <ActivityIndicator size="large"/>
    }

    
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
    },
    c1:{
      width:"100%",
      alignItems:"center"
    },
    profilepic:{
      width:150,
      height:150,
      borderRadius:75

    },
    c13:{

    },
    txt:{
      color:"white",
      fontSize:20,
      fontWeight:"bold",
      margin:10,
      backgroundColor:"#111111",
      paddingVertical:10,
      paddingHorizontal:20,
      borderRadius:20

      
    },
    txt1:{
      color:"white",
      fontSize:15,

    },
    txt2:{
      color:"white",
      fontSize:20,
    },
    c11:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-around"
    },
    c111:{
      alignItems:"center"
    },
    vr1:{
      width:1,
      height:50,
      backgroundColor:"white"
    },
    description:{
      color:"white",
      fontSize:15,
      marginVertical:10,
      width:"100%",
      backgroundColor:"#111111",
      textAlign:"center",
      padding:10,
      paddingVertical:20,

    },
    c13:{
      flexDirection:"row",
      flexWrap:"wrap",
      marginBottom:20,
      justifyContent:"center"
    },
    postpic:{
      width:"30%",
      height:120,
      margin:5,
    },

  })