import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import firestore , { doc  } from '@react-native-firebase/firestore';
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./MainScreen";
import style from "./style";


const delete_ = (id) =>{
    const db = firestore().collection('Posts');
    db.doc(id).delete();
    alert("삭제 완료");
    return{
        
    }
}

const Load_users_post =(props)=>{
    const users_posts = []
    const len = props.doc_id.length
    for(var i = 0 ; i<len ; i++){
        const user = props.doc_id[i].split(" ")
        console.log(i," 번째 슬라이스 : ",user[0])
        if(props.id == user[0]){
            users_posts.push(props.doc_id[i])
        }
    }
    

    return(
        users_posts.map((id,idx)=>(
            <View style={style.container} key={idx}>
            <View style={style.box}>
            <Text>
                {id}
            </Text>
            <Button onPress={()=>delete_(id)} title={"delete"}/>
            </View>    
            </View>
        ))
    )
}

export default Load_users_post ;
