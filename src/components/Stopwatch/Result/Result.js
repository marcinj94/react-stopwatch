import React from 'react';
import './Result.css'

const Result = (props) => {

    const miliseconds = props.miliseconds < 10 ? `0${props.miliseconds}` : props.miliseconds
    const seconds = props.seconds < 10 ? `0${props.seconds}` : props.seconds
    const minutes = props.minutes < 10 ? `0${props.minutes}` : props.minutes

    return (
        <div className="result">
            <span className="result__value">
                {minutes} : {seconds} : {miliseconds}
            </span>
        </div>
    );
}

export default Result;