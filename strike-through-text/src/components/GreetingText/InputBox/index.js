import React from 'react';
import './styles.css'

const InputBox = (props) => {
    const userInputUpdate = (event) => {
        props.updateInput(event)
     }
    

    const onfocus = () => {
        props.focushandle("");
    }

    const nofocus = () => {
        props.focushandle("dontshow");
    }

    return ( 
        <div>
                <input value={props.inputValue} onChange={userInputUpdate} onFocus={onfocus} onBlur={nofocus}/>
                <div className={props.helperTextClass}><small>username should be in A-Z, a-z</small></div>
        </div>
     );
}
 
export default InputBox;