/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import { Container } from "./TypographyStyle";

export const PageTitle = ({ title, children, fontSize, noBorder }) => (
  <Container
    fontSize={fontSize}
    noBorder={noBorder}
    data-testid="typography-element"
  >
    <h1>{title}</h1>
    {children}
  </Container>
);

PageTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  fontSize: PropTypes.number,
  noBorder: PropTypes.bool,
};
