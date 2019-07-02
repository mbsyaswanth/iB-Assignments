import React, { Component } from 'react';

import './styles.css'

class HamburgerMenu extends Component {
    state = { 
        down: ""
     }
     
     handleClick = () => {
         if(!this.state.down){
            this.setState(
                {
                    down:" menu-show"
                }
            ); 
         } else {
            this.setState(
                {
                    down:""
                }
            )
         }
         
     }

    render() { 
        return ( 
            <div>
                <div className={this.state.down+" menu center"}>
                    <div className="text"> Hey, Here I am</div> 
                </div>
                <div className="center" onClick={this.handleClick}>
                    <img className="down-img" src="assets/angle-down.svg"></img>
                </div>
            </div>
         );
    }
}
 
export default HamburgerMenu;