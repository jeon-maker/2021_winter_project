import React, { Component } from "react";
import { View, Text, Button, StyleSheet , ScrollView } from 'react-native';
import LoginScreen from "./LoginScreen";
import firestore , { doc  } from '@react-native-firebase/firestore';
import Load_post2 from "./load";
import style from "./style";




export default class PostScreen extends Component {
    state = {
        prevID : this.props.route.params.prevID,
        doc_id : this.props.route.params.doc_id,
        doc_item : this.props.route.params.doc_item,
    }
    

    render() {
        console.log("***** Post Screen 의 State : " , this.state)
        
        return (
           
            <View style={style.container}>
                <ScrollView>
                <Text style={{ fontSize: 30 }}>Post Screen</Text>
                <Button color={style.Button.color} onPress={() => this.backToMainScreen()} title='메인화면' />
                <Load_post2 id ={this.state.doc_id} item ={this.state.doc_item}  />
                </ScrollView>
            </View>
        )
    }
    backToMainScreen() {
        this.props.navigation.navigate('Main',{prevID : this.state.prevID})
    }
    goToChatScreen() {
        this.props.navigation.navigate('Chat')
    }
    goToSuggetScreen() {
        this.props.navigation.navigate('Suggest')
    }
    goToVoteScreen() {
        this.props.navigation.navigate('Vote')
    }
    goFilterScreen() {
        this.props.navigation.navigate('Filter')
    }

    goEditScreen() {
        this.props.navigation.navigate("Edit")
    }
}