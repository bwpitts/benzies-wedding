import React from 'react';
import {View} from 'react-native';
import CountDown from 'react-native-countdown-component';

export default class CountDownComponent extends React.Component {
    render(){
        let today = new Date();
        let weddingDate = new Date("2019-08-16T18:30:00");
        let until = (weddingDate.getTime() - today.getTime())/1000;
        return (
            <View>
                <CountDown
                    until={until}
                    onFinish={() => alert("We did it")}
                    onPress={() => alert("Until WDay")}
                    size={15}
                    digitBgColor="#ddd"
                />
            </View>
        );
    }

};