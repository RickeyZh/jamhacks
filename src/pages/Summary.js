import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../components/Data";
import { Data2 } from "../components/Data2";
import "../App.css";
import LineChart from "../components/LineChart";
import LineChart2 from "../components/LineChart2";
import DoughnutChart from "../components/DoughnutChart";


Chart.register(CategoryScale);

export default function Summary() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year),
        datasets: [
          {
            lineTension: 0.7,
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba (75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
    });



    const [chartData2, setChartData2] = useState({
      labels: Data2.map((data) => data.year),
      datasets: [
        {
          lineTension: 0.7,
          label: "Users Gained ",
          data: Data2.map((data) => data.userGain),
          backgroundColor: [
            "rgba (75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0"
          ],
          borderColor: "black",
          borderWidth: 2
        }
      ]
  });

    
    return(
      <div>
        <div className="Header2">Analysis</div>
        <div className="Chart1">
            <LineChart chartData={chartData} />
            <br/>
            <br/>

            <LineChart2 chartData={chartData2} />
        </div>
        <div className="Chart2">
            <DoughnutChart chartData={chartData} />
        </div>
      </div>
    )
}
