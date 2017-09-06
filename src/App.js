import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyAzqLUcZkd0Y0Dn8uz9xbVvpg6inilonfo',
        authDomain: 'authentication-cfc59.firebaseapp.com',
        databaseURL: 'https://authentication-cfc59.firebaseio.com',
        projectId: 'authentication-cfc59',
        storageBucket: 'authentication-cfc59.appspot.com',
        messagingSenderId: '1058940832121'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
      this.setState({ loggedIn: false});
      }
    });
  }

    renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return (
            <Card><CardSection>
                <Button onPress={() => firebase.auth().signOut()}>
                  Log Out 
                </Button>
            </CardSection></Card>
          );
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large"/>
      }
    }

  render () {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;