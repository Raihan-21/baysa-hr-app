import React, { useState } from "react";

import { Box, Flex, Select, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

import Card from "@/components/organisms/Card";

const SectionGoals = () => {
  const [data, setData] = useState({
    total: 783482,
  });
  const [chartData, setChartData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "",
        data: [200, 400, 600, 700, 500, 400, 600, 300, 400, 100, 200, 400],
        backgroundColor: ["#377DFF"],
      },
    ],
  });
  return (
    <Card>
      <Flex
        justifyContent={"space-between"}
        borderBottom={"1px solid lightgray"}
        paddingX={10}
        paddingY={5}
      >
        <Box>
          <Text fontWeight={"bold"} fontSize={"large"} color={"secondarygray"}>
            Financial Goals
          </Text>
          <Text fontSize={"small"} color={"lightgray"}>
            Set your financial goals
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
        <Line data={chartData} />
      </Box>
    </Card>
  );
};

export default SectionGoals;
