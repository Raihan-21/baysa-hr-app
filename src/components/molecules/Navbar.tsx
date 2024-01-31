import { Box, Flex, Img } from "@chakra-ui/react";
import React from "react";

// Icons
import { IoMdNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="p-4">
      <Flex columnGap={5} justifyContent={"space-between"}>
        <Box>Boxboard</Box>
        <Flex columnGap={20}>
          <Box>Overview</Box>
          <Box>Job Search</Box>
          <Box>Schedule</Box>
          <Box>History</Box>
          <Box>Events</Box>
        </Flex>
        <Flex alignItems="center" columnGap={10}>
          <IoMdNotifications />
          <Img src="/profile.jpg" width={20} height={20} borderRadius={"50%"} />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
