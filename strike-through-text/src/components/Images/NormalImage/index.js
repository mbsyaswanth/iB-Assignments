import React from 'react';

import './styles.css'
import { tsPropertySignature } from '@babel/types';

const NormalImage = (props) => {
    return ( 
        <div className="normal-image">
            <img src={props.imgAddr} className="img"></img>
        </div>
        
     );
}
 
export default NormalImage;