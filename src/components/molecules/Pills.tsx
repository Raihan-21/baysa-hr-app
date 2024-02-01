import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Pills = ({
  text,
  textColor,
  bgColor,
  boldText,
}: {
  text: string;
  textColor: string;
  bgColor: string;
  boldText?: boolean;
}) => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      paddingY={2}
      paddingX={2}
      color={textColor}
      backgroundColor={bgColor}
      borderRadius={50}
      fontSize={"small"}
      height={"fit-content"}
    >
      <Text fontWeight={boldText ? "bold" : "normal"}>{text}</Text>
    </Flex>
  );
};

export default Pills;
