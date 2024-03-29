import Chart from "../Charts/Chart";

function ExpensesChart({ filteredExpenses }) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // for (const item of filteredExpenses) {
  //   const itemMonth = item.date.getMonth();
  //   console.log("itemMonth = ", itemMonth);
  //   chartDataPoints[itemMonth].value += item.amount;
  // }

  filteredExpenses.forEach((item) => {
    const itemMonth = item.date.getMonth();
    chartDataPoints[itemMonth].value += item.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
