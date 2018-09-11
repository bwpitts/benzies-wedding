import React from 'react';
import { ScrollView, StyleSheet, View, Text, Linking} from 'react-native';

export default class ItineraryScreen extends React.Component {
    static navigationOptions = {
        title: 'Itinerary',
    };

    constructor(props){
        super(props);
        this.state= {
            currentUser: null
        };
    }


    render() {
        return (
            <ScrollView style={styles.container}>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#eee',
    },
    header: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black"
    },
    link: {
        color: "#0000EE"
    },
    section: {
        flexDirection: "column",
        alignItems: "center",
        margin: 10
    },
});
