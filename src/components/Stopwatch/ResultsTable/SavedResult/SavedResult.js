import React from 'react';

const SavedResult = (props) => {

    const result = props.savedResults.map(savedResult => {
        const miliseconds = savedResult.miliseconds < 10 ? `0${savedResult.miliseconds}` : savedResult.miliseconds;
        const seconds = savedResult.seconds < 10 ? `0${savedResult.seconds}` : savedResult.seconds;
        const minutes = savedResult.minutes < 10 ? `0${savedResult.minutes}` : savedResult.minutes
        return (
            <li>{minutes} : {seconds} : {miliseconds}</li>
        )
    })

    return (
        <>
            {result}
        </>
    );
}

export default SavedResult;