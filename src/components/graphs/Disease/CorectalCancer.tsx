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

const ColorectalCancerGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["C", "D", "E", "A", "B"],
    datasets: [
      {
        label: "Colorectal Cancer Incidence (%)",
        type: "bar",
        data: [0.26, 0.25, 0.19, 0.17, 0.08],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "UV Radiation",
        type: "line",
        data: [1.6, 1.6, 3.8, 2.6, 0.3],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
        yAxisID: "y2",
      },
      {
        label: "Air Pollution (µg/m³)",
        type: "line",
        data: [12, 10, 14, 46, 26],
        borderColor: "orange",
        backgroundColor: "orange",
        fill: false,
        yAxisID: "y3",
      },
      {
        label: "Average Annual Duration of Sunshine (hours)",
        type: "line",
        data: [2.1, 1.6, 2.0, 4.8, 3.4],
        borderColor: "purple",
        backgroundColor: "purple",
        fill: false,
        yAxisID: "y4",
      },
      {
        label: "Average Annual Temperature (°C)",
        type: "line",
        data: [12, 14, 20, 5, 4],
        borderColor: "green",
        backgroundColor: "green",
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
          text: "Colorectal Cancer Incidence (%)",
        },
      },
      y2: {
        position: "right",
        title: {
          display: true,
          text: "UV Radiation",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y3: {
        position: "right",
        title: {
          display: true,
          text: "Air Pollution (µg/m³)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y4: {
        position: "right",
        title: {
          display: true,
          text: "Average Annual Duration of Sunshine (hours)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y5: {
        position: "right",
        title: {
          display: true,
          text: "Average Annual Temperature (°C)",
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
        text: "Incidence of Colorectal Cancer According to Climate",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default ColorectalCancerGraph;
