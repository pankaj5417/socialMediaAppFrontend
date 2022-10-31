import React, { useState } from 'react';
import {ActivityIndicator, Image, StyleSheet, Text,AsyncStorage, TextInput, View} from 'react-native';
import logo from '../../../../assets/logo.png';
import {formCss} from '../../../commonCss/formCss';
import {pageCss} from '../../../commonCss/pageCss';

const Login = ({navigation}) => {
  const [email,setEmail]=useState("") 
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)

  const handleLogin=async()=>{
    if(!email||!password){
      alert("Please enter all fields")
    }else{
      setLoading(true)
       try {
        const res=await fetch("http://localhost:8000/auth/signin",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({email,password})
        })
        const data=await res.json()

        if(data.message==="Signed in successfully"){
          setLoading(false)
          await AsyncStorage.setItem("user",JSON.stringify(data))
          alert(data.message)
          navigation.navigate('MainPage',{data})
          
        }else{
          setLoading(false)
          alert(data.error)
        }
       } catch (error) {
        setLoading(false)
        console.log(error)
       }
     
    }

  }
  return (
    <View style={pageCss.containerFull}>
      {/* <Image source={logo} style={pageCss.logo1} /> */}
      <Text style={formCss.formHead}>Login</Text>
      <TextInput placeholder="Enter your Email" style={formCss.formInput}     
      onChangeText={(text)=>setEmail(text)}
 />
      <TextInput
        placeholder="Enter your Password"
        style={formCss.formInput}
        secureTextEntry={true}
        onChangeText={(text)=>setPassword(text)}
      />

      <Text
        style={formCss.formTextLinkRight}
        onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}>
        Forgot Password?
      </Text>

      {
        loading?<ActivityIndicator/>:
      <Text
        style={formCss.formbtn}
        onPress={() => handleLogin()}>
        Submit
      </Text>
      }

      <View style={pageCss.hr80}></View>
      <Text style={formCss.formTextLinkCenter}>
        Don't have an account?
        <Text
          style={{color: 'white'}}
          onPress={() => navigation.navigate('Signup_EnterEmail')}>
          Signup
        </Text>
      </Text>
    </View>
  );
};

export default Login;

//const styles = StyleSheet.create({})
