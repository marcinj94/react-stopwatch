import React from 'react';
import './Buttons.css';

const Buttons = (props) => {

    const btnValue = props.btnActive ? "Pause" : "Start";

    return (
        <div className="buttons">

            <button
                className="startPause"
                onClick={props.clickStartPause}
            >
                {btnValue}
            </button>

            <button
                onClick={props.clickSave}
            >
                Save
            </button>

            <button
                onClick={props.clickReset}
            >
                Reset
            </button>

            <button
                onClick={props.clickCleanList}
            >
                Clear list
            </button>
        </div>
    );
}

export default Buttons;