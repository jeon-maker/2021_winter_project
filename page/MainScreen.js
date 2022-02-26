import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import firestore , { doc  } from '@react-native-firebase/firestore';
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import Load_post from "./load";
import style from "./style";

export default class MainScreen extends Component {
    state = {
        prevID : this.props.route.params.prevID,
        doc_id : [],
        doc_item : [],
    }
    
    
    goPostScreen = () =>{
        const self = this;
        const db = firestore().collection('Posts');
        db.get().then((allData)=>{
            const arr1 = []
            const arr2 = []
            allData.forEach((doc)=>{
            arr1.push(doc.id);
            arr2.push(doc.data());
            const setid = new  Set(arr1);
            const setitem = new Set(arr2);
            const unique_id = [...setid];
            const unique_item = [...setitem]
            self.setState({
                doc_id : unique_id,
                doc_item : unique_item,
            })   
            });
            console.log("Post로 넘길때의 Main Screen state 확인 : ", this.state);
            this.props.navigation.navigate('Post',{prevID:this.state.prevID, doc_id:this.state.doc_id , doc_item:this.state.doc_item}) 
        })
           }
    goEditScreen = () =>{
        const self = this;
        const db = firestore().collection('Posts');
        db.get().then((allData)=>{
            const arr1 = []
            const arr2 = []
            allData.forEach((doc)=>{
            arr1.push(doc.id);
            arr2.push(doc.data());
            const setid = new  Set(arr1);
            const setitem = new Set(arr2);
            const unique_id = [...setid];
            const unique_item = [...setitem]
            self.setState({
                doc_id : unique_id,
                doc_item : unique_item,
            })   
            });
            console.log("Edit로 넘길때의 Main Screen state 확인 : ", this.state);
            this.props.navigation.navigate('Edit',{prevID:this.state.prevID, doc_id:this.state.doc_id , doc_item:this.state.doc_item}) 
        })
           }       
    
    
    render() {

        return (
            <View style={style.container}>
                <Text style={{ fontSize: 30 }}>Main Screen</Text>
                <Text style={style.text}> 환영합니다 {this.props.route.params.prevID} 님</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Button color={style.Button.color} onPress={() => this.goPostScreen()} title=" 게시글" />
                <Text></Text>
                <Text></Text>
                <Button color={style.Button.color} onPress={() => this.goWriteScreen()} title="글 작성하기" />
                <Text></Text>
                <Text></Text>
                <Button color={style.Button.color} onPress={() => this.goEditScreen()} title="내가 쓴 글 " />
            </View>
        )
    }

    goWriteScreen() {
        alert("반드시 지정된 양식을 따라주세요. 양식에 어긋날 시, 삭제 될 수 있습니다.")
        this.props.navigation.navigate('Write',{prevID:this.state.prevID})
    }
    goLetterScreen() {
        this.props.navigation.navigate('Letter',{prevID:this.state.prevID})
    }
    goFilterScreen() {
        this.props.navigation.navigate('Filter',{prevID:this.state.prevID})
    }
    
}

