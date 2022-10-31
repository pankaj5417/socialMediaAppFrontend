import { AsyncStorage, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { formCss } from '../../commonCss/formCss';

const Setting = ({navigation}) => {
  const logout=()=>{
    AsyncStorage.removeItem("user")
    navigation.navigate("Login")
  }
  return (
    <View style={styles.container}>
         <Ionicons
        name="arrow-back-circle"
        size={24}
        color="white"
        onPress={() => navigation.navigate('UserProfilePage')}
        style={styles.gohomeicon}
      />

      <Text style={formCss.formHead}>Setting</Text>
      <Text style={styles.text1}>Edit Profile</Text>
      <Text style={styles.text1}>Change Password</Text>
      <Text style={styles.text1}>Customer Support</Text>
      <Text style={styles.text1} onPress={logout}>Logout</Text>


    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"100%",
        backgroundColor:"black"
    },
    text1:{
        marginTop:20,
        color:"white",
        fontSize:20,
        borderBottomColor:"gray",
        borderBottomWidth:1,
        
    }
})