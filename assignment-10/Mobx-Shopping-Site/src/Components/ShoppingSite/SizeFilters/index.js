import React, { Component } from "react";

import { observer } from "mobx-react";

import {
  SizeFiltersContainer,
  SizeFilterRow1,
  SizeFilter
} from "./styledComponents";
@observer
class SizeFilters extends Component {
  handleClick = event => {
    this.props.onFilterClick(event.target.value);
  };
  //TODO: use function to return classname

  render() {
    return (
      <SizeFiltersContainer>
        <div>
          <SizeFilterRow1>
            <SizeFilter
              type="button"
              onClick={this.handleClick}
              select={this.props.sizes.includes("XS")}
              value="XS"
            />
            <SizeFilter
              type="button"
              onClick={this.handleClick}
              select={this.props.sizes.includes("S")}
              value="S"
            />
            <SizeFilter
              type="button"
              onClick={this.handleClick}
              select={this.props.sizes.includes("M")}
              value="M"
            />
            <SizeFilter
              type="button"
              onClick={this.handleClick}
              select={this.props.sizes.includes("ML")}
              value="ML"
            />
          </SizeFilterRow1>
          <div>
            <SizeFilter
              type="button"
              onClick={this.handleClick}
              select={this.props.sizes.includes("L")}
              value="L"
            />
            <SizeFilter
              type="button"
              onClick={this.handleClick}
              select={this.props.sizes.includes("XL")}
              value="XL"
            />
            <SizeFilter
              type="button"
              onClick={this.handleClick}
              select={this.props.sizes.includes("XXL")}
              value="XXL"
            />
          </div>
        </div>
      </SizeFiltersContainer>
    );
  }
}

export default SizeFilters;
