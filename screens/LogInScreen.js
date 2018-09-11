import React from 'react';
import {TextInput, StyleSheet, View, Text, TouchableOpacity, Platform, AsyncStorage} from 'react-native';
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

export default class LogInScreen extends React.Component {
    static navigationOptions = {
        title: 'Log In',
    };

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
                this.setState({errorMessage: null});
                this.setState({currentUser: data.user.email});
                this._storeUser(data.user);
            })
            .then((data) => {
                this.props.navigation.navigate("Main");
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            })
    }

    forgotPassword(){
        firebase
            .auth()
            .sendPasswordResetEmail(this.state.email)
            .then(() => alert("Email has been sent"))
            .catch((error) => {
                this.setState({errorMessage: error.message})
            });
    }

    _storeUser = async (user) => {
        try {
            await AsyncStorage.setItem('userToken', user.uid);
        } catch (error) {
            // Error saving data
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.errorMessage &&
                <Text style={{ color: 'red', fontWeight: "bold", fontSize: 16 }}>
                    {this.state.errorMessage}
                </Text>}
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
                        onPress={()=> this.forgotPassword()}
                        style={{width: "100%", margin: 5}}
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
    container: {
        flex: 1,
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollContainer:{
        opacity: 1,
    },
    button:{
        backgroundColor: "#478ac8",
        width: "100%",
        padding: 10,
        alignItems: 'center',
        borderColor: "#000",
        borderWidth: .5,
        borderRadius: 3
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        opacity: .8
    },
    textInput: {
        height: 40,
        width: "100%",
        borderColor: "grey",
        borderWidth: 1,
        backgroundColor: "#fff",
        marginBottom: 15
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 200,
        height: 160,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: '#fff',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
