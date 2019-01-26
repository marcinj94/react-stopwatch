import React from 'react';
import './Stopwatch.css';
import Buttons from './Buttons/Buttons';
import Result from './Result/Result'

const Stopwatch = (props) => {
    return (
        <div className="stopwatch">
            <Buttons
                click={props.click}
                btnActive={props.btnActive}
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