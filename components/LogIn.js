import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    TextInput
} from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDGVk2nuWoDHRkHGbNm0hCLPLtDTGJ21f8",
    authDomain: "benzies-wedding.firebaseapp.com",
    databaseURL: "https://benzies-wedding.firebaseio.com",
    projectId: "benzies-wedding",
    storageBucket: "benzies-wedding.appspot.com",
    messagingSenderId: "771684530202"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class LogInScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errorMessage: null,
            currentUser: null
        }
    }

    authentication(){
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((data) => {
                this.setState({currentUser});
            })
            .catch(error => {
                alert(error);
            })
    }

    createAccount(){
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((data) => {
                console.log(data);
            })
            .catch(error => {
                alert(error);
            })
    }

    forgotPassword(){
        alert("Don't forget your password")
    }

    render() {

        return (
            <View style={styles.getStartedContainer}>

                <Text style={styles.getStartedText}>Get started by logging in</Text>

                <TextInput
                    style={styles.textInput}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    placeholder="Email Address"
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    placeholder="Password"
                    secureTextEntry={true}
                />

                <TouchableOpacity
                    onPress={() => this.authentication()}
                    style={{width: "100%"}}
                >
                    <View style={styles.button}>
                        <Text>Log in</Text>
                    </View>
                </TouchableOpacity>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity
                        onPress={()=> this.createAccount()}
                        style={{width: "48.5%", justifyContent: "flex-start", margin: 5}}
                    >
                        <View style={styles.button}>
                            <Text>Create Account</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=> this.forgotPassword()}
                        style={{width: "48.5%", justifyContent: "flex-end", margin: 5}}
                    >
                        <View style={styles.button}>
                            <Text>Forgot Password</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#478ac8",
        width: "100%",
        padding: 10,
        alignItems: 'center',
        borderColor: "#000",
        borderWidth: .5,
        borderRadius: 3
    },
    textInput: {
        height: 40,
        width: "100%",
        borderColor: "grey",
        borderWidth: 1,
        backgroundColor: "#fff",
        marginBottom: 15
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    getStartedText: {
        fontSize: 17,
        color: '#fff',
        lineHeight: 24,
        textAlign: 'center',
    },
});
