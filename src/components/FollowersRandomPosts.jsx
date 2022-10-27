import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Post_Big_Card from '../Cards/Post_Big_Card'

const FollowersRandomPosts = () => {

    const data=[
        {
            id:1,
            username:"rahul_123",
            image:"https://images.unsplash.com/photo-1622810820824-f233f3f2c9fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            profile_image:"https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            likes:[
                "rahul_123",
                "viru_123"
            ],
            comments:[
                {
                    id:1,
                    username:"rahul_123",
                    comment:"nice post"
                },
                {
                    id:2,
                    username:"viru_123",
                    comment:"wonderful"
                }

            ]
        },
        
        {
            id:2,
            username:"viru_123",
            image:"https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
            profile_image:"https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
            likes:[
                "rahul_123",
                "viru_123"
            ],
            comments:[
                {
                    id:1,
                    username:"rahul_123",
                    comment:"nice post"
                },
                {
                    id:2,
                    username:"viru_123",
                    comment:"wonderful"
                }

            ]
        },
        {
            id:3,
            username:"ankit_123",
            image:"https://wallpapercrafter.com/desktop/259421-a-silhouette-of-a-person-riding-a-horse-along-a-be.jpg",
            profile_image:"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            likes:[
                "rahul_123",
                "viru_123"
            ],
            comments:[
                {
                    id:1,
                    username:"rahul_123",
                    comment:"nice post"
                },
                {
                    id:2,
                    username:"viru_123",
                    comment:"wonderful"
                }

            ]
        },
        {
            id:4,
            username:"sita_123",
            image:"https://images.unsplash.com/photo-1521303833147-3c0dc0be5816?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            profile_image:"https://images.unsplash.com/photo-1474978528675-4a50a4508dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
            likes:[
                "rahul_123",
                "viru_123"
            ],
            comments:[
                {
                    id:5,
                    username:"rajni_123",
                    comment:"nice post"
                },
                {
                    id:3,
                    username:"sita_123",
                    comment:"wonderful"
                }

            ]
        },
        {
            id:5,
            username:"rajni_123",
            image:"https://c4.wallpaperflare.com/wallpaper/764/403/632/beach-sunset-mood-4k-wallpaper-preview.jpg",
            profile_image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            likes:[
                "rahul_123",
                "viru_123"
            ],
            comments:[
                {
                    id:1,
                    username:"rahul_123",
                    comment:"nice post"
                },
                {
                    id:2,
                    username:"viru_123",
                    comment:"wonderful"
                }

            ]
        }

    ]
  return (
    <ScrollView style={styles.container}>
   { data.map(item=>{
    return (
        <Post_Big_Card key={item.id} item={item}/>
    )

    })}
   </ScrollView>
  )
}

export default FollowersRandomPosts

const styles = StyleSheet.create({
    container:{
        width:"100%"
    }
})