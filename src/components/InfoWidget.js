import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonGroup from "./ButtonGroup";
import StarIcon from "../resources/star-icon.svg";

export default class InfoWidget extends Component {
  static propTypes = {
    mattressData: PropTypes.Object,
    incrementCartCount: PropTypes.func,
    handleSelect: PropTypes.func,
    selected: PropTypes.string,
  };

  constructor() {
    super();
  }

  addToCartButton = () => {
    return (
      <button
        className="addToCartButton"
        onClick={this.props.incrementCartCount}
      >
        Add To Cart
      </button>
    );
  };

  additionalInfo = (selected, mattressData) => {
    var currencyFormat = {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    };

    const selectedMattress = mattressData[selected];

    return (
      <div className="additionalInfo">
        <p className="selectedName">
          {`${selectedMattress.name} `}
          <span className="selectedRating">
            ({`${selectedMattress.reviewRating}`}
            <StarIcon viewBox="-4 5 32 16" width="18" height="16" />)
          </span>
        </p>
        <p className="selectedPrice">
          {" "}
          {new Intl.NumberFormat("en-US", currencyFormat).format(
            selectedMattress.price
          )}{" "}
        </p>
      </div>
    );
  };

  render() {
    const { selected, handleSelect, mattressData } = this.props;

    const buttonConfig = {
      labels: Object.keys(mattressData).map(
        (mattress) => mattressData[mattress].name
      ),
      header: "SELECT MATTRESS TYPE",
      selected: mattressData[selected].name,
    };

    return (
      <div>
        <p className="chooseHeader">Choose Your Mattress</p>
        <ButtonGroup
          buttonConfig={buttonConfig}
          handleSelect={handleSelect}
        ></ButtonGroup>
        {this.additionalInfo(selected, mattressData)}
        {this.addToCartButton()}
      </div>
    );
  }
}
