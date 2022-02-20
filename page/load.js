import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#AEB404',
        flex: 1,
        margin : 20
    },
    text: {
        fontSize: 30,
        color: '#21610B',
        textAlign: 'center'
    },
    Button: {
        color: 'black',
        fontSize: 40,
    },
    input: {
        height: 40,
        margin: 50,
        borderWidth: 5,
        padding: 10,
        color: 'black'
    },
    box : {
         
        margin: 20,
        backgroundColor:'white',        
    }
})


const Load_post = (props) =>{
    
    const new_arr = []
    const len = props.item.length
    console.log("************ Load의  state.id의  : " , (props.id))
    console.log("************ Load의  state.item의  : " , (props.item))
    console.log("************ Load의  state.item의  : " , (props.item[0]))

    for(var i = 0 ; i< len ; i++){
        new_arr.push([" 나이 : " , props.item[i].Age,"  연락처: ", props.item[i].Contact, "  날짜: ", props.item[i].Date,
    "  수준: ", props.item[i].Level , "  장소: ", props.item[i].Place, "  유니폼: ", props.item[i].Uniform, " 매치 성사 여부: " , props.item[i].Link
    ])
    }
        console.log("new_arr : ", new_arr);

    return(
        new_arr.map((id,idx)=>( // id : 요소값 idx : 인덱스
            
            <View style = {style.container} key={idx}>
            <View style = {style.box}>
            <Text style = {{color : 'black'}}> {id} </Text>
            </View>
            </View>
        ))
      
        
        
    )
}


export default Load_post ;

