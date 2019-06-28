import React from 'react';

const CommentsComponent = (props) => {
    console.log(props);

   
    return ( 
        <div>
            <ul className="undotted-list">
                {
                    props.cmntsArray.map(commentObj => <li className="cmnts-list-item" key={commentObj.toString()}>{commentObj.comment}<div className="comment-time">{commentObj.time}</div></li>)
                }
            </ul>
        </div>
     );
}
 
export default CommentsComponent;