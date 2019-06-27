import React from 'react';

import './styles.css'

import NormalImage from './NormalImage'
import RoundedCornerImage from './RoundedCornerImage'
import CircularImage from './CircularImage'



const Images = (props) => {
    return ( 
        <div className="img-container">
            <NormalImage imgAddr={props.imgAddr} />

            <RoundedCornerImage imgAddr={props.imgAddr} />

            <CircularImage imgAddr={props.imgAddr} />
        </div>
     );
}
 
export default Images;