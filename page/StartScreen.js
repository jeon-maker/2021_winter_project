import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

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
    }
})




export default class StartScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Start Screen</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <View style={[{ width: "100%", backgroundColor: "white" }]}>
                    <Button color={style.Button.color} backgroundColor={style.Button.backgroundColor} onPress={() => this.gotoLoginScreen()} title='로그인' />
                    <Text></Text>
                    <Text></Text>

                    <Button color={style.Button.color} backgroundColor={style.Button.backgroundColor} onPress={() => this.gotoJoinScreen()} title='회원가입' />
                    <Text></Text>
                    <Text></Text>

                    <Button color={style.Button.color} backgroundColor={style.Button.backgroundColor} onPress={() => this.gotoMainScreen()} title='메인화면' />
                </View>
            </View >

        )
    }
    gotoLoginScreen() {
        this.props.navigation.navigate('Login')
    }
    gotoJoinScreen() {
        this.props.navigation.navigate('Join')
    }
    gotoMainScreen() {
        this.props.navigation.navigate('Main')
    }
}