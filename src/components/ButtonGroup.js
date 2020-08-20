import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ButtonGroup extends Component {
  static propTypes = {
    buttonConfig: PropTypes.object,
    handleSelect: PropTypes.func,
  };

  constructor() {
    super();
  }

  render() {
    const { buttonConfig, handleSelect } = this.props;

    return (
      <div>
        <p className="buttonGroupHeader">{buttonConfig.header}</p>
        <div className="buttonWrapper">
          {buttonConfig.labels.map((label) => (
            <button
              key={label}
              className={
                label === buttonConfig.selected
                  ? "selectedButton"
                  : "unselectedButton"
              }
              onClick={() => handleSelect(label)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
