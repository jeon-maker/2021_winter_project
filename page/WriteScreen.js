import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import firestore , { doc  } from '@react-native-firebase/firestore';

const date = new Date();
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
    state = {
        date:'',
        age:'',
        level:'',
        place:'',
        uniform : '',
        contact : '',
        etc : '',
        link : '',
        prevID : this.props.route.params.prevID
    }

    onChangeDate = (event) =>{
        this.setState({
            date : event
        })
    }
    onChangeAge = (event) =>{
        this.setState({
            age : event
        })
    }
    onChangeLevel = (event) =>{
        this.setState({
            level : event
        })
    }
    onChangePlace = (event) =>{
        this.setState({
            place : event
        })
    }
    onChangeUniform = (event) => {
        this.setState({
            uniform : event
        })
    }
    onChangeContact = (event) => {
        this.setState({
            contact : event
        })    
    }
    
    onChageEtc = (event) =>{
        this.setState({
            etc : event
        })
    }

    onWrite =()=>{
        this.setState(prevState=>{
            const db = firestore().collection('Posts').doc(this.state.prevID + " "+ date );
            db.set({
                Date : prevState.date,
                Age : prevState.age,
                Level : prevState.level,
                Place : prevState.place,
                Uniform : prevState.uniform,
                Contact : prevState.contact,
                Link : true,
                Etc : prevState.etc,
            })

            })
            alert('게시글 올리기 성공!');
            this.backToMainScreen();
    }
    render() {
        return (
            <ScrollView>
            <View>
                <Text style={{ fontSize: 30 }}>Write Screen</Text>
                <Text>{this.state.prevID}</Text>
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeDate}
                    placeholder="날짜, 시간 을 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeAge}
                    placeholder="연령대를 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeLevel}
                    placeholder="팀 레벨을 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangePlace}
                    placeholder="장소를 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeUniform}
                    placeholder="유니폼 상의 색상 :@@@  하의 색상:@@@"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeContact}
                    placeholder="연락망을 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeContact}
                    placeholder="기타 다른 말 ( 비용, 용병 가능 여부를 반드시 포함하세요)"
                />
                <Button onPress={() => this.onWrite()} title='게시글 올리기' />
                <Button onPress={() => this.backToMainScreen()} title='Back to Main' />
            </View>
            </ScrollView>
        )
    }
    backToMainScreen() {
        this.props.navigation.navigate('Main', {prevID : this.state.prevID})
    }
}