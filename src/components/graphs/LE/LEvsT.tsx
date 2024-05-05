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

const SecondGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Average healthy life expectancy 2006 - 2019",
        type: "bar",
        data: [72, 71, 70, 65, 65],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "UV radiation",
        type: "line",
        data: [3.8, 2.0, 2.1, 1.6, 0.3],
        borderColor: "orange",
        backgroundColor: "orange",
        fill: false,
      },
      {
        label: "Average Annual Duration of Sunshine (thousands)",
        type: "line",
        data: [2.0, 2.1, 1.6, 1.3, 4.8],
        borderColor: "blue",
        backgroundColor: "blue",
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
          text: "The average healthy life expectancy (years)",
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
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Healthy life expectancy 2006 - 2019",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default SecondGraph;
