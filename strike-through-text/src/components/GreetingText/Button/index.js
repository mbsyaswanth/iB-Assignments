import React from 'react';

const Button = (props) => {
    return ( 
        <button className="btn-style stp-watch-btn" onClick={props.btnAction}>
            {props.btnText} 
        </button>
     );
}
 
export default Button;