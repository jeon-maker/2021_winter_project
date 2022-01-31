import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import LoginScreen from "./LoginScreen";
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




export default class PostScreen extends Component {

    Test = ()=>{
        alert(LoginScreen.prevState.id);
    }
    

    render() {
        return (
            <View style={style.container}>
                <Text style={{ fontSize: 30 }}>Post Screen</Text>
                
                <Button color={style.Button.color} onPress={() => this.goToVoteScreen()} title='투표하기' />
                <Button color={style.Button.color} onPress={() => this.goToSuggetScreen()} title='제안하기' />
                <Button color={style.Button.color} onPress={() => this.goToChatScreen()} title='대화하기' />
                <Button color={style.Button.color} onPress={() => this.goEditScreen()} title="Go Edit Screen (작성자 전용)" />
                <Button color={style.Button.color} onPress={() => this.backToMainScreen()} title='메인화면' />
                <Button color={style.Button.color} onPress={() => this.Test()} title='ID 보기' />
            </View>
        )
    }
    backToMainScreen() {
        this.props.navigation.navigate('Main')
    }
    goToChatScreen() {
        this.props.navigation.navigate('Chat')
    }
    goToSuggetScreen() {
        this.props.navigation.navigate('Suggest')
    }
    goToVoteScreen() {
        this.props.navigation.navigate('Vote')
    }
    goFilterScreen() {
        this.props.navigation.navigate('Filter')
    }

    goEditScreen() {
        this.props.navigation.navigate("Edit")
    }
}