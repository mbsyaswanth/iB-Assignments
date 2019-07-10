import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
    render() { 
        let products=this.props.products;
        let rows=[];
        let lastCatrgory=null;
        products.forEach((product) => {
            if(product.name.indexOf(this.props.filterText)===-1){
                return;
            }

            if(product.category!==lastCatrgory){
                rows.push(<ProductCategoryRow category={product.category} />);
            }


            if(this.props.inStockOnly){
               if(product.stocked==true){
                rows.push(<ProductRow product={product} />);
               }
            } else {
                rows.push(<ProductRow product={product} />);
            }

            lastCatrgory = product.category;
        }
        );
        return ( 
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                
            </table>
         );
    }
}
 
export default ProductTable;