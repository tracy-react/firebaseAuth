import React, {Component} from 'react';
import {
  Button,
  Card, CardItem, Input
} from './common';
import firebase from 'firebase';
import {Text, StyleSheet} from 'react-native';
import {Spinner} from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  state = {
    email: '',
    password: '',
    error: {},
    loading: false
  };

  handleLogin() {
    const {email, password} = this.state;
    this.setState({ error: {}, loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch((error) => {
            this.setState({error: error, loading: false});
          });
      });
  }

  onLoginSuccess() {
    this.setState({ error: {}, loading: false, email: '', password: '' });
  }


  render() {
    const { error, loading } = this.state;
    return (
      <Card>
        <CardItem>
          <Input
            label='Email'
            placeholder='email@mail.com'
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
          />
        </CardItem>
        <CardItem>
          <Input
            label='Password'
            placeholder='***password***'
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
        </CardItem>
        { error && <Text style={styles.error}>{error.message}</Text> }

        <CardItem>
          {
            loading ?
              <Spinner size='small'/>
              :
              <Button
                buttonText={'Log in'}
                handlePress={this.handleLogin}
              />
          }

        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'red'
  }
});


export default LoginForm;
