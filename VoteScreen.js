import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export default class VoteScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Vote Screen</Text>
                <Button onPress={() => this.backToPostScreen()} title='Back to Post' />
            </View>
        )
    }
    backToPostScreen() {
        this.props.navigation.navigate('Post')
    }
}