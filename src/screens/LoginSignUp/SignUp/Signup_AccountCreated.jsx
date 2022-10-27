import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput} from 'react-native'
import { formCss } from '../../../commonCss/formCss'
import { pageCss } from '../../../commonCss/pageCss'

const Signup_AccountCreated = ({navigation}) => {
  return (
    <View style={pageCss.containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={pageCss.goback}>
      <Image style={{backgroundColor:"white",color:"white"}} source={{ uri:"https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg"}}/>
      <Text style={{color:"gray",fontSize:16}}> Go back</Text>
    </TouchableOpacity>
    <Text style={formCss.formHead2}>Account created Successfully</Text> 
    
    <Text style={formCss.formbtn} onPress={()=>navigation.navigate("MainPage")}>Let's Go</Text>


  </View>
  )
}

export default Signup_AccountCreated

const styles = StyleSheet.create({})