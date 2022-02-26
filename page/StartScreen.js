import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#B9BFFF',
        flex: 1
    },
    text: {
        fontSize: 30,
        color: '#088A68',
        textAlign: 'center'
    },
    Button: {
        color: '#088A68',
        fontSize: 40,
        backgroundColor: '#000000',

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
                <View style={[{ width: "100%"} ]}>
                    <Button color={style.Button.color} backgroundColor={style.Button.backgroundColor} onPress={() => this.gotoLoginScreen()} title='로그인' />
                    <Button color={style.Button.color} backgroundColor={style.Button.backgroundColor} onPress={() => this.gotoJoinScreen()} title='회원가입' />
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
}