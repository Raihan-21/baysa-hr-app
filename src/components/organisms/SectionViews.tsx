import React, { useState } from "react";

import { Box, Flex, Select, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

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
import OverviewCard from "@/components/organisms/OverviewCard";

const SectionViews = () => {
  const [data, setData] = useState({
    total: 783482,
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
        label: "Social",
        data: [200, 400, 600, 700, 500, 400, 600, 300, 400, 100, 200, 400],
        backgroundColor: ["#377DFF"],
      },
      {
        label: "Direct",
        data: [300, 500, 700, 800, 600, 500, 800, 400, 500, 300, 300, 500],
        backgroundColor: "#FFAB00",
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
          <Text fontWeight={"bold"} color={"lightgray"} fontSize={"small"}>
            VIEWS
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
        <Bar data={chartData} />
      </Box>
    </Card>
  );
};

export default SectionViews;
