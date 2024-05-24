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

const ParkinsonsGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["C", "D", "A", "E", "B"],
    datasets: [
      {
        label:
          "Percentage of Population Suffering from Parkinson's Disease (%)",
        type: "bar",
        data: [0.24, 0.24, 0.15, 0.08, 0.03],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Air Pollution (µg/m³)",
        type: "line",
        data: [12, 14, 25, 5, 46],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
        yAxisID: "y2",
      },
      {
        label: "Average Annual Temperature (°C)",
        type: "line",
        data: [10, 4, 26, -5, 12],
        borderColor: "orange",
        backgroundColor: "orange",
        fill: false,
        yAxisID: "y3",
      },
      {
        label: "UV Radiation",
        type: "line",
        data: [2.1, 1.6, 1.3, 1.3, 3.4],
        borderColor: "purple",
        backgroundColor: "purple",
        fill: false,
        yAxisID: "y4",
      },
      {
        label: "Average Annual Duration of Sunshine (thousands)",
        type: "line",
        data: [3.8, 1.6, 3.4, 1.3, 4.8],
        borderColor: "red",
        backgroundColor: "red",
        fill: false,
        yAxisID: "y5",
      },
    ],
  };

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Percentage of Population Suffering from Parkinson's Disease (%)",
        },
      },
      y2: {
        position: "right",
        title: {
          display: true,
          text: "Air Pollution (µg/m³)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y3: {
        position: "right",
        title: {
          display: true,
          text: "Average Annual Temperature (°C)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y4: {
        position: "right",
        title: {
          display: true,
          text: "UV Radiation",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y5: {
        position: "right",
        title: {
          display: true,
          text: "Average Annual Duration of Sunshine (thousands)",
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
        text: "Percentage of Population Suffering from Parkinson's Disease According to Climate",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default ParkinsonsGraph;
