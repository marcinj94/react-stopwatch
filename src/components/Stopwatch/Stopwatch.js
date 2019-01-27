import React from 'react';
import './Stopwatch.css';
import Buttons from './Buttons/Buttons';
import Result from './Result/Result';
import ResultsTable from './ResultsTable/ResultsTable';

const Stopwatch = (props) => {
    return (
        <div className="stopwatch">
            <Buttons
                btnActive={props.btnActive}
                clickStartPause={props.clickStartPause}
                clickReset={props.clickReset}
                clickSave={props.clickSaveResult}
                clickCleanList={props.clickCleanList}
            />
            <Result
                miliseconds={props.miliseconds}
                seconds={props.seconds}
                minutes={props.minutes}
            />

            <ResultsTable
                savedResults={props.savedResults}
            />
        </div>
    );
}

export default Stopwatch;