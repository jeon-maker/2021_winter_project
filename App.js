import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import MainScreen from './page/MainScreen';
import StartScreen from './page/StartScreen';
import JoinScreen from './page/JoinScreen';
import FilterScreen from './page/FilterScreen';
import WriteScreen from './page/WriteScreen';
import LetterScreen from './page/LetterScreen';
import EditScreen from './page/EditScreen';
import PostScreen from './page/PostScreen';
import VoteScreen from './page/VoteScreen';
import SuggestScreen from './page/SuggestScreen';
import ChatScreen from './page/ChatScreen';
import LoginScreen from './page/LoginScreen';
import SignupScreen from './page/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen}
          options={{
            title: '초기화면'
          }} />
        <Stack.Screen name="Join" component={JoinScreen}
          options={{
            title: '회원가입화면'
          }} />
        <Stack.Screen name="SignUP" component={SignupScreen}
          options={{
            title: 'SignUP 화면'
          }} />  
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
            title: '로그인화면'
          }} />
        <Stack.Screen name="Main" component={MainScreen}
          options={{
            title: '메인화면'
          }} />
        <Stack.Screen name="Filter" component={FilterScreen}
          options={{
            title: '필터화면'
          }} />
        <Stack.Screen name="Write" component={WriteScreen}
          options={{
            title: '글쓰기화면'
          }} />
        <Stack.Screen name="Letter" component={LetterScreen}
          options={{
            title: '쪽지 화면'
          }} />
        <Stack.Screen name="Edit" component={EditScreen}
          options={{
            title: '수정화면'
          }} />
        <Stack.Screen name="Post" component={PostScreen}
          options={{
            title: '글을 클릭하면 나오는 화면'
          }} />
        <Stack.Screen name="Vote" component={VoteScreen}
          options={{
            title: '투표화면'
          }} />
        <Stack.Screen name="Suggest" component={SuggestScreen}
          options={{
            title: '제안화면'
          }} />
        <Stack.Screen name="Chat" component={ChatScreen}
          options={{
            title: '대화화면'
          }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}