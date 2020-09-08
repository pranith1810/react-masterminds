import React from 'react';

function RadioButton(props) {
    return (
        <div className='radio-button'>
            <label>
                <input
                    onChange={props.handleDifficultyChange}
                    type={props.type}
                    difficulty={props.difficulty}
                    id={props.id}
                    checked={props.checked}
                />
                {props.displayText}
            </label>
        </div>
    )
}

export default RadioButton;