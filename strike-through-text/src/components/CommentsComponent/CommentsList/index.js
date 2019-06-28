import React from 'react';

const CommentsComponent = (props) => {
    console.log(props);


    return (
        <div>
            <ul className="undotted-list">
                {
                    props.cmntsArray.map(commentObj => <li className="cmnts-list-item" key={commentObj.toString()}><h4><img ></img>Tonny Stark</h4>{commentObj.comment}<div className="comment-time">{commentObj.time}</div></li>)
                }
            </ul>
        </div>
    );
}

export default CommentsComponent;