import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import logo from "../../../../assets/logo.png"
import { formCss } from '../../../commonCss/formCss'
import { pageCss } from '../../../commonCss/pageCss'

const Login = ({ navigation }) => {
  return (
    <View style={pageCss.containerFull}>
      <Image source={logo} style={pageCss.logo1} />
      <Text style={formCss.formHead}>Login</Text>
      <TextInput placeholder='Enter your Email' style={formCss.formInput} />
      <TextInput placeholder='Enter your Password' style={formCss.formInput} secureTextEntry={true} />

      <Text style={formCss.formTextLinkRight} onPress={() => navigation.navigate("ForgotPassword_EnterEmail")}>Forgot Password?</Text>

      <Text style={formCss.formbtn} onPress={() => navigation.navigate("MainPage")}>Submit</Text>
      <View style={pageCss.hr80}></View>
      <Text style={formCss.formTextLinkCenter}>Don't have an account?
        <Text style={{ color: "white" }} onPress={() => navigation.navigate("Signup_EnterEmail")}>Signup</Text>

      </Text>
      



    </View>
  )
}

export default Login

//const styles = StyleSheet.create({})