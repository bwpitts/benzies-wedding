
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class HomeImage extends React.Component{
    render(){
        return(
            <View>
                <Image
                    source={require('../assets/images/_O0A6731.jpg')}
                    style={styles.image}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: "90%",
        height: "40%",
        alignContent: "center"
    }
});