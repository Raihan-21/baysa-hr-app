import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

const Heading = ({ buttonSection }: { buttonSection?: JSX.Element }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      <Box>
        <Text fontWeight={"bold"} fontSize={"x-large"}>
          Welcome, Artem
        </Text>
        <Text fontSize={"small"}>Monday, 5 April 2021</Text>
      </Box>
      {buttonSection}
    </Flex>
  );
};

export default Heading;
