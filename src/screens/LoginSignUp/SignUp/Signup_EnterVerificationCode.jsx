import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput} from 'react-native'
import React from 'react'
import { formCss } from '../../../commonCss/formCss'
import { pageCss } from '../../../commonCss/pageCss'

const Signup_EnterVerificationCode = ({navigation}) => {
  return (
    <View style={pageCss.containerFull}>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={pageCss.goback}>
        <Image style={{backgroundColor:"white",color:"white"}} source={{ uri:"https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg"}}/>
        <Text style={{color:"gray",fontSize:16}}> Go back</Text>
      </TouchableOpacity>
      <Text style={formCss.formHead3}>A verification code has been sent to your email</Text>
      <TextInput placeholder='Enter your 6-digit code here ' style={formCss.formInput}  />

      <Text style={formCss.formbtn} onPress={()=>navigation.navigate("Signup_ChooseUsername")}>Next</Text>


    </View>
  )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})