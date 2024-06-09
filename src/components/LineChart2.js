import React from "react";
import { Line } from "react-chartjs-2";

function LineChart2({ chartData }) {
  return (
    <div className="chart-container">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Finger Stress (seperated)"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart2;
