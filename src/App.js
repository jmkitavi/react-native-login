import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  // componentWillMount() {
  //   firebase.initializeApp({
  //       apiKey: 'AIzaSyAzqLUcZkd0Y0Dn8uz9xbVvpg6inilonfo',
  //       authDomain: 'authentication-cfc59.firebaseapp.com',
  //       databaseURL: 'https://authentication-cfc59.firebaseio.com',
  //       projectId: 'authentication-cfc59',
  //       storageBucket: 'authentication-cfc59.appspot.com',
  //       messagingSenderId: '1058940832121'
  //   });
  // }
  render () {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    );
  }
}

export default App;