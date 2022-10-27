
import React, { useState } from 'react'
import { StyleSheet, Text, View ,TouchableOpacity,Image,TextInput, ActivityIndicator} from 'react-native'
import { formCss } from '../../../commonCss/formCss'
import { pageCss } from '../../../commonCss/pageCss'
const Signup_ChooseUsername = ({navigation,route}) => {
  const {email}=route.params

  const [username,setUsername]=useState("")
  const [loading,setLoading]=useState(false)

  const handleUsername=()=>{
if(username==""){
  alert("Please enter username")
}else{
  setLoading(true)
  fetch("http://localhost:8000/auth/changeUsername",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email:email,
      username:username
    })
  }).then(res=>res.json()).then(data=>{
    console.log("data",data)
    if(data.message==="Username available"){
      setLoading(false)
      alert("username is available")
      navigation.navigate("Signup_ChoosePassword",{
        email:email,
        username:username
      })

    }else{
      setLoading(false)
      alert("Username is not available")
    }
  })
}
  }
//navigation.navigate("Signup_ChoosePassword")
  return (
    <View style={pageCss.containerFull}>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={pageCss.goback}>
        <Image style={{backgroundColor:"white",color:"white"}} source={{ uri:"https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg"}}/>
        <Text style={{color:"gray",fontSize:16}}> Go back</Text>
      </TouchableOpacity>
      <Text style={formCss.formHead3}>Choose Username</Text>
      <TextInput placeholder='Enter username ' style={formCss.formInput} onChangeText={(text)=>setUsername(text)} />

{
  loading?
  <ActivityIndicator/>
  :
  <Text style={formCss.formbtn} onPress={()=>handleUsername()}>Next</Text>


}

    </View>
  )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})