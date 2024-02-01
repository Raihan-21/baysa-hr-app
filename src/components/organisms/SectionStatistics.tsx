import React, { useState } from "react";

import { Box, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
);

import Card from "@/components/organisms/Card";
import Pills from "../molecules/Pills";

const SectionStatistics = () => {
  const [chartData, setChartData] = useState({
    labels: ["Search", "Job Booster", "Job Alert", "Company Booster"],
    datasets: [
      {
        label: "",
        data: [484500, 550000, 419000, 484500],
        backgroundColor: ["#377DFF", "#38CB89", "#FFAB00", "#FFC143"],
      },
    ],
  });
  return (
    <Card>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        borderBottom={"1px solid lightgray"}
        paddingX={7}
        paddingY={5}
      >
        <Text fontWeight={"bold"}>Statistics</Text>
        <Pills text="Total" bgColor="bggray" textColor="thirdgray" boldText />
      </Flex>
      <Flex padding={10} columnGap={10} flexWrap={"wrap"}>
        <Doughnut data={chartData} options={{ cutout: 90 }} />
      </Flex>
    </Card>
  );
};

export default SectionStatistics;
