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

export default class LoggedIn extends Component {
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
            <View style={styles.getStartedContainer}>
                <Text>Logged in</Text>
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
