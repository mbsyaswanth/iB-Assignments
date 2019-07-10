import React, { Component } from 'react';

class ProductRow extends Component {
    render() { 
        let product=this.props.product;
        let name= product.stocked==false?<span style={{color:"red"}}>{product.name}</span>:<span>{product.name}</span>;
        return ( 
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
         );
    }
}
 
export default ProductRow;