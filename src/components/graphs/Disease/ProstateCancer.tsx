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
  PointElement
);

const ProstateCancerGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["D", "C", "A", "B", "E"],
    datasets: [
      {
        label: "Prostate Cancer Incidence (%)",
        type: "bar",
        data: [0.38, 0.3, 0.16, 0.12, 0.07],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "UV Radiation",
        type: "line",
        data: [1.6, 2.1, 3.8, 4.8, 0.3],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
        yAxisID: "y2",
      },
      {
        label: "Air Pollution (µg/m³)",
        type: "line",
        data: [10, 12, 14, 46, 7],
        borderColor: "orange",
        backgroundColor: "orange",
        fill: false,
        yAxisID: "y3",
      },
    ],
  };

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Prostate Cancer Incidence (%)",
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
        text: "Incidence of Prostate Cancer According to Climate",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default ProstateCancerGraph;
