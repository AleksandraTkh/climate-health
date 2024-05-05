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

const RespiratoryMortalityGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["E", "B", "C", "D", "A"],
    datasets: [
      {
        label: "Death Rate From Chronic Respiratory Diseases",
        type: "bar",
        data: [68, 42, 24, 21, 15],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Average Annual Duration of Sunshine (thousands)",
        type: "line",
        data: [1.3, 3.4, 1.6, 2.0, 2.0],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
        yAxisID: "y2",
      },
      {
        label: "UV záření",
        type: "line",
        data: [0.3, 4.8, 1.6, 1.6, 3.8],
        borderColor: "orange",
        backgroundColor: "orange",
        fill: false,
        yAxisID: "y3",
      },
      {
        label: "Air Pollution (µg/m³)",
        type: "line",
        data: [46, 24, 12, 10, 14],
        borderColor: "red",
        backgroundColor: "red",
        fill: false,
        yAxisID: "y4",
      },
    ],
  };

  const options: ChartOptions<"bar" | "line"> = {
    responsive: true,
    scales: {
      y: {
        title: {
          display: true,
          text: "Death Rate From Chronic Respiratory Diseases",
        },
      },
      y2: {
        position: "right",
        title: {
          display: true,
          text: "Average Annual Duration of Sunshine (thousands)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y3: {
        position: "right",
        title: {
          display: true,
          text: "UV Radiation",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      y4: {
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
        text: "Death Rate from Chronic Respiratory Diseases According to Climate",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default RespiratoryMortalityGraph;
