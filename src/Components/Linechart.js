import React from "react";
import { Line } from "@ant-design/charts";
import "./Graph.css";
import { Card } from "antd";

const Linechart = () => {
  const data = [
    { year: "2014", holidays: 67 },
    { year: "2015", holidays: 68 },
    { year: "2016", holidays: 65 },
    { year: "2017", holidays: 70 },
    { year: "2018", holidays: 69 },
    { year: "2019", holidays: 72 },
    { year: "2020", holidays: 71 },
    { year: "2021", holidays: 72 },
  ];

  const config = {
    data,
    // width: 320,
    // height: 200,
    // width: 300,
    // height: 300,
    autoFit: false,
    xField: "year",
    yField: "holidays",
    point: {
      size: 5,
      shape: "diamond",
    },
    label: {
      style: {
        fill: "#aaa",
      },
    },
  };

  return (
    <div id="linechart">
      <div id="linechartdiv">
        <Line {...config} />
      </div>
    </div>
  );
};
export default Linechart;
