import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatCard = ({chat}) => {
  return (
    <View style={styles.container}>
        <Image source={{uri:chat.profile_image}} style={styles.image}/>

<View style={styles.c1}>
    <Text style={styles.chatusername}>{chat.username}</Text>
    <Text style={styles.chatlastmessage}>{chat.lastmessage}</Text>
</View>
    </View>
  )
}

export default ChatCard

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
    chatusername:{
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