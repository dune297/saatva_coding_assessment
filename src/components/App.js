import React, { Component } from "react";
import ReactDOM from "react-dom";
import InfoWidget from "./InfoWidget";
import MattressObject from "../resources/mattresses";
import CartIcon from "../resources/cart-icon.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mattressData: MattressObject.mattresses,
      cartCount: 0,
      selected: "classic",
    };
  }

  incrementCartCount = () => {
    this.setState({ cartCount: this.state.cartCount + 1 });
  };

  cartIcon = () => {
    const cartCount = this.state.cartCount;

    return (
      <div className="cartDiv">
        <CartIcon className="cartIcon" />
        <p className="cartCount">{cartCount > 9 ? "9+" : cartCount}</p>
      </div>
    );
  };

  carouselImage = () => {
    const { mattressData, selected } = this.state;
    return (
      <div
        className="imageContainer"
        style={{
          backgroundImage: `url(../src/resources/${mattressData[selected].imageFileName})`,
        }}
      ></div>
    );
  };

  handleSelect = (selectedLabel) => {
    const mattressData = this.state.mattressData;
    this.setState({
      selected: Object.keys(mattressData).filter(
        (mattress) => mattressData[mattress].name === selectedLabel
      ),
    });
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <img className="logo" src={`../src/resources/saatva_logo.png`} />
          {this.cartIcon()}
        </div>

        <div className="content">
          <div className="carousel">{this.carouselImage()}</div>
          <div className="infoWidget">
            <InfoWidget
              mattressData={this.state.mattressData}
              incrementCartCount={this.incrementCartCount}
              selected={this.state.selected}
              handleSelect={this.handleSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
