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
    TextInput,
    ActivityIndicator
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
        errorMessage: null
    }
}

componentWillMount(){
    return (
        <View style={styles.container}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" />
        </View>
    )
}

authentication(){
    firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
            this.setState({errorMessage: null});
            alert("Successfully Logged In");
        })
        .catch(error => {
            this.setState({errorMessage: error.message});
        })
}

createAccount(){
    firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
            this.setState({errorMessage: null});
            alert("Successfully Created Account");
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

render() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/_57A5994.jpg')}
                style={styles.backgroundImage}>
                <View style={styles.scrollContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../assets/images/_O0A6731.jpg')}
                            style={styles.welcomeImage}
                        />
                    </View>

                    <View style={styles.getStartedContainer}>
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

                </View>
            </ImageBackground>
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1
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