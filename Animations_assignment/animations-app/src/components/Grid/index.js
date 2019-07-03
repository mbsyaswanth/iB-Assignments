import React from 'react';

import './styles.css';

import Square from './Square'

const Grid = (props) => {

    let gridContainer = {
        display : "grid",
        gridTemplateColumns : "repeat("+props.size+", 100px)",
        gridTemplateRows : "repeat("+props.size+", 100px)",
        gridGap: "10px"
    }
    
   

    let totalSqrs = (props.size*props.size);

    let squares = [];
    for (let i=0;i<totalSqrs;i++){
        if(i%props.size===0 || i%props.size===(props.size-1)){
            squares.push(<Square classToapply='trans3d' number={i} onClickFun='' />);
        } else {
            squares.push(<Square classToapply='trans2d' number={i} onClickFun='' />);
        }
    }

    return ( 
        <div style={gridContainer} className="center">
            {squares}
        </div>
     );
}
 
export default Grid;
