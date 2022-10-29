import ChartBars from "./ChartBars";
import "./../../styles/chart.css";
import Card from "../UI/Card";

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map((item) => item.value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <Card className="chart">
      {dataPoints.map((item) => {
        return (
          <ChartBars
            key={item.label}
            value={item.value}
            maxValue={totalMaximum}
            label={item.label}
          />
        );
      })}
    </Card>
  );
}

export default Chart;
