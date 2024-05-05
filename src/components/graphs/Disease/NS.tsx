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

const SuicideTemperaturePollutionGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["E", "D", "A", "C", "B"],
    datasets: [
      {
        label: "Number of Suicides per 100,000 People",
        type: "bar",
        data: [83, 11, 25, 26, 46],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Average Annual Temperature (°C)",
        type: "line",
        data: [-5, 4, 26, 24.8, 11],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
        yAxisID: "y2",
      },
      {
        label: "Air Pollution (µg/m³)",
        type: "line",
        data: [10, 4, 25, 6, 14],
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
          text: "Number of Suicides per 100,000 People",
        },
      },
      y2: {
        position: "right",
        title: {
          display: true,
          text: "Average Annual Temperature (°C)",
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
        text: "Number of Suicides According to Climate",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default SuicideTemperaturePollutionGraph;
