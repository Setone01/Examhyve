import React from "react";
import { BUTTON_TYPES } from "../../STYLES/button";
import "./button.style.css";

const Button = (props) => {
  const { type, btnText, icon, onClick } = props;

  const getButtonClass = () => {
    switch (type) {
      case BUTTON_TYPES.PRIMARY:
        return "primaryBtn button";

      case BUTTON_TYPES.SECONDARY:
        return "secondaryBtn button";

      default:
        return "tertiaryBtn button";
    }
  };
  return <button onClick={onClick} className={`${getButtonClass()}`}>{icon}{btnText}</button>;
};

export default Button;
