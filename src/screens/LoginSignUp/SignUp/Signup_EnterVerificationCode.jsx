import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, { useState } from 'react';
import {formCss} from '../../../commonCss/formCss';
import {pageCss} from '../../../commonCss/pageCss';

const Signup_EnterVerificationCode = ({navigation,route}) => {
  const {useremail, userVerificationCode}= route.params 
  console.log("usermail and verificationcode",useremail,userVerificationCode)


  const [verificationCode,setVerificationCode]=useState("")
  const [loading, setLoading]=useState(false)
  const handleVerificationCode =()=>{
    if(verificationCode!=userVerificationCode){
      alert("Invalid VerificationCode");
    }else if(verificationCode==userVerificationCode){
      alert("Verification code matched")
      navigation.navigate('Signup_ChooseUsername',{
        email:useremail
      })


    }else{
      alert("Please try again")
    }

  }
  return (
    <View style={pageCss.containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={pageCss.goback}>
        <Image
          style={{backgroundColor: 'white', color: 'white'}}
          source={{
            uri: 'https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg',
          }}
        />
        <Text style={{color: 'gray', fontSize: 16}}> Go back</Text>
      </TouchableOpacity>
      <Text style={formCss.formHead3}>
        A verification code has been sent to your email
      </Text>
      <TextInput
        placeholder="Enter your 6-digit code here "
        style={formCss.formInput}
        onChangeText={(text)=>{
         setVerificationCode(text)
        }}
      />

{    loading?
       <ActivityIndicator/>:
      <Text
        style={formCss.formbtn}
         onPress={() =>handleVerificationCode() }
        >
        Next
      </Text>
      
      }
    </View>
  );
};

export default Signup_EnterVerificationCode;

const styles = StyleSheet.create({});
