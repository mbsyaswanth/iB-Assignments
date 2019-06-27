import React from 'react';

import './styles.css';

const WarningMsg = (props) => {
    return ( 
        <div className="warning-msg">
            {props.msg}
        </div>
     );
}
 
export default WarningMsg;