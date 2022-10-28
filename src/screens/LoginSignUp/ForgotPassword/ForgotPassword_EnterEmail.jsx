import React, { useState } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput, ActivityIndicator} from 'react-native'
import { formCss } from '../../../commonCss/formCss'
import { pageCss } from '../../../commonCss/pageCss'

const ForgotPassword_EnterEmail = ({navigation}) => {
  const [email,setEmail]=useState("")

  const [loading, setLoading]=useState(false)

  const handleEmail=()=>{
    if(email===""){
      alert("Please enter email");
    }else{
      setLoading(true)

      fetch("http://localhost:8000/auth/verifyfp",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email:email}) 
      }).then(res=>res.json())
      .then(data=>{
        console.log("data",data)
        if(data.error==="Invalid Credentials"){
          alert("Invalid Credentials")
          setLoading(false)
        }else if(data.message==="Verification Code sent to your email"){
          console.log("datamessage",data.message)
          setLoading(false)
          alert(data.message)
          navigation.navigate('ForgotPassword_EnterVerificationCode',{
            useremail:data.email,
            userVerificationCode:data.verificationCode
          })

        }
      })
  //  navigation.navigate("ForgotPassword_EnterVerificationCode")
  }
}

  return (
    <View style={pageCss.containerFull}>
    <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={pageCss.goback}>
      <Image style={{backgroundColor:"white",color:"white"}} source={{ uri:"https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg"}}/>
      <Text style={{color:"gray",fontSize:16}}> Go back</Text>
    </TouchableOpacity>
    <Text style={formCss.formHead2}>Enter Email</Text> 
    <TextInput placeholder='Enter your Email' style={formCss.formInput}  onChangeText={(text)=>setEmail(text)}/>

    {/* <Text style={formCss.formbtn} onPress={()=>}>Next</Text> */}
    {    loading?
       <ActivityIndicator size="large" color="#0000ff"/>:
      <Text
        style={formCss.formbtn}
        onPress={() =>handleEmail() }>
        Next
      </Text>
      
      }

  </View>
  )
}

export default ForgotPassword_EnterEmail

const styles = StyleSheet.create({})