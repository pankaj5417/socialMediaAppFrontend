import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import logo from '../../assets/logo.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import {pageCss} from '../commonCss/pageCss';
const TopNavbar = ({navigation,page}) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={pageCss.logo2} />

      {page === 'MainPage' && (
        <Ionicons
          name="chatbubbles"
          size={24}
          color="white"
          style={pageCss.icons1}
          onPress={() => navigation.navigate('AllChats')}
        />
      )}

{page === 'UserProfilePage' && (
        <Ionicons
          name="settings-sharp"
          size={24}
          color="white"
          style={pageCss.icons1}
          onPress={() => navigation.navigate('Setting')}
        />
      )}
    </View>
  );
};

export default TopNavbar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingRight:10,
    position: 'absolute',
    top: 0,

    zIndex: 200,
    backgroundColor:'#111111',
  },
});
