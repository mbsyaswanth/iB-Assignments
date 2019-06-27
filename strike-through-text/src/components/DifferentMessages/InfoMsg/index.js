import React from 'react';

import './styles.css';

const InfoMsg = (props) => {
    return ( 
        <div className="info-msg">
            {props.msg}
        </div>
     );
}
 
export default InfoMsg;