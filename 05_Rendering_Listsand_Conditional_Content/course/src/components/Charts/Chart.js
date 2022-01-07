
import ChartBars from "./ChartBars";
import "./../../styles/chart.css";

function Chart({dataPoints}) {
    
    const dataPointsValues = dataPoints.map(item => item.value)
    const totalMaximum = Math.max(...dataPointsValues);

    return (
        <div className="chart">
            {dataPoints.map( item => {
                return <ChartBars 
                          key={item.label}
                          value={item.value}
                          maxValue={totalMaximum}
                          label={item.label} 
                        />
            })}
        </div>
    );
}

export default Chart;
