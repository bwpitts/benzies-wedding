import React from 'react';
import {View, Text} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default class CountDownComponent extends React.Component {
    render(){
        let today = new Date();
        let weddingDate = new Date("2019-09-24");
        let until = (weddingDate.getTime() - today.getTime())/1000;
        return (
            <View>
                <CountDown
                    until={until}
                    onFinish={() => alert("We did it")}
                    onPress={() => alert("Until WDay")}
                    size={20}
                />
            </View>
        );
    }

};