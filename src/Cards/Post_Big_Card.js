import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {pageCss} from '../commonCss/pageCss';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Post_Big_Card = ({item}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);

  console.log('item', item.username);
  return (
    <View style={styles.container}>
      <View style={styles.c1}>
        <Image source={{uri: item.profile_image}} style={styles.profilepic} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.s2}>
        {isLiked ? (
          <View style={styles.s21}>
            <FontAwesome
              name="heart"
              size={24}
              color="white"
              style={styles.iconliked}
              onPress={() => {
                setIsLiked(false);
              }}
            />
            <Text style={styles.liked}>{item.likes.length + 1}</Text>
          </View>
        ) : (
          <View style={styles.s21}>
            <FontAwesome
              name="heart-o"
              size={24}
              color="white"
              style={pageCss.icons1}
              onPress={() => {
                setIsLiked(true);
              }}
            />
            <Text style={styles.notliked}>{item.likes.length}</Text>
          </View>
        )}
        <View style={styles.s22}>
          <FontAwesome5
            name="comment-alt"
            size={24}
            color="white"
            style={pageCss.icons1}
            onPress={() => setShowComments(!showComments)}
          />
        </View>
      </View>
      {showComments && (
        <View style={styles.s3}>
          {item.comments.map((item, index) => {
            return (
              <View key={index} style={styles.s31}>
                <Text style={styles.commentUser}>{item.username}</Text>
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default Post_Big_Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height:510,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,

    overflow: 'hidden',
    borderColor: 'white',
    borderWidth: 1,
  },

  c1: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  profilepic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },
  username: {
    color: 'white',
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  s2: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  s21: {
    // width:"100%",
    flexDirection: 'row',
    alignItems: 'center',
  },
  notliked: {
    color: 'grey',
    marginLeft: 5,
    fontSize: 25,
  },
  liked: {
    color: '#DC143C',
    marginLeft: 5,
    fontSize: 25,
  },
  iconliked: {
    color: '#DC143C',
    fontSize: 30,
  },
  s22: {
    marginLeft: 20,
  },
  s3: {
    width: '100%',
    backgroundColor: '#111111',
    padding: 10,
  },
  s31: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  commentUser: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  commentText: {
    color: 'grey',
    fontSize: 17,
    marginLeft: 8,
  },
});
