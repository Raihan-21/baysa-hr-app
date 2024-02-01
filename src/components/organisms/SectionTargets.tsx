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
import Button from "../atoms/Button";

const SectionTargets = () => {
  const [chartData, setChartData] = useState({
    labels: ["Not Achieved", "Achieved"],
    datasets: [
      {
        label: "",
        data: [75, 25],
        backgroundColor: ["#F3F4F6", "#377DFF"],
      },
    ],
  });
  return (
    <Card>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        paddingX={7}
        paddingY={5}
      >
        <Text fontWeight={"bold"} textAlign={"center"}>
          Targets Percent
        </Text>
      </Flex>
      <Box padding={10}>
        <Doughnut data={chartData} options={{ cutout: 90 }} />
        <Text
          textAlign={"center"}
          color={"thirdgray"}
          fontWeight={"bold"}
          marginTop={5}
          marginBottom={7}
        >
          You definitely need to make an effort to reach your goal
        </Text>
        <Flex justifyContent={"center"}>
          <Button bgColor="bg-lightgray" textColor="text-thirdgray">
            Learn More
          </Button>
        </Flex>
      </Box>
    </Card>
  );
};

export default SectionTargets;
