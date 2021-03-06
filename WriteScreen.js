import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import firestore , { doc  } from '@react-native-firebase/firestore';

const date = new Date();
const style = StyleSheet.create({
    container: {
        backgroundColor: '#B9BFFF',
        flex: 1
    },
    text: {
        fontSize: 25,
        color: 'black',
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
            alert('????????? ????????? ??????!');
            this.backToMainScreen();
    }
    render() {
        return (
            <ScrollView>
            <View>
                <Text style={{ fontSize: 30 }}>Write Screen</Text>
                <Text style={style.text}>????????? ????????? ????????? ???????????????.</Text>
                <Text>{this.state.prevID} ?????? ???</Text>
                <Text>  </Text>
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeDate}
                    placeholder="????????? ??????????????? ex)2022.02.24" 
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeTime}
                    placeholder="????????? ??????????????? ex) ?????? 10??? -> 10:00 , ?????? 6??? -> 18:00" 
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeAge}
                    placeholder="???????????? ???????????????"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeLevel}
                    placeholder="??? ????????? ??????????????? "
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangePlace}
                    placeholder="????????? ???????????????"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeUniform}
                    placeholder="????????? ?????? ?????? :@@@  ?????? ??????:@@@"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeContact}
                    placeholder="???????????? ???????????????"
                />
                <TextInput
                    style={style.input}
                    onChangeText={this.onChangeContact}
                    placeholder="?????? ?????? ??? ( ??????, ?????? ?????? ????????? ????????? ???????????????)"
                />
                <Button onPress={() => this.onWrite()} title='????????? ?????????' />
                <Button onPress={() => this.backToMainScreen()} title='Back to Main' />
            </View>
            </ScrollView>
        )
    }
    backToMainScreen() {
        this.props.navigation.navigate('Main', {prevID : this.state.prevID})
    }
}