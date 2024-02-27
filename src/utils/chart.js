import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box } from "@mui/material";

export default function Line({ data, year = "2022" }) {
  if (!data || Object.keys(data).length === 0) {
    return null; // Render nothing if data is not available
  }

  // Extracting months and counts from the provided data
  const months = data[year].map((item) => item[0]);
  const counts = data[year].map((item) => item[1]);
  return (
    <Box sx={{ width: "100%" }}>
      <LineChart
        xAxis={[{ scaleType: "point", data: months }]} // Pass months to the xAxis prop
        series={[
          {
            data: counts, // Pass counts to the series prop
            label: "Users",
          },
        ]}
        width={600}
        height={370}
      />
    </Box>
  );
}
