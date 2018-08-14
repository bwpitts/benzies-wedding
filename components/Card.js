import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default class Card extends React.Component {
    render() {
        return (

            //Connect to Firebase and add registries there
            //For Each registry create a card. (image, name, link) probably do that in the RegistryScreen
            <TouchableOpacity>
                <View>
                    <Image/>
                </View>
                <View>
                    <Text></Text>
                </View>
            </TouchableOpacity>
        );
    }
}