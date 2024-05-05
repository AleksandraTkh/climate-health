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

const CardiovascularGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["B", "E", "D", "C", "A"],
    datasets: [
      {
        label: "Cardiovascular Diseases Incidence (%)",
        type: "bar",
        data: [1.0, 0.3, 0.81, 0.67, 0.49],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "UV Radiation",
        type: "line",
        data: [4.8, 3.4, 1.6, 1.6, 2.1],
        borderColor: "blue",
        backgroundColor: "blue",
        fill: false,
      },
      {
        label: "Average Annual Duration of Sunshine (thousands)",
        type: "line",
        data: [3.4, 1.3, 1.6, 2.0, 2.0],
        borderColor: "orange",
        backgroundColor: "orange",
        fill: false,
        yAxisID: "y2",
      },
      {
        label: "Air Pollution (µg/m³)",
        type: "line",
        data: [46, 26, 10, 5, 14],
        borderColor: "red",
        backgroundColor: "red",
        fill: false,
        yAxisID: "y3",
      },
      {
        label: "Average Annual Temperature (°C)",
        type: "line",
        data: [3.8, -5, 0, 10, 12],
        borderColor: "green",
        backgroundColor: "green",
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
          text: "Cardiovascular Diseases Incidence (%)",
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
          text: "Average Annual Temperature (°C)",
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        title: {
          display: true,
          text: "Klimat",
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Incidence of Cardiovascular Diseases According to Climate",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default CardiovascularGraph;
