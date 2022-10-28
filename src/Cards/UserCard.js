import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const UserCard = ({data}) => {
  return (
    <View style={styles.container}>
    <Image source={{uri:data.profile_image}} style={styles.image}/>

<View style={styles.c1}>
    <Text style={styles.username}>{data.username}</Text>
</View>    
</View>
  )
}

export default UserCard

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:"#111111",
        marginVertical:10,
        borderRadius:20,
        padding:10,
        flexDirection:"row",
        alignItems:"center"
    },
    image:{
        width:40,
        height:40,
        borderRadius:50,

    },
    username:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"


    },
    c1:{
        marginLeft:10
    },
    chatlastmessage:{
        color:"gray"
    }
})