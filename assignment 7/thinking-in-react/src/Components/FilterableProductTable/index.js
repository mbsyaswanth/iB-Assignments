import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        filterText: "",
        inStockOnly: false
    }

    setFilterText = (event) => {
        this.setState(
            {
                filterText: event.target.value
            }
        )
    } 

    setInStockOnly = (event) => {
        this.setState(
            {
                inStockOnly: event.target.checked
            }
        )
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    setText={this.setFilterText}
                    setCheckBox={this.setInStockOnly}
                />
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
}

export default FilterableProductTable;