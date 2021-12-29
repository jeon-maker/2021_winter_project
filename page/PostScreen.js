import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export default class PostScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Post Screen</Text>
                <Button onPress={() => this.backToMainScreen()} title='Back to Main' />
                <Button onPress={() => this.goToVoteScreen()} title='Go to Vote' />
                <Button onPress={() => this.goToSuggetScreen()} title='Go To Suggest' />
                <Button onPress={() => this.goToChatScreen()} title='Go To Chat' />
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
}