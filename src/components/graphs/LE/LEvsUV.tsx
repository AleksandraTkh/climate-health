import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
} from "chart.js";
import type { ChartOptions, ChartData } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController
);

const ThirdGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["A", "C", "D", "E", "B"],
    datasets: [
      {
        label: "Healthy Life Expactency for 2006 - 2019",
        type: "bar",
        data: [72, 71, 70, 65, 65],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Air Polution (µg/m³)",
        type: "line",
        data: [25, 14, 12, 10, 46],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
      },
      {
        label: "Average Year Temperature (°C)",
        type: "line",
        data: [14, 10, 10, 4, 26],
        borderColor: "orange",
        backgroundColor: "orange",
        fill: false,
        yAxisID: "y2",
      },
    ],
  };

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Healthy Life Expactency for 2006 - 2019",
        },
      },
      y2: {
        position: "right",
        title: {
          display: true,
          text: "Average Year Temperature (°C)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        title: {
          display: true,
          text: "Climate",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Healthy Life Expactency for 2006 - 2019",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default ThirdGraph;
