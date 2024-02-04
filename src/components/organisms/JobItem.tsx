import { Box, Flex, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";

/**
 *
 * Icons
 *
 */

import { BsThreeDots } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

/**
 *
 * Components
 *
 */

import Pills from "../molecules/Pills";
import Button from "../atoms/Button";

interface JobType {
  image: string;
  position: string;
  company: string;
  location: string;
  type: {
    text: string;
    value: string;
  };
  created_at: string;
}

const JobItem = ({ data }: { data: JobType }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  return (
    <Flex
      alignItems={"center"}
      columnGap={5}
      padding={5}
      backgroundColor={isFavorite ? "secondaryblue" : "white"}
      borderRadius={15}
    >
      <FaStar
        color={isFavorite ? "#FFAB00" : "#BBC3CC"}
        size={25}
        cursor={"pointer"}
        onClick={() => setIsFavorite(!isFavorite)}
      />
      <Grid templateColumns={"repeat(6, 1fr)"} alignItems={"center"} flex={1}>
        <GridItem colSpan={4}>
          <Flex columnGap={5} alignItems={"center"}>
            <Img src={data.image} width={10} height={10} borderRadius={12} />
            <Box>
              <Text
                fontWeight={"bold"}
                fontSize={"large"}
                color={"secondarygray"}
              >
                {data.position}
              </Text>
              <Flex color={"thirdgray"} columnGap={1}>
                <Text>{data.company}</Text>•<Text>{data.location}</Text>•
                <Text>{data.created_at}</Text>
              </Flex>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Pills
            text={data.type.text}
            bgColor="secondaryblue"
            textColor="primary"
            boldText
          />
        </GridItem>
        <GridItem colSpan={1}>
          <Flex alignItems={"center"} justifyContent={"end"} columnGap={5}>
            <Button>Apply Job</Button>
          </Flex>
        </GridItem>
      </Grid>
      <BsThreeDots size={30} color="#BBC3CC" cursor={"pointer"} />
    </Flex>
  );
};

export default JobItem;
