import React from 'react';

import './styles.css'

const RoundedCornerImage = (props) => {
    return (
        <div className="round-corner">
            <img src={props.imgAddr} className="img"></img>
        </div>
      );
}
 
export default RoundedCornerImage;