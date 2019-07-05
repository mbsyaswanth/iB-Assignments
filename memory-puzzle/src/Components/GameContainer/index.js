import React, { Component } from 'react';

import './styles.css';

import Grid from './Grid';


const liteTheme = {
    color: "black",
    backgroundColor: "white",
    squareTheme : {
        backgroundColor: "rgb(128,112,250,0.45)"
    }

}

const darkTheme = {
    color: "white",
      backgroundColor: "rgb(34, 40, 112)",
      squareTheme : {
        backgroundColor: "rgb(128,112,250,0.45)"
    }

}

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            thememode:darkTheme,
            randomNumbers: this.getRandomNumbers(0),
            level:0
         };
        
      }

     handleTheme= () => {
         console.log("onclick working");
         if(this.state.thememode===darkTheme){
             this.setState(
                 {
                     thememode: liteTheme
                 }
             )
         } else {
            this.setState(
                {
                    thememode: darkTheme
                }
            )
         }
     }

     getRandomNumbers = (level) => {
        let random = [];
        while(random.length!==level+3){
            let number = Math.floor(Math.random() * Math.floor((level+3)*(level+3)));
            if(!random.includes(number))
            {
                random.push(number);
            }
        }
        return random;
     }

    render() {
        let themeMode={
            color:this.state.thememode.color,
            backgroundColor:this.state.thememode.backgroundColor
        }; 
        return ( 
            <div className="game-container" style={themeMode}>
                <div className="game-info">
                    <div className="center">Level: 0</div>
                    <div className="center">
                        Theme mode:
                        <label className="switch" >
                        <input type="checkbox" onClick={this.handleTheme} />
                        <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                
                    <Grid gridsize={this.state.level+3} randoms={this.state.randomNumbers} theme={this.state.thememode} />
            
            </div>
         );
    }
}
 
export default GameContainer;