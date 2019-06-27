import React from 'react';
import { tsPropertySignature } from '@babel/types';

const CommentsComponent = (props) => {
    return ( 
        <div>
            <h1>Comments List</h1>
            <ul>
                {
                    props.cmntsArray.map(comment => <li key={comment}>{comment}</li>)
                }
            </ul>
        </div>
     );
}
 
export default CommentsComponent;