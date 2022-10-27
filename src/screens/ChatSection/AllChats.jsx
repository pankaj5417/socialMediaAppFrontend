import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {formCss} from '../../commonCss/formCss';
import ChatCard from '../../Cards/ChatCard';

const AllChats = ({navigation}) => {
  const [keyword, setKeyword] = useState("");
  let chats = [
    {
      username: 'user1',
      lastmessage: 'hello',
      time: '12:00',
      profile_image:
        'https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      username: 'user2',
      lastmessage: 'hey, how r u ?',
      time: '1 :00',
      profile_image:
        'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    },
    {
      username: 'user3',
      lastmessage: 'hey, how r u ?',
      time: '1 :00',
      profile_image:
        'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    },
    {
      username: 'user4',
      lastmessage: 'hey, how r u ?',
      time: '1 :00',
      profile_image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
    },
    {
      username: 'user5',
      lastmessage: 'hey, how r u ?',
      time: '1 :00',
      profile_image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
    },
    {
      username: 'user6',
      lastmessage: 'hey, how r u ?',
      time: '1 :00',
      profile_image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png ',
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <Ionicons
        name="arrow-back-circle"
        size={24}
        color="white"
        onPress={() => navigation.navigate('MainPage')}
        style={styles.gohomeicon}
      />

      <View style={styles.c1}>
        <Text style={formCss.formHead2}>Your Chats</Text>
        <TextInput
          style={styles.searchbar}
          placeholder="Search"
          onChangeText={text => setKeyword(text)}
        />
      </View>
      <View style={styles.c2}>
        {chats
          ?.filter(chat => {
            if (keyword == '') {
              return chat;
            } else if (
              (chat.username).toLowerCase().includes(keyword.toLowerCase()) ||
              chat.lastmessage.toLowerCase().includes(keyword.toLowerCase())
            ) {
              return chat;
            }
          })
          .map((chat, index) => (
            <View>
              <ChatCard key={index} chat={chat} />
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

export default AllChats;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  gohomeicon: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 120,
    color: 'white',
    fontSize: 30,
  },
  c1: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    backgroundColor: '#111111',
    alignSelf: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
  },
  searchbar: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    fontSize: 18,
  },
  c2: {
    width: '100%',
    padding: 10,
  },
});
