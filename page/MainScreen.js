import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import firestore , { doc  } from '@react-native-firebase/firestore';

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
        doc_value : []
    }

    onLoad = () =>{
        const docRef = firestore().collection("Posts");
        docRef.get().then(function(querySnapshot) {
            if (querySnapshot) {
                querySnapshot.forEach(function(doc){       
                    const docs = doc.data();       
                    console.log('문서의 id :'+doc.id);                                  
                         for(let item in docs){                             
                              console.log('key :'+ item);
                              console.log('value :'+ docs[item]);                                                            
                         }
                });
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
        console.log("this is state : ")
    }
    
    onLoad2 = () =>{
        const db = firestore().collection('Posts');
        db.get().then(function (alldata) {
            alldata.forEach(function(doc) {
                return(
                    <Text> {doc.id} </Text>
                )
            })
            
        })
    }
    
    
    render() {
        this.onLoad2();
        return (
            <View style={style.container}>
                <Text style={{ fontSize: 30 }}>Main Screen</Text>
                <Text style={{ fontSize: 30  ,color:'blue'}}> 환영합니다 {this.props.route.params.prevID} 님</Text>
                <Text style={{ fontSize: 30  ,color:'blue'}}> 환영합니다 {this.state.prevID} 님</Text>
                <Button onPress={() => this.goPostScreen()} title=" 게시글" />
                <Button onPress={() => this.goLetterScreen()} title="쪽지함 " />
                <Button color={style.Button.color} onPress={() => this.goWriteScreen()} title="글 작성하기" />
                <Button color={style.Button.color} onPress={() => this.goFilterScreen()} title="필터" />
                <Button color={style.Button.color} onPress={() => this.onLoad2()} title="DB 확인" />
                <Button color={style.Button.color} onPress={() => this.onTest()} title="DB 확인 test" />
            </View>
        )
    }

    goPostScreen() {
        this.props.navigation.navigate('Post',{prevID:this.state.prevID})
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