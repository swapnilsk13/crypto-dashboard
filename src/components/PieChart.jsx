import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js elements and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const style = {
  letterSpacing: "1px",
};

const CryptoPieChart = () => {
  return (
    <div className="container shadow-md border rounded-md w-3/3 bg-white h-64 top-2 relative mb-5">
      <div className="relative top-4">
        {/* Title */}
        <h1 style={style} className="text-black font-bold text-xl px-5">
          PortFolio
        </h1>
      </div>
      <div className="py-6">
        {/* Pie Chart */}
        <Pie
          data={{
            labels: ["Tether", "Luna", "Ethereum"],
            datasets: [
              {
                label: "PortFolio",
                data: [250, 400, 350],
                backgroundColor: [
                  "#14C38E",
                  "rgb(225, 152, 152)",
                  "rgb(162, 103, 138)",
                ],
                borderColor: [
                  "#14C38E",
                  "rgb(225, 152, 152)",
                  "rgb(162, 103, 138)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          plugins={[ChartDataLabels]}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: "right",
                labels: {
                  usePointStyle: true,
                  pointStyle: "circle",
                  // boxWidth: 5
                },
              },

              datalabels: {
                display: true,
                color: "white",
                align: "center",
                padding: {
                  right: 2,
                },
                labels: {
                  title: {
                    font: {
                      weight: "bold",
                      size: 18,
                    },
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CryptoPieChart;
