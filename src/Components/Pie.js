import React from "react";
import { Pie } from "@ant-design/charts";
import "./Graph.css";

const Piechart = () => {
  var data = [
    {
      type: "Holidays",
      value: 72,
    },
    {
      type: "Working",
      value: 293,
    },
  ];

  const config = {
    appendPadding: 10,
    data: data,
    // width: 300,
    // height: 300,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.64,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "none",
        },
      },
    },
  };

  return (
    <div id="piechart">
      <div id="piechartdata">
        <Pie {...config} />
      </div>
    </div>
  );
};

export default Piechart;
