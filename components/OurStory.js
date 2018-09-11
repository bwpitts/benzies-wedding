import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class OurStory extends React.Component {
    render(){
        return(
            <View style={styles.topContainer}>
                <Text style={styles.header}>Our Story</Text>
                <Text>Here's some lorem ipsum</Text>
            </View>
        );
    }
}

const styles = new StyleSheet.create({
    topContainer: {
        marginTop: 25,
        alignItems: "center",
        marginBottom: 10
    },
    header: {
        fontSize: 22
    }
});