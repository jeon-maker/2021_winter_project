import React, { Component, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput , ScrollView } from 'react-native';
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
        backgroundColor: 'blue'
    },
    input: {
        height: 40,
        margin: 50,
        borderWidth: 5,
        padding: 10,
        color: 'black'
    },
})



export default class JoinScreen extends Component {
    state ={
        id:'',
        id_list:[],
        pw:'',
        pw_list:[],
        find_list:[]
    }

    
    onChageID = (event) => {
        this.setState({
            id: event
        })
    }
    
    onChangePW = (event)=>{
        this.setState({
            pw : event
        })
    }

    onAddMember = ()=>{      
        this.setState(prevState=>{
            const ref = firestore().collection('Members').doc(prevState.id);  
            ref.set({
                ID : prevState.id,
                PW : prevState.pw
            })
            return{
                id:'',
                pw:'',
                id_list:[...prevState.id],              
                pw_list:[...prevState.pw]
            }
        })
    }

    onFindMember =()=>{
        this.setState(prevState=>{
            const db = firestore().collection('Members');
            db.doc(prevState.id).get().then((doc)=>{
                console.log(doc.exists);
            })
        })
        
    }
    
    onJoin = ()=>{
        this.setState(prevState=>{           
            const db = firestore().collection('Members');
            db.doc(prevState.id).get().then((doc)=>{
                if(!doc.exists){
                    db.doc(prevState.id).set({
                        ID : prevState.id,
                        PW : prevState.pw
                    })
                    alert("회원가입 성공. 이제 로그인이 가능합니다.")
                    this.props.navigation.navigate('Start')
                }else{
                    alert("이미 사용중인 ID 입니다");
                }
            })
        })
    }
    
    
    
    


    render() {
        return (
            <View style={style.container}>
                <Text style={{ fontSize: 30 }}>Join Screen</Text>
                
                <TextInput
                    style={style.input}
                    onChangeText={this.onChageID}
                    placeholder="ID"
                    value={this.state.id}
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangePW}
                    placeholder="PW"
                    value={this.state.pw}
                />
                <Button title="회원가입" onPress={this.onJoin} />
                <Text>
                    {this.state.id_list}
                </Text>
                <Button onPress={() => this.gotoStartScreen()} title='back to Start' />
            </View>
        )
    }
    gotoStartScreen() {
        this.props.navigation.navigate('Start')
    }
}

