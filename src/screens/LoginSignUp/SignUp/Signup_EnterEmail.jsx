import { StyleSheet, Text, View ,TextInput, TouchableOpacity,Image, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { formCss } from '../../../commonCss/formCss'
import { pageCss } from '../../../commonCss/pageCss'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Signup_EnterEmail = ({navigation}) => {

  const [email,setEmail]=useState("")
  const [loading, setLoading]=useState(false)
  const handleEmail=()=>{
    if(email===""){
      alert("Please enter email");
    }else{
      setLoading(true)

      fetch("http://localhost:8000/auth/verify",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email:email}) 
      }).then(res=>res.json())
      .then(data=>{
        console.log("data",data)
        if(data.error=="Invalid Credentials"){
          alert("Invalid Credentials")
          setLoading(false)
        }else if(data.message==="Verification Code sent to your email"){
          console.log("datamessage",data.message)
          setLoading(false)
          alert(data.message)
          navigation.navigate('Signup_EnterVerificationCode',{
            useremail:data.email,
            userVerificationCode:data.verificationCode
          })

        }
      })

    }

    // navigation.navigate('Signup_EnterVerificationCode')
  }
  return (
    <View style={pageCss.containerFull}>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={pageCss.goback}>
        {/* <Image style={{backgroundColor:"white",color:"white"}} source={{uri:"https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg"}}/> */}
        <AntDesign name="leftsquareo" size={24} color="black" style={{color:"white"}}/>
        <Text style={{color:"gray",fontSize:16}}> Go back</Text>
      </TouchableOpacity>
      <Text style={formCss.formHead2}>Create a new account</Text>
      <TextInput placeholder='Enter your Email' style={formCss.formInput}  onChangeText={(text)=>{
         setEmail(text)
        }} />

      {/* <Text style={formCss.formbtn} onPress={()=>navigation.navigate("Signup_EnterVerificationCode")}>Next</Text> */}

      {    loading?
       <ActivityIndicator/>:
      <Text
        style={formCss.formbtn}
        onPress={() =>handleEmail() }>
        Next
      </Text>
      
      }
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})