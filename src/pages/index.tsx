import Image from "next/image";
import { Inter } from "next/font/google";
import Heading from "@/components/molecules/Heading";
import { Box, Flex } from "@chakra-ui/react";
import Button from "@/components/atoms/Button";
import { useState } from "react";
import SectionOverview from "@/organisms/SectionOverview";
import SectionViews from "@/organisms/SectionViews";
import SectionGoals from "@/organisms/SectionGoals";

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
        <SectionOverview />
        <SectionViews />
        <SectionGoals />
      </Box>
    </main>
  );
}
