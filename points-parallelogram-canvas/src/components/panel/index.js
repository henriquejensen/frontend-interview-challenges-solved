import React from "react";
import Row from "./row";

import { floatFixed } from "../../../src/helpers";

import "./panel.css";

export default function Panel({
  point1 = "",
  point2 = "",
  point3 = "",
  parallelogramArea,
  circleArea
}) {
  return (
    <div id="panel-container">
      <h2>Coordinates</h2>
      <Row
        title={"Point 1"}
        values={[
          { value: point1.x, label: "x" },
          { value: point1.y, label: "y" }
        ]}
      />
      <Row
        title={"Point 2"}
        values={[
          { value: point2.x, label: "x" },
          { value: point2.y, label: "y" }
        ]}
      />
      <Row
        title={"Point 3"}
        values={[
          { value: point3.x, label: "x" },
          { value: point3.y, label: "y" }
        ]}
      />
      <Row
        title={"Parallelogram "}
        values={[
          {
            value: parallelogramArea && floatFixed(parallelogramArea),
            label: "area"
          }
        ]}
      />
      <Row
        title={"Circle "}
        values={[
          { value: circleArea && floatFixed(circleArea), label: "area" }
        ]}
      />
    </div>
  );
}
