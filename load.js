import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#B9BFFF',
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
    let a = "2022.02.24"
    let b = a.replace('.','');
    console.log("test :", b)
    for(var i = 0 ; i< len ; i++){
        if(!props.item[i].Link){
            var Link = "매칭 완료"
        }else{
            var Link = " 상대를 찾는중"
        }
        new_arr.push([ "  날짜: ", props.item[i].Date,"시간 : ",props.item[i].Time," 나이 : " , props.item[i].Age,"  연락처: ", props.item[i].Contact,
    "  수준: ", props.item[i].Level , "  장소: ", props.item[i].Place, "  유니폼: ", props.item[i].Uniform, " 매치 성사 여부: " , Link
    ])
    }
    



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

const Load_post2 = (props) =>{
    
    const new_arr = []
    const new_arr2 = []
    const new_arr3 = []
    const len = props.item.length
    for(var i = 0 ; i< len ; i++){
        if(!props.item[i].Link){
            var Link = "매칭 완료"
        }else{
            var Link = " 상대를 찾는중"
        }
        new_arr.push([ "  날짜: ", props.item[i].Date,"시간 : ",props.item[i].Time," 나이 : " , props.item[i].Age,"  연락처: ", props.item[i].Contact,
    "  수준: ", props.item[i].Level , "  장소: ", props.item[i].Place, "  유니폼: ", props.item[i].Uniform, " 매치 성사 여부: " , Link
    ])
    }
    console.log("new_arr : ",new_arr)
    console.log("알아보기 : ",new_arr[0][1])
    console.log("len : " , len)
    for(var j = 0 ; j<len ; j++){
        new_arr2.push(new_arr[j][1].replace('.',''))
    }
    console.log("정렬 전 new_arr2 : " ,new_arr2)
    console.log("정렬 후 new_arr2 : " ,new_arr2.sort())
    console.log("정렬 후 new_arr2 : " ,new_arr2)
    for(var i = 0 ; i<len ; i++){
        for(var j = 0 ; j<len ; j++){
            if(new_arr2[i]==new_arr[j][1].replace('.','')){
                new_arr3.push(new_arr[j])
            }
        }
    }
    const Result_ = new Set(new_arr3)
    const Result = [...Result_]
    console.log("정렬이 완료된 결과 :",Result)


    return(
        Result.map((id,idx)=>( // id : 요소값 idx : 인덱스
            <View style = {style.container} key={idx}>
            <View style = {style.box}>
            <Text style = {{color : 'black'}}> {id} </Text>
            </View>
            </View>
        ))
      
        
        
    )
}



export default Load_post2 ;

