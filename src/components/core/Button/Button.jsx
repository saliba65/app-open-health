/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { ThemedButton, Loading } from "./ButtonStyle";

const Button = ({
  name,
  variant,
  action,
  isLoading,
  type,
  icon,
  ...restProps
}) => {
  const disabled = variant.includes("disabled");
  const IconComponent = icon;
  return (
    <ThemedButton
      data-testid="button-element"
      disabled={disabled}
      variant={variant}
      onClick={action}
      type={type}
      {...restProps}
    >
      {isLoading ? (
        <Loading data-testid="loading-element" />
      ) : (
        <>
          {icon && <IconComponent alt={name} />}
          {name}
        </>
      )}
    </ThemedButton>
  );
};

Button.defaultProps = {
  icon: null,
  variant: [],
  type: "button",
  isLoading: false,
};

Button.propTypes = {
  type: PropTypes.string,
  icon: PropTypes.object,
  action: PropTypes.func,
  isLoading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  variant: PropTypes.arrayOf(PropTypes.string),
};

export default Button;
