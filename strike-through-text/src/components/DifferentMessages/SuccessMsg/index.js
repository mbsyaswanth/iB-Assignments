import React from 'react';

import './styles.css';

const SuccessMsg = (props) => {
    return ( 
        <div className="success-msg">
            {props.msg}
        </div>
     );
}
 
export default SuccessMsg;