import React from 'react';
import './styles.css'

const StrikeText = (props) => {
    return ( 
        <div className='strike'>
            {props.inputText}
        </div>
     );
}
 
export default StrikeText;