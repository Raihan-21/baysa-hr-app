import Heading from "@/components/molecules/Heading";
import Searchbar from "@/components/organisms/Searchbar";
import { Box } from "@chakra-ui/react";
import React from "react";

const Jobs = () => {
  return (
    <Box>
      <Heading
        title="Let's find you a new job"
        desc="It is enough to enter keywords or companies"
      />
      <Box padding={10}>
        <Searchbar />
      </Box>
    </Box>
  );
};

export default Jobs;
