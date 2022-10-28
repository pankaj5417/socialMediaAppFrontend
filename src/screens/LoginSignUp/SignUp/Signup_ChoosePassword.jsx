import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {formCss} from '../../../commonCss/formCss';
import {pageCss} from '../../../commonCss/pageCss';

const Signup_ChoosePassword = ({navigation, route}) => {
  const {email, username} = route.params;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePassword = async () => {
    if (password == '' || confirmPassword == '') {
      alert('Please enter Password');
    } else if (password != confirmPassword) {
      alert('Password does not match');
    } else {
      setLoading(true);
      const res = await fetch('http://localhost:8000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, username, password}),
      });
      const data = await res.json();
      if (data.message == 'User Registered successfully') {
        setLoading(false);
        alert(data.message);
        navigation.navigate('Signup_AccountCreated');
      } else {
        setLoading(false);
        alert('Please try again');
      }
    }
    // navigation.navigate("Signup_AccountCreated")
  };

  return (
    <View style={pageCss.containerFull}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Signup_ChooseUsername')}
        style={pageCss.goback}>
        <Image
          style={{backgroundColor: 'white', color: 'white'}}
          source={{
            uri: 'https://img.favpng.com/21/6/21/computer-icons-button-clip-art-png-favpng-U1uZ9xhfAh7VMaDDsG1vwH8Z0_t.jpg',
          }}
        />
        <Text style={{color: 'gray', fontSize: 16}}> Go back</Text>
      </TouchableOpacity>
      <Text style={formCss.formHead3}>Choose Password</Text>
      <TextInput
        placeholder="Enter password"
        style={formCss.formInput}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        placeholder="Re-Enter password"
        style={formCss.formInput}
        secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
      />

      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={formCss.formbtn} onPress={() => handlePassword()}>
          Next
        </Text>
      )}
    </View>
  );
};

export default Signup_ChoosePassword;

const styles = StyleSheet.create({});
