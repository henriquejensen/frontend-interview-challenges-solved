import React from "react";
import style from "styled-components";

export function FinancialInfo({
    title, value, gain, date, payements
}) {
  return (
    <div>
      <Title>{title}</Title>
      <Paragraph fontSize={10} ><Bold>{value}</Bold><Gain>{gain}</Gain> {date}</Paragraph>
      <Paragraph fontSize={10}>{payements}</Paragraph>
    </div>
  );
}

const Bold = style('span')`
    font-weight: bold;
    font-size: 16px
`;

const Gain = style(Bold)`
    color: green;
    margin-right: 5px;
    margin-left: 5px
`;

const Title = style("h4")`
  font-size: 10px;
  margin: 0;
  opacity: 0.3
`;

const Paragraph = style("p")`
  font-size: ${({ fontSize = 16 }) => `${fontSize}px`};
  margin-top: 3px;
  margin-bottom: 0
`;
