import React, { Component } from 'react';

class Square extends Component {
    state = { 
        sqrClass:""
     }
    

     clickHandler = () => {
        this.setState(
            {
                sqrClass: this.state.sqrClass ? "" :this.props.classToapply
            }
        )
         
     }

    render() { 
        return ( 
        <div className={"square "+this.state.sqrClass} onClick={this.clickHandler}>
            {this.props.number}
        </div> 
        );
    }
}
 
export default Square;