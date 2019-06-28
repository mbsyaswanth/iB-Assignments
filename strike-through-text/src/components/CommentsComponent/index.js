import React, { Component } from 'react';

import CommentCollector from './CommentCollector';

import CommentsList from './CommentsList'

import './styles.css'

class CommentsComponent extends Component {
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
        <div className="center">
            <CommentCollector addCmnt={this.addComment} />
            <CommentsList day={this.timeFinder} cmntsArray={this.state.comments} />
        </div>
         );
    }
}
 
export default CommentsComponent;