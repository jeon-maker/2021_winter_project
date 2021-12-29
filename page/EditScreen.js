import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export default class EditScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Edit Screen</Text>
                <Button onPress={() => this.backToMainScreen()} title='Back to Main' />
            </View>
        )
    }
    backToMainScreen() {
        this.props.navigation.navigate('Main')
    }
}