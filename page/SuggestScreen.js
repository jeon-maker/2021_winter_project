import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import style from "./style";

export default class SuggestScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>SuggestScreen</Text>
                <TextInput
                    style={style.input}
                    placeholder="장소 제안하기" />
                <Button onPress={() => this.backToPostScreen()} title='Back to Post' />
            </View>
        )
    }
    backToPostScreen() {
        this.props.navigation.navigate('Post')
    }
}