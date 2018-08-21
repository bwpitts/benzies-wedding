import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import CountDownComponent from "../components/Countdown"
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGVk2nuWoDHRkHGbNm0hCLPLtDTGJ21f8",
    authDomain: "benzies-wedding.firebaseapp.com",
    databaseURL: "https://benzies-wedding.firebaseio.com",
    projectId: "benzies-wedding",
    storageBucket: "benzies-wedding.appspot.com",
    messagingSenderId: "771684530202"
};

if (!firebase.apps.length) {
    const firebaseApp = firebase.initializeApp(firebaseConfig);
}

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Info',
  };

  constructor(props){
    super(props);
    this.state= {
      currentUser: null
    };
    this.info = this.getInfo()
  }

  getInfo(){
      return firebase.database().ref('benzies-wedding').on('value', function(snapshot){
            let key = snapshot.key;
            // let dateKey = snapshot.val().date;
            // let locationKey = snapshot.val().location;
            // let mapKey = snapshot.val().map;
            return key
          })
  }

  render() {
    const info = this.info;
    console.log(info);

    return (
      <ScrollView style={styles.container}>
       <CountDownComponent/>
        <View>
          <Text>Date:</Text>
          <Text>{}</Text>
        </View>
        <View>
            <Text>Location:</Text>
            {/*<Text>{this.information.ceremonyLocation}</Text>*/}
            <Text>MAP</Text>
        </View>
        <View>
          <Text>Hotel:</Text>
          {/*<Text>{this.information.hotel.name}</Text>*/}
          {/*<Text>{this.information.hotel.info}</Text>*/}
          {/*<Text>Check it out here {this.information.hotel.link}</Text>*/}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
