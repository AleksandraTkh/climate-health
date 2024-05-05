import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Life Expectancy",
        data: [82.26, 78.99, 81.41, 81.42, 76.58],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Healthy Life Expectancy",
        data: [72.31, 64.88, 70.64, 70.41, 65.3],
        backgroundColor: "rgba(0, 255, 0, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Healthy Life Expectancy & Life Expectancy According to Climate Zone",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
