import React from "react";

import {
  Container,
  Base,
  Err,
  Title,
  SmallText,
  Submit,
  Text,
  Link,
  Input,
} from "./style/Form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Err = function FormErr({ children, ...restProps }) {
  return <Err {...restProps}>{children}</Err>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
