import Image from "next/image";
import { Inter } from "next/font/google";
import Heading from "@/components/molecules/Heading";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Button from "@/components/atoms/Button";
import Card from "@/organisms/Card";
import { useState } from "react";
import OverviewCard from "@/organisms/OverviewCard";

const inter = Inter({ subsets: ["latin"] });

const HeadingButtons = () => {
  return (
    <Flex>
      <Button text="Add job" />
    </Flex>
  );
};

export default function Home() {
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
    <main className={` min-h-screen   ${inter.className}`}>
      <Heading buttonSection={HeadingButtons} />
      <Box
        backgroundColor={"lightgray"}
        width={"100%"}
        paddingX={10}
        paddingY={10}
      >
        <Card>
          <Flex
            justifyContent={"space-between"}
            borderBottom={"1px solid lightgray"}
            padding={10}
          >
            <Text fontWeight={"bold"}>Overview</Text>
            <Tabs>
              <TabList>
                <Tab>Week</Tab>
                <Tab>Month</Tab>
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
      </Box>
    </main>
  );
}
