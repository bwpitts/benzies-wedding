import React from 'react';
import {View, Text} from 'react-native';
import * as firebase from 'firebase'

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  state = { currentUser: null };

  componentDidMount() {
    const {currentUser} = firebase.auth();
    this.setState({currentUser})
  }

  render() {
    const { currentUser } = this.state;
    return (
        <View style={{flex:1}}>
            <Text>
                Hi {currentUser && currentUser.email}!
            </Text>
        </View>
    )
  }
}
