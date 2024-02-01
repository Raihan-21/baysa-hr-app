import { Box, Flex, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface JobType {
  image: string;
  position: string;
  company: string;
  location: string;
  expiredDay: string;
}

const JobAd = ({ data }: { data: JobType }) => {
  return (
    <Flex columnGap={4}>
      <Img src={data.image} width={12} height={12} borderRadius={10} />
      <VStack spacing={2} alignItems={"start"}>
        <Text fontWeight={"bold"} fontSize={"large"} color={"secondarygray"}>
          {data.position}
        </Text>
        <Flex color={"thirdgray"} columnGap={1}>
          <Text>{data.company}</Text>•<Text>{data.location}</Text>
        </Flex>
        <Text color={"thirdgray"}>{data.expiredDay} left</Text>
      </VStack>
    </Flex>
  );
};

export default JobAd;
