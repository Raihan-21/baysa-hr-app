import React, { useState } from "react";

import { Box, Flex, Tab, TabList, Tabs, Text } from "@chakra-ui/react";

import Card from "@/organisms/Card";
import OverviewCard from "@/organisms/OverviewCard";

const SectionOverview = () => {
  const [overviewData, setOverviewData] = useState([
    {
      amount: 200000,
      growthRate: 10,
      growth: "increase",
      desc: "Views Our Ads",
    },
    {
      amount: 200000,
      growthRate: 10,
      growth: "same",
      desc: "Views Our Ads",
    },
    {
      amount: 200000,
      growthRate: 10,
      growth: "increase",
      desc: "Views Our Ads",
    },
    {
      amount: 200000,
      growthRate: 10,
      growth: "decrease",
      desc: "Views Our Ads",
    },
  ]);
  return (
    <Card>
      <Flex
        justifyContent={"space-between"}
        borderBottom={"1px solid lightgray"}
        paddingX={10}
        paddingTop={5}
      >
        <Text fontWeight={"bold"}>Overview</Text>
        <Tabs>
          <TabList>
            <Tab>Week</Tab>
            <Tab>Month</Tab>
            <Tab>Quarter</Tab>
            <Tab>Year</Tab>
          </TabList>
        </Tabs>
      </Flex>
      <Flex padding={10} columnGap={10} flexWrap={"wrap"}>
        {overviewData.length &&
          overviewData.map((data) => (
            <OverviewCard
              growth={data.growth}
              amount={data.amount}
              growthRate={data.growthRate}
              desc={data.desc}
            />
          ))}
      </Flex>
    </Card>
  );
};

export default SectionOverview;
