import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { formCss } from '../../../commonCss/formCss'
import { pageCss } from '../../../commonCss/pageCss'

const Signup_EnterEmail = ({navigation}) => {
  return (
    <View style={pageCss.containerFull}>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={pageCss.goback}>
        <Image style={{backgroundColor:"white",color:"white"}} source={{uri:"https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg"}}/>
        <Text style={{color:"gray",fontSize:16}}> Go back</Text>
      </TouchableOpacity>
      <Text style={formCss.formHead2}>Create a new account</Text>
      <TextInput placeholder='Enter your Password' style={formCss.formInput} />

      <Text style={formCss.formbtn} onPress={()=>navigation.navigate("Signup_EnterVerificationCode")}>Next</Text>


    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})