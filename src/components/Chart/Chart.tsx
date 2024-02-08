import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale } from "chart.js/auto";
import { useSelector } from "react-redux";
import { selectAmountMonthly } from "../../redux/water/waterSelectors";
import { useTranslation } from "react-i18next";

ChartJS.register(LinearScale);
const ChartWater = () => {
  const { t } = useTranslation();
  const amountDate = useSelector(selectAmountMonthly);
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: `${t("chart.amount")}`,
        data: [] as number[],
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: `${t("chart.percentage")}`,
        data: [] as number[],
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  });

  useEffect(() => {
    if (amountDate) {
      const labels = amountDate.month.map((entry) => entry.date);
      const dailyData = amountDate.month.map((entry) => entry.amountOfWater);
      const dailyPercentages = amountDate.month.map(
        (entry) => entry.percentage
      );

      setChartData((prevChartData) => ({
        ...prevChartData,
        labels,
        datasets: [
          { ...prevChartData.datasets[0], data: dailyData },
          { ...prevChartData.datasets[1], data: dailyPercentages },
        ],
      }));
    }
  }, [amountDate]);

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
};

export default ChartWater;
