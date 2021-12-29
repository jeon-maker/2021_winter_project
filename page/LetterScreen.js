import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export default class LetterScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Letter Screen</Text>
                <Button onPress={() => this.backToMainScreen()} title='Back to Main' />
            </View>
        )
    }
    backToMainScreen() {
        this.props.navigation.navigate('Main')
    }
}