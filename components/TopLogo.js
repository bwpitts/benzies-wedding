import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class TopLogo extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.logoText}>Ben</Text>
                <Image
                    source={require('../assets/images/_O0A6731.jpg')}
                    style={styles.image}
                />
                <Text>McKenzie</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 5
    },
    image: {
        width: 30,
        height: 30,
        alignContent: "center"
    },
    logoText: {

    }
});