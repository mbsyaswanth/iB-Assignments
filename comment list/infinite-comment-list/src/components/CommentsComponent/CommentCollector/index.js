import React, { Component } from 'react';

class CommentCollector extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            input : ""
         }
      }

      handleChange= (event) => {
          this.setState({
              input : event.target.value
          })
          console.log(this.state.input);
      }

      handleSubmit = () => {
          this.props.addCmnt(this.state.input)
      }

    render() { 
        return ( 
            <div>
                <input type='text' name='comment' value={this.state.input} 
    onChange={this.handleChange}/>
               <button type='submit' onClick={this.handleSubmit}>Submit</button>
            </div>
         );
    }
}
 
export default CommentCollector;