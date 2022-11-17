/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
// import placeHolderUser from "../../../assets/icons/placeHolderUser.png";
import profile_image from "../../../assets/img/lucas_saliba.JPEG";

import { Avatar } from "./AvatarStyle";

const AvatarComponent = ({ url, shadow, size, ml, border }) =>
  <Avatar
    data-testid="avatar-element"
    src={url || profile_image}
    size={size}
    shadow={shadow}
    ml={ml}
    border={border}
  />;

AvatarComponent.propTypes = {
  ml: PropTypes.string,
  url: PropTypes.string,
  border: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.string
};

export default AvatarComponent;
