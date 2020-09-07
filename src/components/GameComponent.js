import React from 'react';
import '../styles/GameComponent.css';

class GameComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            difficulty: '',
            numberInput: 0,
            randomNumber: null,
            gameRunning: true
        };
        this.handleGuessClick = this.handleGuessClick.bind(this);
        this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePlayAgainClick = this.handlePlayAgainClick.bind(this);
    }

    generateRandomNumber() {
        let randNum = 0;
        console.log(this.state.difficulty);
        if (this.state.difficulty === 'easy') {
            randNum = Math.floor(Math.random() * 10);
        }
        else if (this.state.difficulty === 'medium') {
            randNum = Math.floor(Math.random() * 100);
        }
        else {
            randNum = Math.floor(Math.random() * 1000);
        }
        this.setState({ randomNumber: randNum });
    }

    handleDifficultyChange(event) {
        this.setState({
            difficulty: event.target.id
        }, this.generateRandomNumber);
    }

    handleInputChange(event) {
        this.setState({ numberInput: event.target.value });
    }

    handleGuessClick() {
        if (this.state.difficulty === '') {
            alert('Please select the difficulty');
        }
        if (Number(this.state.numberInput) === this.state.randomNumber) {
            this.setState({
                gameRunning: false
            });
        }
        else {
            console.log("Try again");
        }
        console.log(this.state);
    }

    handlePlayAgainClick() {
        this.setState({
            difficulty: '',
            numberInput: 0,
            randomNumber: null,
            gameRunning: true
        });
    }

    render() {
        if (this.state.gameRunning) {
            return (
                <div className='game'>
                    <div className='radio-buttons'>
                        <label>
                            <input onChange={this.handleDifficultyChange} type='radio' name='difficulty' id='easy' checked={this.state.difficulty === 'easy'} />
                        Easy
                    </label>
                        <label>
                            <input onChange={this.handleDifficultyChange} type='radio' name='difficulty' id='medium' checked={this.state.difficulty === 'medium'} />
                        Medium
                    </label>
                        <label>
                            <input onChange={this.handleDifficultyChange} type='radio' name='difficulty' id='hard' checked={this.state.difficulty === 'hard'} />
                        Hard
                    </label>
                    </div>
                    <input onChange={this.handleInputChange} value={this.state.numberInput} className='number-input' type='number' />
                    <button onClick={this.handleGuessClick} className='guess'>Guess</button>
                </div>
            );
        }
        else {
            return (
                <div className="game">
                    <p>You Win!!</p>
                    <button onClick={this.handlePlayAgainClick}>Play Again</button>
                </div>
            );
        }
    }
}

export default GameComponent;