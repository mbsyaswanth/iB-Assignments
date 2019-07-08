import React, { Component } from 'react';

import Square from './Square'

class Grid extends Component {

    constructor(props) {
        super(props);
        // console.log(props.show==="true");
        this.state = { 
            clickedSquares: [],
            gridFade: ""
         }
      }

    rightClicks = () => {
        console.log("hello");
        console.log(this.state.clickedSquares.length==this.props.gridsize);
        if(this.state.clickedSquares.length==this.props.gridsize){
            this.props.checkclicks(this.state.clickedSquares);
            this.setState(
                {
                    clickedSquares:[],
                    gridFade: "grid-fade-in"
                }
            )
        } 
    }

    wrongClick = () => {
        this.props.checkclicks(this.state.clickedSquares);
    }


    updateClickedSquares = (squarenumber) => {
        if(this.props.randoms.includes(squarenumber))
        {    
            if(!this.state.clickedSquares.includes(squarenumber))
            {   
                this.setState(
                {
                    clickedSquares: this.state.clickedSquares.concat(squarenumber)
                }, this.rightClicks
            )
            }
        } else {
            this.setState(
                {
                    clickedSquares: this.state.clickedSquares.concat(squarenumber),
                    gridFade: "grid-fade-in"
                },this.wrongClick
            ) 
        }
    }

    generateSquares = () => {
     let squares = [];
     let size=this.props.gridsize*this.props.gridsize;
     for (let i=0;i<size;i++)
     {   if(this.props.randoms.includes(i)){
        squares.push(<Square  updateclick={this.updateClickedSquares} size={this.props.gridsize} show="true" number={i} theme={this.props.theme} />)
  
        }
        else {
            squares.push(<Square   updateclick={this.updateClickedSquares} size={this.props.gridsize} show="false" number={i} theme={this.props.theme} />)
        }
         
     }
     return squares;
    }

    render() { 
        let grid = {
            display:"grid",
            gridTemplateColumns:"repeat("+this.props.gridsize+","+(600/this.props.gridsize)+"px)",
            gridTemplateRows:"repeat("+this.props.gridsize+","+(600/this.props.gridsize)+"px",
            gridGap:"2px",
            height:"600px",
            width:"600px",
            transitionDelay: ".3s",
            // transition:"all .4s linear .3s",
             animation:"fade 2s"
        }

        return ( 
        <div className={"grid-container "+this.state.gridFade}>
            <div className={this.state.gridFade}  style={grid}>
                {this.generateSquares()}
            </div>
        </div>
        );
    }
}
 
export default Grid;