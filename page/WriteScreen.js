import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import firestore , { doc  } from '@react-native-firebase/firestore';
import style from "./style";

const date = new Date();


export default class WriteScreen extends Component {
    state = {
        date:'',
        time: '',
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
    onChangeTime = (event) =>{
        this.setState({
            time : event
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
                Time : prevState.time,
                Age : prevState.age,
                Level : prevState.level,
                Place : prevState.place,
                Uniform : prevState.uniform,
                Contact : prevState.contact,
                Link : true,
                Etc : prevState.etc,
            })
            })
            alert(" 게시글을 올렸습니다. 양식에 어긋날 시, 삭제 될 수 있습니다.")
            this.backToMainScreen();
    }
    render() {
        return (
            <ScrollView>
            <View>
                <Text style={{ fontSize: 30 }}>Write Screen</Text>
                <Text style={style.text}>반드시 지정된 양식을 따라주세요.</Text>
                <Text>{this.state.prevID} 님의 글</Text>
                <Text>  </Text>
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeDate}
                    placeholder="날짜를 입력하세요 ex)2022.02.24" 
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeTime}
                    placeholder="시간을 입력하세요 ex) 오전 10시 -> 10:00 , 오후 6시 -> 18:00" 
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeAge}
                    placeholder="연령대를 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeLevel}
                    placeholder="팀 레벨을 입력하세요 "
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangePlace}
                    placeholder="장소를 입력하세요"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeUniform}
                    placeholder="유니폼 색상 "
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