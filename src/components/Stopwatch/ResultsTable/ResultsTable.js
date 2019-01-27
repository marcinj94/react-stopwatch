import React from 'react';
import './ResultsTable.css';
import SavedResult from './SavedResult/SavedResult'

const ResultsTable = (props) => {
    return (
        props.savedResults.length <= 0 ? null : (
            <div className="resultsTable">
                <h2>Saved results:</h2>
                <ul className="results__list">
                    <SavedResult
                        savedResults={props.savedResults}
                    />
                </ul>
            </div>
        )
    );
};

export default ResultsTable;