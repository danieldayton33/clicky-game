import React, { Context } from 'react';

const ClickyGameContext = React.createContext();

export class Provider extends Component {
    state={
        pictures:[
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            },
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            },
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            },
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            },
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            },
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            },
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            },
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            },
            {
                src: "https://via.placeholder.com/200",
                isClicked: "false"
            }

        ],
        score: 0,
        highScore: 0
    }
    handleClick = () => {
        
    }
    render() {
        return (
            <ClickyGameContext.Provider
            value={{
                pictuers: this.state.pictures,
                score: this.state.score,
                highScore: this.state.highScore
            }
            }>

            </ClickyGameContext.Provider>
        )
    }

}