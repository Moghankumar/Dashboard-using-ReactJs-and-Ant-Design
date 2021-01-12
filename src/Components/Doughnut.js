import React from "react";
import { Doughnut } from "react-chartjs-2";

function Doughnutchart() {
  const data = {
    labels: ["Holidays", "Working"],
    datasets: [
      {
        data: [72, 293],
        backgroundColor: ["rgba(255,99,132,1)", "rgb(54,162,235,1)"],
      },
    ],
  };

  return (
    <div id="doughnutchart">
      <Doughnut data={data} />
    </div>
  );
}

export default Doughnutchart;
