import React from 'react';
import './Stopwatch.css';
import Buttons from './Buttons/Buttons';
import Result from './Result/Result'

const Stopwatch = (props) => {
    return (
        <div className="stopwatch">
            <Buttons
                btnActive={props.btnActive}
                clickStartPause={props.clickStartPause}
                clickReset={props.clickReset}
            />
            <Result
                miliseconds={props.miliseconds}
                seconds={props.seconds}
                minutes={props.minutes}
            />
        </div>
    );
}

export default Stopwatch;