import React, { Component, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, ScrollView , TouchableOpacity } from 'react-native';
import firestore , { doc  } from '@react-native-firebase/firestore';
import style from "./style";
import DateTimePickerModal from "react-native-modal-datetime-picker";


const date = new Date();

Date.prototype.format = function(f) {
    if (!this.valueOf()) return " ";
 
    var weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    var d = this;
     
    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function($1) {
        switch ($1) {
            case "yyyy": return d.getFullYear();
            case "yy": return (d.getFullYear() % 1000).zf(2);
            case "MM": return (d.getMonth() + 1).zf(2);
            case "dd": return d.getDate().zf(2);
            case "E": return weekName[d.getDay()];
            case "HH": return d.getHours().zf(2);
            case "hh": return ((h = d.getHours() % 12) ? h : 12).zf(2);
            case "mm": return d.getMinutes().zf(2);
            case "ss": return d.getSeconds().zf(2);
            case "a/p": return d.getHours() < 12 ? "오전" : "오후";
            default: return $1;
        }
    });
};
 
String.prototype.string = function(len){var s = '', i = 0; while (i++ < len) { s += this; } return s;};
String.prototype.zf = function(len){return "0".string(len - this.length) + this;};
Number.prototype.zf = function(len){return this.toString().zf(len);};


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
        prevID : this.props.route.params.prevID,
        isDatePickerVisible  : ''
    }

    

    showDatePicker = () =>{
        this.setState({
            isDatePickerVisible : true
        })
    }

    hideDatePicker = () =>{
        this.setState({
            isDatePickerVisible : false
        })
    }

    handleConfirm = (date) =>{
        const date_ = date.format("yyyy.MM.dd")
        this.setState({
            date : date_
        })
        this.hideDatePicker();
        
    }

    handleConfirm_time = (time) =>{
        const time_ = time.format("a/p HH.mm")
        console.log("선택한 시간:",time_)
        this.setState({
            time : time_
        })
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
                <TouchableOpacity onPress={this.showDatePicker}> 
                <TextInput
                style ={style.input}
                placeholder = {(this.state.date == '') ? "날짜와 시간을 입력하시오 " : this.state.date + this.state.time }
                editable = {false}
                />
                <DateTimePickerModal
                    isVisible = {Boolean(this.state.isDatePickerVisible)}
                    mode = "date"
                    onConfirm={this.handleConfirm}
                    onCancel = {this.hideDatePicker}
                />
                {/* </TouchableOpacity>
                <TouchableOpacity onPress={this.showDatePicker}> 
                <TextInput
                style ={style.input}
                placeholder = {(this.state.time == '') ? "시간을 입력하시오 " : this.state.time}
                editable = {false}
                /> */}
                <DateTimePickerModal
                    isVisible = {Boolean(this.state.isDatePickerVisible)}
                    mode = "time"
                    onConfirm={this.handleConfirm_time}
                    onCancel = {this.hideDatePicker}
                />
                </TouchableOpacity>
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