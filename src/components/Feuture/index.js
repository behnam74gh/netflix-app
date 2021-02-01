import React from "react";
import { Container, Title, SubTitle } from "./style/Feature";

export const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
