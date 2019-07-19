import React, { Component } from "react";

import { observer } from "mobx-react";
import { action, computed, observable } from "mobx";

@observer
class SizeFilters extends Component {
  handleClick = event => {
    this.props.onFilterClick(event.target.value);
  };

  render() {
    return (
      <div className="size-filters-container">
        <div>
          <div className="size-filter-row1">
            <input
              type="button"
              onClick={this.handleClick}
              className={
                this.props.sizes.includes("XS")
                  ? "size-filter size-filter-select"
                  : "size-filter"
              }
              value="XS"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className={
                this.props.sizes.includes("S")
                  ? "size-filter size-filter-select"
                  : "size-filter"
              }
              value="S"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className={
                this.props.sizes.includes("M")
                  ? "size-filter size-filter-select"
                  : "size-filter"
              }
              value="M"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className={
                this.props.sizes.includes("ML")
                  ? "size-filter size-filter-select"
                  : "size-filter"
              }
              value="ML"
            />
          </div>
          <div>
            <input
              type="button"
              onClick={this.handleClick}
              className={
                this.props.sizes.includes("L")
                  ? "size-filter size-filter-select"
                  : "size-filter"
              }
              value="L"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className={
                this.props.sizes.includes("XL")
                  ? "size-filter size-filter-select"
                  : "size-filter"
              }
              value="XL"
            />
            <input
              type="button"
              onClick={this.handleClick}
              className={
                this.props.sizes.includes("XXL")
                  ? "size-filter size-filter-select"
                  : "size-filter"
              }
              value="XXL"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SizeFilters;
