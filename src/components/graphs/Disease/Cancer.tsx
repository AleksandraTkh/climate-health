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

const CancerTemperatureGraph: React.FC = () => {
  const data: ChartData<"bar" | "line", number[], string> = {
    labels: ["D", "C", "B", "E", "A"],
    datasets: [
      {
        label: "Cancer Incidence (%)",
        type: "bar",
        data: [17.4, 12.4, 9.8, 4.8, 4.3],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
      {
        label: "Average Annual Temperature (°C)",
        type: "line",
        data: [3.8, 10.0, 9.8, 26.3, -5.0, 24.8],
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
          text: "Cancer Incidence (%)",
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
        text: "Cancer Incidence According to Climate",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default CancerTemperatureGraph;
