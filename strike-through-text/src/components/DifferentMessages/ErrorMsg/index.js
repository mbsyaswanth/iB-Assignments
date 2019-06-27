import React from 'react';

import './styles.css';

const ErrorMsg = (props) => {
    return ( 
        <div className="error-msg">
            {props.msg}
        </div>
     );
}
 
export default ErrorMsg;