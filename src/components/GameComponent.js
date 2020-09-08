import React from 'react';
import '../styles/GameComponent.css';
import RadioButton from './RadioButton.js';
import closer from '../images/closer.jpg';
import farther from '../images/farther.jpg';

class GameComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            difficulty: '',
            numberInput: 0,
            randomNumber: null,
            higherNumber: null,
            gameRunning: true,
            closeness: '',
            closenessPic: '',
            closenessText: ''
        };
        this.handleGuessClick = this.handleGuessClick.bind(this);
        this.handleDifficultyChange = this.handleDifficultyChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePlayAgainClick = this.handlePlayAgainClick.bind(this);
    }

    generateRandomNumber() {
        let randNum = 0;
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
        console.log('nope')
        console.log(event.target.id);
        this.setState({
            difficulty: event.target.id
        }, this.generateRandomNumber);
        if (event.target.id === 'easy') {
            this.setState({
                higherNumber: 10
            })
        }
        else if (event.target.id === 'medium') {
            this.setState({
                higherNumber: 100
            })
        }
        else {
            this.setState({
                higherNumber: 1000
            })
        }
    }

    handleInputChange(event) {
        this.setState({ numberInput: event.target.value });
    }

    handleGuessClick() {

        let randomNum = this.state.randomNumber;
        let inputNum = Number(this.state.numberInput);

        if (this.state.difficulty !== '') {

            if (inputNum > this.state.higherNumber || inputNum < 0 || this.state.numberInput === '') {
                alert('Please enter a number within limits')
                return;
            }

            if (inputNum === randomNum) {
                this.setState({
                    gameRunning: false
                });
            }
            else {
                if (randomNum < inputNum) {
                    if (inputNum < randomNum + this.state.higherNumber / 5)
                        this.setState({
                            closeness: 'The number to be guessed is smaller',
                            closenessText: 'You are getting hotter and closer!!!!',
                            closenessPic: closer
                        })
                    else {
                        this.setState({
                            closeness: 'The number to be guessed is smaller',
                            closenessText: 'You are getting colder and farther',
                            closenessPic: farther
                        })
                    }
                }
                else {
                    if (inputNum > randomNum - this.state.higherNumber / 5) {
                        this.setState({
                            closeness: 'The number to be guessed is bigger',
                            closenessText: 'You are getting hotter and closer!!!!',
                            closenessPic: closer
                        })
                    }
                    else {
                        this.setState({
                            closeness: 'The number to be guessed is bigger',
                            closenessText: 'You are getting colder and farther',
                            closenessPic: farther
                        })
                    }
                }
            }
        }
        else {
            alert('Please select the difficulty');
        }
        console.log(this.state);
    }

    handlePlayAgainClick() {
        this.setState({
            difficulty: '',
            numberInput: 0,
            randomNumber: null,
            higherNumber: null,
            gameRunning: true,
            closeness: '',
            closenessPic: '',
            closenessText: ''
        });
    }

    render() {
        return (
            <div className='game'>
                {this.state.gameRunning ?
                    <div className='gameRunning'>
                        <div className='radio-buttons'>

                            <RadioButton
                                handleDifficultyChange={this.handleDifficultyChange}
                                type='radio'
                                name='difficulty'
                                id='easy'
                                displayText='Easy'
                                checked={this.state.difficulty === 'easy'}
                            />

                            <RadioButton
                                handleDifficultyChange={this.handleDifficultyChange}
                                type='radio'
                                name='difficulty'
                                id='medium'
                                displayText='Medium'
                                checked={this.state.difficulty === 'medium'}
                            />

                            <RadioButton
                                handleDifficultyChange={this.handleDifficultyChange}
                                type='radio'
                                name='difficulty'
                                id='hard'
                                displayText='Hard'
                                checked={this.state.difficulty === 'hard'}
                            />

                        </div>

                        {this.state.difficulty !== '' &&
                            <p>Select a number between 0 to {this.state.higherNumber}</p>}

                        <input onChange={this.handleInputChange}
                            value={this.state.numberInput}
                            className='number-input'
                            type='number'
                        />
                        <button onClick={this.handleGuessClick} className='guess'>Guess</button>
                        {this.state.closeness !== '' &&
                            <div className='trialResult'>
                                <p className='closeness'>{this.state.closeness}</p>
                                <p className='closenessText'>{this.state.closenessText}</p>
                                <img className='closenessPic' src={this.state.closenessPic} alt='closePic' />
                            </div>
                        }
                    </div>
                    :
                    <div className='gameFinished'>
                        <p>You Win!!</p>
                        <button onClick={this.handlePlayAgainClick}>Play Again</button>
                    </div>
                }
            </div>
        );
    }
}


export default GameComponent;