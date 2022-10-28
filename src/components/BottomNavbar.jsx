import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {formCss} from '../commonCss/formCss';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {pageCss} from '../commonCss/pageCss';

const BottomNavbar = ({navigation,page}) => {
  return (
    <View style={styles.container}>
      {
        page==="MainPage"?
        <FontAwesome color="black" name="home" style={styles.activeIcons1}
      onPress={()=>navigation.navigate("MainPage")}
      />
      :
      <FontAwesome color="black" name="home" style={pageCss.icons1}
      onPress={()=>navigation.navigate("MainPage")}
      />
      }
      
      {
         page==="SearchUserPage"?
         <FontAwesome 
        
         color="black"
         name="search"
         style={styles.activeIcons1}
         onPress={()=>navigation.navigate("SearchUserPage")}
 
       />:
       <FontAwesome 
      
       color="black"
       name="search"
       style={pageCss.icons1}
       onPress={()=>navigation.navigate("SearchUserPage")}

     />
      }
     
{
  page==="NotificationPage"?
  <FontAwesome
 
  color="black"
  name="heart"
  style={styles.activeIcons1}
  onPress={()=>navigation.navigate("NotificationPage")}

/>:
 <FontAwesome

 color="black"
 name="heart"
 style={pageCss.icons1}
 onPress={()=>navigation.navigate("NotificationPage")}

/>
}
     
{
  page==="UserProfilePage"?
  <FontAwesome
 
  color="black"
  name="user-circle"
  style={styles.activeIcons1}
  onPress={()=>navigation.navigate("UserProfilePage")}

/>:
 <FontAwesome

 color="black"
 name="user-circle"
 style={pageCss.icons1}
 onPress={()=>navigation.navigate("UserProfilePage")}

/>
}
     
    </View>
  );
};

export default BottomNavbar;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#111111',
    width: '100%',
    height: 40,
    position: 'absolute',
    bottom: 0,
    zIndex: 100,
    alignContent:'center'
  },
  activeIcons1:{
    backgroundColor:"white",
    borderRadius:50,
    fontSize:25,
    padding:7,

  }
});
