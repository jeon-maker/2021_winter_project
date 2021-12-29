import React, { Component } from "react";
import { View, Text, Button } from 'react-native';

export default class MainScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Main Screen</Text>
                <Button onPress={() => this.goPostScreen()} title="Go Post Screen" />
                <Button onPress={() => this.goFilterScreen()} title="Go Filter Screen" />
                <Button onPress={() => this.goWriteScreen()} title="Go Write Screen" />
                <Button onPress={() => this.goLetterScreen()} title="Go Letter Screen" />
                <Button onPress={() => this.goEditScreen()} title="Go Edit Screen" />

            </View>
        )
    }

    goPostScreen() {
        this.props.navigation.navigate('Post')
    }
    goFilterScreen() {
        this.props.navigation.navigate('Filter')
    }
    goWriteScreen() {
        this.props.navigation.navigate('Write')
    }
    goLetterScreen() {
        this.props.navigation.navigate('Letter')
    }
    goEditScreen() {
        this.props.navigation.navigate('Edit')
    }
}