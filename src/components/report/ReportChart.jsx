import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

//[0:{category: "home", totalAmount: 20}
// ,1:{category: "cataloge", totalAmount: 40}]
export function ReportChart({ reportList }) {
  const categories = reportList.map((item) => item.category);
  const totalAmounts = reportList.map((item) => item.totalAmount);

  const data = {
    labels: categories,
    datasets: [
      {
        data: totalAmounts,
        backgroundColor: [
          "rgb(0, 123, 255)",
          "rgb(255, 193, 7)",
          "rgb(40, 167, 69)",
          "rgba(255, 99, 132, 0.8)",
          "rgb(153, 102, 255)",
          "rgb(0, 0, 0)",
          "rgb(255, 64, 129)",
          "rgb(240, 240, 240)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return <Pie data={data} />;
}
