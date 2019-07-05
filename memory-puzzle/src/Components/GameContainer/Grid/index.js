import React, { Component } from 'react';

import Square from './Square'

class Grid extends Component {

    constructor(props) {
        super(props);
        console.log(props.show==="true");
        this.state = { 
            clickedSquares: this.props.randoms
         }
         this.generateSquares();
      }
    squares=[]
    updateClickedSquares = (squarenumber) => {
        this.setState(
            {
                clickedSquares: this.state.clickedSquares.concat(squarenumber)
            },this.generateSquares
        )
    }

    generateSquares = () => {
     this.squares = [];
     let size=this.props.gridsize*this.props.gridsize;
     for (let i=0;i<size;i++)
     {   if(this.state.clickedSquares.includes(i)){
        this.squares.push(<Square updateclick={this.updateClickedSquares} size={this.props.gridsize} show="true" number={i} theme={this.props.theme} />)
  
        }
        else {
            this.squares.push(<Square  updateclick={this.updateClickedSquares} size={this.props.gridsize} show="false" number={i} theme={this.props.theme} />)
        }
         
     }
     return this.squares;
    }

    render() { 
        let grid = {
            display:"grid",
            gridTemplateColumns:"repeat("+this.props.gridsize+","+(600/this.props.gridsize)+"px)",
            gridTemplateRows:"repeat("+this.props.gridsize+","+(600/this.props.gridsize)+"px",
            gridGap:"2px",
            height:"600px",
            width:"600px"
        }
        return ( <div style={grid}>
            {this.squares}
        </div> );
    }
}
 
export default Grid;