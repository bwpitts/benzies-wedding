import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import { ImagePicker, Icon } from 'expo';
import * as firebase from 'firebase'
import CameraButton from '../components/CameraButton'

export default class GalleryScreen extends React.Component {
  static navigationOptions = {
    title: 'Gallery',
    headerRight: <CameraButton/>
  };

  state = {
      currentUser: null,
      image: null
  };

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
