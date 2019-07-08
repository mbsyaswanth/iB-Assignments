import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        console.log(props.show==="true");
        this.state = { 
            clickClass: props.show==="true" ? "clicked-square":""
         }
         if(props.show==="true")
         {setTimeout(
            () => {
                console.log("timeout");
                this.setState(
                    {
                        clickClass:""
                    }
                );
            } 
            , 
            props.size*1000
        );}
      }

      componentWillReceiveProps(nextProps){
        if(nextProps.show!==this.props.show){
          //Perform some operation
          this.setState({clickClass: nextProps.show==="true" ? "clicked-square":"" });
        }
        if(nextProps.show==="true")
         {setTimeout(
            () => {
                console.log("timeout");
                this.setState(
                    {
                        clickClass:""
                    }
                );
            } 
            , 
            nextProps.size*1000
        );}
    }

    handleClick = () => {
        console.log("clicked on it");
        this.props.updateclick(this.props.number);
        if(this.props.show==="true"){
            this.setState(
                {
                    clickClass:"clicked-square"
                }
            )
        } else {
            this.setState(
                {
                    clickClass:"wrong-square"
                }
            )
        }
         
        
    }


    render() { 
        let sQ= this.props.theme.squareTheme;
        //console.log(this.props.show);
        return ( 
            <div className="square-container" onClick={this.handleClick} style={sQ}>
                <div className={"click-square "+this.state.clickClass}></div>
            </div>
         );
    }
}
 
export default Square;