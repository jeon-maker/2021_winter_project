import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

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
})


const Load_post = (props) =>{
    
    const new_arr = []
    const len = props.item.length
    console.log("************ Load의  state.id의  : " , (props.id))
    console.log("************ Load의  state.item의  : " , (props.item))
    console.log("************ Load의  state.item의  : " , (props.item[0]))

    for(var i = 0 ; i< len ; i++){
        new_arr.push([props.item[i].Age," ", props.item[i].Contact, " ", props.item[i].Date,
    " ", props.item[i].Level , " ", props.item[i].Place, " ", props.item[i].Uniform
    ])
    }
        console.log("new_arr : ", new_arr);

    return(
        new_arr.map((id,idx)=>( // id : 요소값 idx : 인덱스
            <View style = {style.container} key={idx}>
            <Button style={style.Button} title={id}/>
            </View>
        ))
      
        
        
    )
}


export default Load_post ;

