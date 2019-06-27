import React, { Component } from 'react';

import CommentCollector from './CommentCollector';

import CommentsList from './CommentsList'

class commentsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            comments : []
         }
      }
   

     addComment = (x) => {
         this.setState(
            {
                comments : this.state.comments.concat(x)
            }
         ) 
         
     }

    render() { 
        return ( 
        <div>
            <CommentCollector addCmnt={this.addComment} />
            <CommentsList cmntsArray={this.state.comments} />
        </div>
         );
    }
}
 
export default commentsComponent;