import React from "react";
import style from "styled-components";

export function ContainerTitleBox({ children, title }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

const Container = style("div")`
    padding-right: 15px;
    padding-left: 15px
`;

const Title = style("h2")`
    border-bottom: 1px solid;
    margin-top: 0px
`;