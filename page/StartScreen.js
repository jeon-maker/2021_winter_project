import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export default class StartScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Start Screen</Text>
                <Button onPress={() => this.gotoLoginScreen()} title='Log_in' />
                <Button onPress={() => this.gotoJoinScreen()} title='Join us' />
                <Button onPress={() => this.gotoMainScreen()} title='Main' />
            </View>
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