import React from 'react';
import ReactMomentCountDown from 'react-moment-coundown';

export default function CountDownComponent () {
    const weddingDate = new Date('2019-9-24');

    return (
        <ReactMomentCountDown toDate={weddingDate}/>
    );
};