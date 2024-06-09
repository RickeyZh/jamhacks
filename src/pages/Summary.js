import "../App.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import LineChart2 from "../components/LineChart2";
import DoughnutChart from "../components/DoughnutChart";
import test from "../data/test.json";
import firebase from "firebase/compat/app";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
  onValue,
} from "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyBzjl0kMyjlXbiSLwaCaWt_OT9a1QGdEoY",
  authDomain: "fbtest-9cadb.firebaseapp.com",
  databaseURL: "https://fbtest-9cadb-default-rtdb.firebaseio.com",
  projectId: "fbtest-9cadb",
  storageBucket: "fbtest-9cadb.appspot.com",
  messagingSenderId: "597863423876",
  appId: "1:597863423876:web:8fdc9383d8713583af07d1",
});
const db = getDatabase();

function read(start, id, end) {
  const tempRef = ref(db, start + id.toString() + end);
  let data;
  onValue(tempRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
}

function write(id, thumb, index) {
  set(ref(db, "data/" + id.toString()), {
    thumb: thumb,
    index: index,
  });
}

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

  const a = read("data/", 0, "/thumb");
  const b = read("data/", 1, "/thumb");
  const c = read("data/", 2, "/thumb");
  const d = read("data/", 3, "/thumb");

  const aa = read("data/", 0, "/index");
  const bb = read("data/", 1, "/index");
  const cc = read("data/", 2, "/index");
  const dd = read("data/", 3, "/index");

  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          year: a,
          userGain: aa,
          userLost: 50,
        },
        {
          year: b,
          userGain: bb,
          userLost: 100,
        },
        {
          year: c,
          userGain: cc,
          userLost: 150,
        },
        {
          year: d,
          userGain: dd,
          userLost: 200,
        },
        {
          year: 2019,
          userGain: 500,
          userLost: 250,
        },
        {
          year: 2020,
          userGain: 600,
          userLost: 300,
        },
        {
          year: 2021,
          userGain: 700,
          userLost: 350,
        },
      ]);
      write(test.at(0).id, test.at(0).thumb, test.at(0).index);
      write(test.at(1).id, test.at(1).thumb, test.at(1).index);
      write(test.at(2).id, test.at(2).thumb, test.at(2).index);
    }, 1000);
  });

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
