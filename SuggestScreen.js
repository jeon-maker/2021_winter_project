import React, { Component } from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

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
    },
    input: {
        height: 40,
        margin: 50,
        borderWidth: 5,
        padding: 10,
        color: 'black'
    },
})

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