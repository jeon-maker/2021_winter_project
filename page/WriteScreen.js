import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const post = () => {
    const [time, onChangeTime] = React.useState("약속 시간")
    const [menu, onChangeMenu] = React.useState("메뉴")
    const [personnel, onChnagePersonnel] = React.useState("인원")
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
    },
    input: {
        height: 40,
        margin: 50,
        borderWidth: 5,
        padding: 10,
        color: 'black'
    },
})

export default class WriteScreen extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize: 30 }}>Write Screen</Text>
                <TextInput
                    style={style.input}
                    onChangeText={post.onChangeTime}
                    placeholder="시간을 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={post.onChangeMenu}
                    placeholder="메뉴를 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={post.onChnagePersonnel}
                    placeholder="인원을 입력하세요"
                />
                <Button onPress={() => this.backToMainScreen()} title='게시글 올리기' />
                <Button onPress={() => this.backToMainScreen()} title='Back to Main' />
            </View>
        )
    }
    backToMainScreen() {
        this.props.navigation.navigate('Main')
    }
}