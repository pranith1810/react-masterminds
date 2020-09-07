import React from 'react';
import '../styles/GameComponent.css';

class GameComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            
        };
    }

    render() {
        return (
            <div className='game'>
                <div className='radio-buttons'>
                    <label>
                        <input type='radio' name='difficulty' value='Easy' />
                        Easy
                    </label>
                    <label>
                        <input type='radio' name='difficulty' value='Medium' />
                        Medium
                    </label>
                    <label>
                        <input type='radio' name='difficulty' value='Hard' />
                        Hard
                    </label>
                </div>
                <input className='number-input' type = 'number' />
                <button className='guess'>Guess</button>
            </div>
        );
    }
}

export default GameComponent;