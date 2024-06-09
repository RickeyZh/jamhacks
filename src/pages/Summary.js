import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import { Data } from "../components/Data";
import "../App.css";
import LineChart from "../components/LineChart";
import LineChart2 from "../components/LineChart2";
import DoughnutChart from "../components/DoughnutChart";
import { response } from "express";

Chart.register(CategoryScale);

export default function Summary() {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: ["0"],
    datasets: [
      {
        lineTension: 0.7,
        label: "Users Gained ",
        data: [0],
        backgroundColor: [
          "rgba (75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [chartData2, setChartData2] = useState({
    labels: ["0"],
    datasets: [
      {
        lineTension: 0.7,
        label: "Users Gained ",
        data: [0],
        backgroundColor: [
          "rgba (75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setTimeout(() => {
      // get data from the server
      fetch("http://localhost:5038/api/grip/all")
        .then((response) => response.json())
        .then((resData) => setData(resData));
      console.log(data);

      //update from csv
      // fetch("http://localhost:5038/api/grip/append", {
      //   method: "POST",
      //   body: Data,
      // });
      // .then((response) => response.json())
      // .then((response) => {
      //   console.log(response);
      // });
    }, 2000);
  });

  // useEffect(() => {
  //   fetch("http://localhost:5038/api/grip/append", {
  //     method: "POST",
  //   });
  // });

  useEffect(() => {
    if (data.length > 0) {
      save();
    }
  }, [data]);

  const save = () => {
    setChartData({
      labels: data.map((item) => item.year),
      datasets: [
        {
          lineTension: 0.7,
          label: "User Gain",
          data: data.map((item) => item.userGain),
          backgroundColor: [
            "rgba (75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
    console.log(chartData);

    setChartData2({
      labels: data.map((item) => item.year),
      datasets: [
        {
          lineTension: 0.7,
          label: "Thumb",
          data: data.map((item) => item.userLost),
          backgroundColor: [
            "rgba (75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          lineTension: 0.7,
          label: "Index Finger",
          data: data.map((item) => item.userGain),
          backgroundColor: [
            "rgba (75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          lineTension: 0.7,
          label: "Middle Finger",
          data: data.map((item) => item.userGain),
          backgroundColor: [
            "rgba (75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          lineTension: 0.7,
          label: "Ring Finger",
          data: data.map((item) => item.userGain),
          backgroundColor: [
            "rgba (75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          lineTension: 0.7,
          label: "Pinky",
          data: data.map((item) => item.userGain),
          backgroundColor: [
            "rgba (75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
    console.log(chartData2);
  };
  return (
    <div>
      <div className="Header2">Analysis</div>
      <div className="Chart1">
        <LineChart chartData={chartData} />
        <LineChart2 chartData={chartData2} />
      </div>
      <div className="Chart2">
        <DoughnutChart chartData={chartData} />
      </div>
    </div>
  );
}
