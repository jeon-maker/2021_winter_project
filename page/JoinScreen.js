import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export default class JoinScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Join Screen</Text>
                <Button onPress={() => this.gotoStartScreen()} title='back to Start' />
            </View>
        )
    }
    gotoStartScreen() {
        this.props.navigation.navigate('Start')
    }
}