import React, { Component } from 'react';

class SearchBar extends Component {
    render() { 
        return (
            <form>
                <input type="text" value={this.props.filterText} onChange={this.props.setText}  placeholder="Search..." />
                <p><input type="checkbox" checked={this.props.inStockOnly} onChange={this.props.setCheckBox} />{' '}Only show products in stock</p>
            </form>
        );
    }
}
 
export default SearchBar;