import DashboardBox from "../../components/DashboardBox";
import FlexBetween from "../../components/FlexBetween";
import { useGetKpisQuery } from "../../state/api";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  Bar,
  Scatter,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import regression, { DataPoint } from "regression";

const Predictions = () => {
  const { palette } = useTheme();
  const [chartType, setChartType] = useState("line");
  const [isPredictions, setIsPredictions] = useState(false);
  const { data: kpiData } = useGetKpisQuery();

  const formattedData = useMemo(() => {
    if (!kpiData) return [];
    const monthData = kpiData[0].monthlyData;

    const formatted: Array<DataPoint> = monthData.map(
      ({ revenue }, i: number) => {
        return [i, revenue];
      }
    );
    const regressionLine = regression.linear(formatted);

    return monthData.map(({ month, revenue }, i: number) => {
      return {
        name: month,
        "Actual Revenue": revenue,
        "Predicted Revenue": regressionLine.predict(i + 12)[1],
      };
    });
  }, [kpiData]);

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => setChartType("line")}
            sx={{
              color: palette.grey[900],
              backgroundColor: palette.grey[700],
              boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
              marginRight: "1rem",
            }}
          >
            Show Line Chart
          </Button>
          <Button
            onClick={() => setChartType("scatter")}
            sx={{
              color: palette.grey[900],
              backgroundColor: palette.grey[700],
              boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
              marginRight: "1rem",
            }}
          >
            Show Scatter Plot
          </Button>
          <Button
            onClick={() => setChartType("bar")}
            sx={{
              color: palette.grey[900],
              backgroundColor: palette.grey[700],
              boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
              marginRight: "1rem",
            }}
          >
            Show Bar Chart
          </Button>
          {/* <Button
            onClick={() => setIsPredictions(!isPredictions)}
            sx={{
              color: palette.grey[900],
              backgroundColor: palette.grey[700],
              boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
            }}
          >
            Show Predicted Revenue for Next Year
          </Button> */}
        </Box>
      </FlexBetween>
      <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
  data={formattedData}
  margin={{
    top: 20,
    right: 75,
    left: 20,
    bottom: 80,
  }}
>
  <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
  <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
    <Label value="Month" offset={-5} position="insideBottom" />
  </XAxis>
  <YAxis
    domain={[12000, 26000]}
    axisLine={{ strokeWidth: "0" }}
    style={{ fontSize: "10px" }}
    tickFormatter={(v) => `$${v}`}
  >
    <Label
      value="Revenue in USD"
      angle={-90}
      offset={-5}
      position="insideLeft"
    />
  </YAxis>
  <Tooltip />
  <Legend verticalAlign="top" />
  {chartType === "line" && (
    <>
      <Line
        type="monotone"
        dataKey="Predicted Revenue"
        stroke={palette.secondary[500]}
      />
      <Line
        type="monotone"
        dataKey="Actual Revenue"
        stroke={palette.primary.main}
        strokeWidth={0}
        dot={{ strokeWidth: 5 }}
      />
    </>
  )}
  {chartType === "scatter" && (
    <>
      <Scatter
        dataKey="Predicted Revenue"
        fill={palette.secondary[500]}
      />
      <Scatter
        dataKey="Actual Revenue"
        fill={palette.primary.main}
      />
    </>
  )}
  {chartType === "bar" && (
    <>
      <Bar dataKey="Predicted Revenue" fill={palette.secondary[500]} />
      <Bar dataKey="Actual Revenue" fill={palette.primary.main} />
    </>
  )}
</ComposedChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Predictions;
