import React, {Component} from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import CountDownComponent from '../components/Countdown';
import OurStory from '../components/OurStory';
import TopLogo from '../components/TopLogo';
import * as firebase from 'firebase';
import HomeImage from "../components/HomeImage";

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    state = {currentUser: null};

constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        errorMessage: null,
        currentUser: null
    }
}

render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TopLogo/>
                <CountDownComponent/>
                <HomeImage/>
                <OurStory/>
            </View>
        </ScrollView>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        alignItems: "center"
    },
});