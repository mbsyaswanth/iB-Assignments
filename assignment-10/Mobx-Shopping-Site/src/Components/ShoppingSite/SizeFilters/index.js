import React, { Component } from "react";

import { observer } from "mobx-react";

import { sizeConstants } from "../../../constants";

import { SizeFiltersContainer, SizeFilter } from "./styledComponents";
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
          {console.log(Object.values(sizeConstants))}
          {Object.values(sizeConstants).map(value => (
            <SizeFilter
              type="button"
              onClick={this.handleClick}
              select={this.props.sizes.includes(value)}
              value={value}
            />
          ))}
        </div>
      </SizeFiltersContainer>
    );
  }
}

export default SizeFilters;
