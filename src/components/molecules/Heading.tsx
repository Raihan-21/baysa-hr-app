import { Box, Flex, Text } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

const Heading = ({
  title,
  desc,
  buttonSection,
}: {
  title: string;
  desc: string;
  buttonSection?: JSX.Element;
}) => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={20}
      paddingY={5}
      data-testid="heading"
    >
      <Box>
        <Text
          fontWeight={"bold"}
          fontSize={"xx-large"}
          data-testid="heading-title"
        >
          {title}
        </Text>
        <Text fontSize={"small"} color={"thirdgray"} data-testid="heading-desc">
          {desc}
        </Text>
      </Box>
      {buttonSection}
    </Flex>
  );
};

export default Heading;
