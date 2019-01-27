import React from 'react';
import './Buttons.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faDownload, faTrashAlt, faStop } from '@fortawesome/free-solid-svg-icons';

library.add(faPlay, faPause, faDownload, faTrashAlt, faStop);

const Buttons = (props) => {

    const btnValue = props.btnActive ? <FontAwesomeIcon icon="pause" /> : <FontAwesomeIcon icon="play" />;

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
                <FontAwesomeIcon icon="download" />
            </button>

            <button
                onClick={props.clickReset}
            >
                <FontAwesomeIcon icon="stop" />
            </button>

            <button
                onClick={props.clickCleanList}
            >
                <FontAwesomeIcon icon="trash-alt" />
            </button>
        </div>
    );
}

export default Buttons;