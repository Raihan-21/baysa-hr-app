import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

/**
 *
 * Icons
 *
 */
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { GoDash } from "react-icons/go";

const OverviewCard = ({
  growth,
  amount,
  growthRate,
  desc,
}: {
  growth: string;
  amount: number;
  growthRate: number;
  desc: string;
}) => {
  return (
    <Box
      borderRadius={5}
      backgroundColor={
        growth === "increase"
          ? "lightgreen"
          : growth === "decrease"
          ? "lightred"
          : "lightorange"
      }
      padding={6}
      flex={"1"}
    >
      <Flex
        borderRadius={"50%"}
        backgroundColor={
          growth === "increase"
            ? "darkgreen"
            : growth === "decrease"
            ? "darkred"
            : "darkorange"
        }
        width={12}
        height={12}
        justifyContent={"center"}
        alignItems={"center"}
        marginBottom={3}
      >
        {growth === "increase" && <FaArrowUp color="#38CB89" />}
        {growth === "same" && <GoDash color="#FFBD38" />}
        {growth === "decrease" && <FaArrowDown color="#FF5630" />}
      </Flex>
      <Flex columnGap={3}>
        <Text fontWeight={"bold"} fontSize={"x-large"} color={"secondarygray"}>
          {amount}k
        </Text>
        {growth === "increase" && (
          <Flex alignItems={"center"}>
            <Text color={"maingreen"} fontWeight={"bold"}>
              +{growthRate}%
            </Text>{" "}
            <FaArrowUp color="#38CB89" />
          </Flex>
        )}
        {growth === "decrease" && (
          <Flex alignItems={"center"}>
            <Text color={"mainred"} fontWeight={"bold"}>
              -{growthRate}%
            </Text>{" "}
            <FaArrowDown color="#FF5630" />
          </Flex>
        )}
      </Flex>
      <Text color={"thirdgray"} fontSize={"small"} fontWeight={"bold"}>
        {desc}
      </Text>
    </Box>
  );
};

export default OverviewCard;
