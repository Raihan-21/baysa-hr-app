import { Box } from "@chakra-ui/react";
import React, { ReactElement } from "react";

const Card = ({ children }: { children: ReactElement[] }) => {
  return (
    <Box
      backgroundColor={"white"}
      boxShadow={"0px 5px 15px 1px lightgray"}
      borderRadius={15}
      width={"100%"}
    >
      {children}
    </Box>
  );
};

export default Card;
