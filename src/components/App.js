/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import firebase from 'firebase';
import {
  View
} from 'react-native';
import { Button, Header, CardItem, Spinner } from './common';
import LoginForm from './LoginForm';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.renderContent = this.renderContent.bind(this);
  }

  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDHMtek7QUsauiP3EzOpOk_kyH6LVHvExo',
      authDomain: 'react-native-auth-207f9.firebaseapp.com',
      databaseURL: 'https://react-native-auth-207f9.firebaseio.com',
      projectId: 'react-native-auth-207f9',
      storageBucket: 'react-native-auth-207f9.appspot.com',
      messagingSenderId: '719757738590'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardItem>
            <Button handlePress={() => { firebase.auth().signOut(); }} buttonText='Logout'/>
          </CardItem>
        );
      case false:
        return <LoginForm/>;
      default:
        return <Spinner size='large'/>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText={'Auth'} />
        {this.renderContent()}
      </View>
    );
  }
}

