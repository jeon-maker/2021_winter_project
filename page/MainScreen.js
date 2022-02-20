import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import firestore , { doc  } from '@react-native-firebase/firestore';
import { render } from "react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod";
import Load_post from "./load";

const style = StyleSheet.create({
    container: {
        backgroundColor: '#AEB404',
        flex: 1
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
    
    
    render() {

        return (
            <View style={style.container}>
                <Text style={{ fontSize: 30 }}>Main Screen</Text>
                <Text style={{ fontSize: 30  ,color:'blue'}}> 환영합니다 {this.props.route.params.prevID} 님</Text>
                <Text style={{ fontSize: 30  ,color:'blue'}}> 환영합니다 {this.state.prevID} 님</Text>
                <Button onPress={() => this.goPostScreen()} title=" 게시글" />
                <Button onPress={() => this.goLetterScreen()} title="쪽지함 " />
                <Button color={style.Button.color} onPress={() => this.goWriteScreen()} title="글 작성하기" />
                <Button color={style.Button.color} onPress={() => this.goFilterScreen()} title="필터" />
            </View>
        )
    }

    goWriteScreen() {
        this.props.navigation.navigate('Write',{prevID:this.state.prevID})
    }
    goLetterScreen() {
        this.props.navigation.navigate('Letter',{prevID:this.state.prevID})
    }
    goFilterScreen() {
        this.props.navigation.navigate('Filter',{prevID:this.state.prevID})
    }

}