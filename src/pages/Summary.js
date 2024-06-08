import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "../components/Data";
import "../App.css";
import LineChart from "../components/LineChart";

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
    
    return(
        <div className="Chart1">
            <LineChart chartData={chartData} />
            <LineChart chartData={chartData} />
            <LineChart chartData={chartData} />

        </div>
    )
}
