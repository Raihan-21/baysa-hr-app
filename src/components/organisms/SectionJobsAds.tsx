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
import Pills from "@/components/molecules/Pills";
import JobAd from "./JobAd";

const SectionJobsAds = () => {
  const [jobsData, setJobsData] = useState([
    {
      image: "/apple-logo.png",
      position: "iOS Developer Mobile",
      company: "Apple Inc",
      location: "California, USA",
      expiredDay: "25 Days",
    },
    {
      image: "/dribbble-logo.png",
      position: "HR Manager",
      company: "Dribbble",
      location: "San Fransisco, USA",
      expiredDay: "20 Days",
    },
  ]);
  return (
    <Card data-testid="section">
      <Flex
        justifyContent={"space-between"}
        borderBottom={"1px solid lightgray"}
        paddingX={7}
        paddingY={5}
      >
        <Box>
          <Text fontWeight={"bold"} color={"thirdgray"} fontSize={"smaller"}>
            RECENT JOB ADS
          </Text>
          <Text fontWeight={"bold"} color={"thirdgray"} fontSize={"large"}>
            <span className="!text-secondarygray text-[24px]">2</span> 2
          </Text>
        </Box>
        <Pills
          text="2 Jobs ads left"
          textColor="thirdgray"
          bgColor="bggray"
          boldText
        />
      </Flex>
      <div className="p-10 space-y-5">
        {jobsData.length &&
          jobsData.map((job, i) => <JobAd data={job} key={i} />)}
      </div>
    </Card>
  );
};

export default SectionJobsAds;
