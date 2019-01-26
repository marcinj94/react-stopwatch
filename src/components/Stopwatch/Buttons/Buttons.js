import React from 'react';
import './Buttons.css';

const Buttons = (props) => {

    const btnValue = props.btnActive ? "Pauza" : "Start";

    return (
        <div className="buttons">
            <button
                className="startPause"
                onClick={props.click}
            >
                {btnValue}
            </button>

            <button>Save</button>
            <button>Reset</button>
            <button>Clear list</button>
        </div>
    );
}

export default Buttons;