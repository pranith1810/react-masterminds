import React from 'react';
import '../styles/GameComponent.css';
import closer from '../images/closer.jpg';
import farther from '../images/farther.jpg';

class GameComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            difficulty: '',
            numberInput: 0,
            randomNumber: null,
            gameRunning: true,
            closeness: '',
            closenessPic: ''
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

        let randomNum = this.state.randomNumber;
        let inputNum = Number(this.state.numberInput);

        if (this.state.difficulty !== '') {
            if (inputNum === randomNum) {
                this.setState({
                    gameRunning: false
                });
            }
            else {
                if (randomNum < inputNum) {
                    if (inputNum < randomNum + randomNum / 2)
                        this.setState({
                            closeness: 'Smaller',
                            closenessPic: closer
                        })
                    else {
                        this.setState({
                            closeness: 'Smaller ',
                            closenessPic: farther
                        })
                    }
                }
                else {
                    if (inputNum > randomNum - randomNum / 2) {
                        this.setState({
                            closeness: 'Bigger',
                            closenessPic: closer
                        })
                    }
                    else {
                        this.setState({
                            closeness: 'Bigger',
                            closenessPic: farther
                        })
                    }
                }
                console.log("Try again");
            }
            console.log(this.state);
        }
        else {
            alert('Please select the difficulty');
        }
    }

    handlePlayAgainClick() {
        this.setState({
            difficulty: '',
            numberInput: 0,
            randomNumber: null,
            gameRunning: true,
            closeness: '',
            closenessPic: ''
        });
    }

    render() {
        return (
            <div className='game'>
                {this.state.gameRunning ?
                    <div className='gameRunning'>
                        <div className='radio-buttons'>
                            <label>
                                <input
                                    onChange={this.handleDifficultyChange}
                                    type='radio' name='difficulty' id='easy'
                                    checked={this.state.difficulty === 'easy'}
                                />
                                Easy
                            </label>
                            <label>
                                <input
                                    onChange={this.handleDifficultyChange}
                                    type='radio'
                                    name='difficulty'
                                    id='medium'
                                    checked={this.state.difficulty === 'medium'}
                                />
                                Medium
                            </label>
                            <label>
                                <input
                                    onChange={this.handleDifficultyChange}
                                    type='radio' name='difficulty'
                                    id='hard'
                                    checked={this.state.difficulty === 'hard'}
                                />
                                Hard
                            </label>
                        </div>
                        <input onChange={this.handleInputChange}
                            value={this.state.numberInput}
                            className='number-input'
                            type='number'
                        />
                        <button onClick={this.handleGuessClick} className='guess'>Guess</button>
                        {this.state.closeness !== '' &&
                            <div>
                                <p>{this.state.closeness}</p>
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