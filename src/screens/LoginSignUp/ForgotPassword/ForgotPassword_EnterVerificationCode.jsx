import React, { useState } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput, ActivityIndicator} from 'react-native'
import { formCss } from '../../../commonCss/formCss'
import { pageCss } from '../../../commonCss/pageCss'

const ForgotPassword_EnterVerificationCode = ({navigation,route}) => {
  const {useremail, userVerificationCode}= route.params 
  console.log("usermail and verificationcode",useremail,userVerificationCode)


  const [verificationCode,setVerificationCode]=useState("")
  const [loading, setLoading]=useState(false)
  const handleVerificationCode =()=>{
    if(verificationCode!=userVerificationCode){
      alert("Invalid VerificationCode");
      setLoading(false)
    }else if(verificationCode==userVerificationCode){
      setLoading(false)
      alert("Verification code matched")
      navigation.navigate('ForgotPassword_ChoosePassword',{
        email:useremail
      })


    }else{
      alert("Please try again")
    }
  }
  return (
    <View style={pageCss.containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={pageCss.goback}>
      <Image style={{backgroundColor:"white",color:"white"}} source={{ uri:"https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg"}}/>
      <Text style={{color:"gray",fontSize:16}}> Go back</Text>
    </TouchableOpacity>
    <Text style={formCss.formHead2}>Enter 6-digit Verification Code here</Text> 
    <TextInput
        placeholder="Enter your 6-digit code here "
        style={formCss.formInput}
        onChangeText={(text)=>{
         setVerificationCode(text)
        }}
      />

{    loading?
       <ActivityIndicator size="large" color="#0000ff"/>:
      <Text
        style={formCss.formbtn}
         onPress={() =>handleVerificationCode() }
        >
        Next
      </Text>
      
      }

    {/* <Text style={formCss.formbtn} onPress={()=>navigation.navigate("ForgotPassword_ChoosePassword")}>Next</Text> */}


  </View>
  )
}

export default ForgotPassword_EnterVerificationCode

const styles = StyleSheet.create({})