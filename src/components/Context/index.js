import React, { Component } from 'react';

const ClickyGameContext = React.createContext();

export class Provider extends Component {
    state = {
        pictures: [
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            },
            {
                src: 'https://via.placeholder.com/200',
                isClicked: 'false'
            }
        
        ],
        score: 0,
        highScore: 0
    }
    render() {
        return (
            <ClickyGameContext.Provider value={{
                pictures: this.state.pictures,
                score: this.state.score,
                highScore: this.state.highScore
            }}>
                {this.props.children}
            </ClickyGameContext.Provider>
        );
    }
}

export const Consumer = ClickyGameContext.Consumer;