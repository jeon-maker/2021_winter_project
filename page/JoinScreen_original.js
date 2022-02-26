import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import style from "./style";
const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [Name, onChangeName] = React.useState("Name");
    const [number, onChangeNumber] = React.useState(null);
};





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