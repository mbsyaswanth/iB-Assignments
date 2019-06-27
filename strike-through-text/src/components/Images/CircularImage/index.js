import React from 'react';

import './styles.css'

const CircularImage = (props) => {
    return ( 
        <div className="circular-image">
            <img src={props.imgAddr} className="img" ></img>
        </div>
     );
}
 
export default CircularImage;