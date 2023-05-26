 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryTooltip,
} from "victory";

interface LineGraphProps {}

interface DataPoint {
  x: string;
  y: number;
}

const Graph: React.FC<LineGraphProps> = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const data: { cases: Record<string, number> } = await response.json();
        const historicalData = data.cases;

        const formattedData: DataPoint[] = Object.entries(historicalData).map(
          ([date, cases]) => ({
            x: date,
            y: cases,
          })
        );

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const totalCases = data.reduce(
    (total: number, dataPoint: DataPoint) => total + dataPoint.y,
    0
  );

  const CustomLabel = ({ datum }: { datum?: DataPoint }) => (
    <g>
      <rect x="0" y="0" width="100" height="20" fill="white" stroke="#2c5b7d" />
      <text x="50" y="12" textAnchor="middle" fill="#2c5b7d" fontSize="8">
        {`Total Cases: ${totalCases}`}
      </text>
    </g>
  );

  return (
    <div style={{ position: "relative" }}>
      <VictoryChart>
        <VictoryAxis
          dependentAxis
          label="Cases -->"
          style={{
            tickLabels: { fontSize: 0 },
          }}
        />
        <VictoryAxis
          label="Days -->"
          style={{
            ticks: { stroke: "none" },
            tickLabels: { fontSize: 0 },
          }}
          tickValues={[]}
        />
        <VictoryLine
          data={data}
          x="x"
          y="y"
          style={{
            data: { stroke: "#2c5b7d" },
            labels: { fontSize: 8 },
          }}
          labelComponent={<CustomLabel />}
        />
        <VictoryTooltip
          labelComponent={<CustomLabel />}
          flyoutStyle={{ stroke: "#2c5b7d" }}
          flyoutPadding={{ top: 4, bottom: 4 }}
        />
      </VictoryChart>
      <div style={{ position: "absolute", right: "10px", top: "10px" }}>
        <CustomLabel />
      </div>
      <Link to="/map">
        <button
          style={{
            border: "2px solid #a4a8a1",
            borderRadius: "5px",
            padding: "8px",
            position: "absolute",
            right: "10px",
            bottom: "-30px",
            // boxSizing: "border-box",
            color: "white",
            background: "linear-gradient(to top, #b64442, transparent)",
          }}
        >
          Go to Map
        </button>
      </Link>
    </div>
  );
};

export default Graph;


