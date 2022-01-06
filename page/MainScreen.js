import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

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

export default class MainScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={{ fontSize: 30 }}>Main Screen</Text>
                <Button onPress={() => this.goPostScreen()} title=" 게시글" />
                <Button onPress={() => this.goLetterScreen()} title="쪽지함 " />
                <Button color={style.Button.color} onPress={() => this.goWriteScreen()} title="글 작성하기" />
                <Button color={style.Button.color} onPress={() => this.goFilterScreen()} title="필터" />

            </View>
        )
    }

    goPostScreen() {
        this.props.navigation.navigate('Post')
    }
    goWriteScreen() {
        this.props.navigation.navigate('Write')
    }
    goLetterScreen() {
        this.props.navigation.navigate('Letter')
    }
    goFilterScreen() {
        this.props.navigation.navigate('Filter')
    }

}
