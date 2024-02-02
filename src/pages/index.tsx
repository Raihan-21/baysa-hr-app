import Image from "next/image";
import { Inter } from "next/font/google";

import { Box, Flex, Grid, GridItem, VStack } from "@chakra-ui/react";

import { useState } from "react";

import Heading from "@/components/molecules/Heading";
import Button from "@/components/atoms/Button";
import SectionOverview from "@/components/organisms/SectionOverview";
import SectionViews from "@/components/organisms/SectionViews";
import SectionGoals from "@/components/organisms/SectionGoals";
import SectionStatistics from "@/components/organisms/SectionStatistics";
import SectionJobsAds from "@/components/organisms/SectionJobsAds";

import { FaPlus } from "react-icons/fa6";
import SectionImpressions from "@/components/organisms/SectionImpressions";
import SectionTargets from "@/components/organisms/SectionTargets";

const inter = Inter({ subsets: ["latin"] });

const HeadingButtons = () => {
  return (
    <Flex columnGap={5}>
      <Button bgColor="bg-bggray" textColor="text-secondarygray">
        See Recent Jobs Ads
      </Button>
      <Button bgColor="bg-primary">
        <Flex alignItems={"center"} columnGap={2}>
          <FaPlus />
          Add New Ad Jobs
        </Flex>
      </Button>
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
      <Heading
        title="Welcome, Artem"
        desc="Monday, 05 April 2021"
        buttonSection={<HeadingButtons />}
      />
      <Grid
        templateColumns={"repeat(3, 1fr)"}
        columnGap={5}
        backgroundColor={"bggray"}
        paddingX={20}
        paddingY={10}
      >
        <GridItem colSpan={2}>
          <VStack width={"100%"} spacing={5}>
            <SectionImpressions />
            <SectionOverview />
            <SectionViews />
            <SectionGoals />
          </VStack>
        </GridItem>
        <GridItem colSpan={1}>
          <VStack spacing={5}>
            <SectionTargets />
            <SectionStatistics />
            <SectionJobsAds />
          </VStack>
        </GridItem>
      </Grid>
    </main>
  );
}
