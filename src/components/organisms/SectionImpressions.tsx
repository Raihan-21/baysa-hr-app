import React, { useState } from "react";

import { Box, Flex, Select, Text } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

import Card from "@/components/organisms/Card";
const SectionImpressions = () => {
  const [data, setData] = useState({
    total: 1938000,
  });
  const [chartData, setChartData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Search",
        data: [200, 400, 600, 700, 500, 400, 600, 300, 400, 100, 200, 400],
        backgroundColor: ["#377DFF"],
      },
      {
        label: "Job Booster",
        data: [300, 500, 700, 800, 600, 500, 800, 400, 500, 300, 300, 500],
        backgroundColor: "#38CB89",
      },
      {
        label: "Job Alert",
        data: [300, 500, 700, 800, 600, 500, 800, 400, 500, 300, 300, 500],
        backgroundColor: "#FFAB00",
      },
      {
        label: "Company Booster",
        data: [300, 500, 700, 800, 600, 500, 800, 400, 500, 300, 300, 500],
        backgroundColor: "#FFC143",
      },
    ],
  });
  return (
    <Card data-testid="section-impressions">
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={"1px solid lightgray"}
        paddingX={10}
        paddingY={5}
      >
        <Box>
          <Text fontWeight={"bold"} color={"thirdgray"} fontSize={"small"}>
            Total Impressions
          </Text>
          <Text
            fontSize={"x-large"}
            fontWeight={"bold"}
            color={"secondarygray"}
          >
            {new Intl.NumberFormat().format(data.total)}
          </Text>
        </Box>

        <Select width={"fit-content"}>
          <option>Week</option>
          <option>Month</option>
          <option>Quarter</option>
          <option>Year</option>
        </Select>
      </Flex>
      <Box padding={10}>
        <Bar
          data={chartData}
          options={{ scales: { x: { stacked: true }, y: { stacked: true } } }}
        />
      </Box>
    </Card>
  );
};

export default SectionImpressions;
