import "../App.css";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import LineChart from "../components/LineChart";
import LineChart2 from "../components/LineChart2";
import DoughnutChart from "../components/DoughnutChart";
import test from "../data/test.json";
import num from "../data/num.csv";
import Papa from "papaparse";
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
let count = 0;

function read(start, id, end) {
  const tempRef = ref(db, start + id.toString() + end);
  let data;
  onValue(tempRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
}

function write(id, thumb, index, mid, ring, pinky, hype) {
  set(ref(db, "data/" + id.toString()), {
    thumb: thumb,
    index: index,
    mid: mid,
    ring: ring,
    pinky: pinky,
    hype: hype,
  });
}

Chart.register(CategoryScale);

export default function Summary() {
  const [sonny, setSonny] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(num);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setSonny(parsedData);
    };
    fetchData();
  }, []);
  console.log("sonny", sonny);
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

  const t0 = read("data/", 0, "/thumb");
  const t1 = read("data/", 1, "/thumb");
  const t2 = read("data/", 2, "/thumb");
  const t3 = read("data/", 3, "/thumb");
  const t4 = read("data/", 4, "/thumb");
  const t5 = read("data/", 5, "/thumb");

  const i0 = read("data/", 0, "/index");
  const i1 = read("data/", 1, "/index");
  const i2 = read("data/", 2, "/index");
  const i3 = read("data/", 3, "/index");
  const i4 = read("data/", 4, "/index");
  const i5 = read("data/", 5, "/index");

  const m0 = read("data/", 0, "/mid");
  const m1 = read("data/", 1, "/mid");
  const m2 = read("data/", 2, "/mid");
  const m3 = read("data/", 3, "/mid");
  const m4 = read("data/", 4, "/mid");
  const m5 = read("data/", 5, "/mid");

  const r0 = read("data/", 0, "/ring");
  const r1 = read("data/", 1, "/ring");
  const r2 = read("data/", 2, "/ring");
  const r3 = read("data/", 3, "/ring");
  const r4 = read("data/", 4, "/ring");
  const r5 = read("data/", 5, "/ring");

  const p0 = read("data/", 0, "/pinky");
  const p1 = read("data/", 1, "/pinky");
  const p2 = read("data/", 2, "/pinky");
  const p3 = read("data/", 3, "/pinky");
  const p4 = read("data/", 4, "/pinky");
  const p5 = read("data/", 5, "/pinky");

  const h0 = read("data/", 0, "/hype");
  const h1 = read("data/", 1, "/hype");
  const h2 = read("data/", 2, "/hype");
  const h3 = read("data/", 3, "/hype");
  const h4 = read("data/", 4, "/hype");
  const h5 = read("data/", 5, "/hype");
  useEffect(() => {
    setTimeout(() => {
      setData([
        {
          id: 0,
          thumb: t0,
          index: i0,
          mid: m0,
          ring: r0,
          pinky: p0,
          hype: h0,
        },
        {
          id: 1,
          thumb: t1,
          index: i1,
          mid: m1,
          ring: r1,
          pinky: p1,
          hype: h1,
        },
        {
          id: 2,
          thumb: t2,
          index: i2,
          mid: m2,
          ring: r2,
          pinky: p2,
          hype: h2,
        },
        {
          id: 3,
          thumb: t3,
          index: i3,
          mid: m3,
          ring: r3,
          pinky: p3,
          hype: h3,
        },
        {
          id: 4,
          thumb: t4,
          index: i4,
          mid: m4,
          ring: r4,
          pinky: p4,
          hype: h4,
        },
        {
          id: 5,
          thumb: t5,
          index: i5,
          mid: m5,
          ring: r5,
          pinky: p5,
          hype: h5,
        },
      ]);
      write(
        0,
        sonny[0 + count][0],
        sonny[0 + count]["0_1"],
        sonny[0 + count]["0_2"],
        sonny[0 + count]["0_3"],
        sonny[0 + count][1],
        sonny[0 + count][2]
      );
      write(
        1,
        sonny[1 + count][0],
        sonny[1 + count]["0_1"],
        sonny[1 + count]["0_2"],
        sonny[1 + count]["0_3"],
        sonny[1 + count][1],
        sonny[1 + count][2]
      );
      write(
        2,
        sonny[2 + count][0],
        sonny[2 + count]["0_1"],
        sonny[2 + count]["0_2"],
        sonny[2 + count]["0_3"],
        sonny[2 + count][1],
        sonny[2 + count][2]
      );
      write(
        3,
        sonny[3 + count][0],
        sonny[3 + count]["0_1"],
        sonny[3 + count]["0_2"],
        sonny[3 + count]["0_3"],
        sonny[3 + count][1],
        sonny[3 + count][2]
      );
      write(
        4,
        sonny[4 + count][0],
        sonny[4 + count]["0_1"],
        sonny[4 + count]["0_2"],
        sonny[4 + count]["0_3"],
        sonny[4 + count][1],
        sonny[4 + count][2]
      );
      write(
        5,
        sonny[5 + count][0],
        sonny[5 + count]["0_1"],
        sonny[5 + count]["0_2"],
        sonny[5 + count]["0_3"],
        sonny[5 + count][1],
        sonny[5 + count][2]
      );
      count++;
      console.log(count, ": count");
    }, 1000);
  });

  useEffect(() => {
    if (data.length > 0) {
      save();
    }
  }, [data]);

  const save = () => {
    setChartData({
      labels: data.map((item) => item.id),
      datasets: [
        {
          lineTension: 0.7,
          label: "User Gain",
          data: data.map((item) => item.hype),
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
      labels: data.map((item) => item.id),
      datasets: [
        {
          lineTension: 0.7,
          label: "Thumb",
          data: data.map((item) => item.thumb),
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
          data: data.map((item) => item.index),
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
          data: data.map((item) => item.mid),
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
          data: data.map((item) => item.ring),
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
          data: data.map((item) => item.pinky),
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
