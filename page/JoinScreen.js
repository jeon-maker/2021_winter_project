import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [Name, onChangeName] = React.useState("Name");
    const [number, onChangeNumber] = React.useState(null);
};


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
        backgroundColor: 'blue'
    },
    input: {
        height: 40,
        margin: 50,
        borderWidth: 5,
        padding: 10,
        color: 'black'
    },
})



export default class JoinScreen extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={{ fontSize: 30 }}>Join Screen</Text>
                <TextInput
                    style={style.input}
                    onChangeText={UselessTextInput.onChangeText}
                    placeholder="Name"
                    value={UselessTextInput.text}
                />
                <TextInput
                    style={style.input}
                    onChangeText={UselessTextInput.onChangeNumber}
                    placeholder="ID"
                    value={UselessTextInput.number}
                />
                <TextInput
                    style={style.input}
                    onChangeText={UselessTextInput.onChangeNumber}
                    placeholder="PW"
                    value={UselessTextInput.number}
                />
                <Button onPress={() => this.gotoStartScreen()} title='back to Start' />
            </View>
        )
    }
    gotoStartScreen() {
        this.props.navigation.navigate('Start')
    }
}