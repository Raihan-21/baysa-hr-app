import Heading from "@/components/molecules/Heading";
import Pills from "@/components/molecules/Pills";
import Searchbar from "@/components/organisms/Searchbar";
import {
  Box,
  Checkbox,
  Collapse,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { IoChevronUp } from "react-icons/io5";

const Jobs = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Heading
        title="Let's find you a new job"
        desc="It is enough to enter keywords or companies"
      />
      <Box padding={10}>
        <Searchbar />
      </Box>
      <Grid templateColumns={"repeat(3, 1fr)"} padding={10}>
        <GridItem colSpan={1}>
          <Flex
            justifyContent={"space-between"}
            onClick={onToggle}
            cursor={"pointer"}
          >
            <Text fontWeight={"bold"} color={"secondarygray"}>
              Type of employment
            </Text>
            <IoChevronUp />
          </Flex>
          <Collapse in={isOpen}>
            <VStack paddingX={2} paddingY={4} spacing={2}>
              <Flex justifyContent={"space-between"} width={"100%"}>
                <Flex columnGap={2} alignItems={"center"}>
                  <Checkbox value={"fulltime"}>Full Time Jobs</Checkbox>
                </Flex>
                <Pills
                  text="2000"
                  bgColor="secondaryblue"
                  textColor="primary"
                  boldText
                />
              </Flex>
              <Flex justifyContent={"space-between"} width={"100%"}>
                <Flex columnGap={2} alignItems={"center"}>
                  <Checkbox value={"parttime"}>Part Time Jobs</Checkbox>
                </Flex>
                <Pills
                  text="2000"
                  bgColor="secondaryblue"
                  textColor="primary"
                  boldText
                />
              </Flex>
              <Flex justifyContent={"space-between"} width={"100%"}>
                <Flex columnGap={2} alignItems={"center"}>
                  <Checkbox value={"remote"}>Remote Jobs</Checkbox>
                </Flex>
                <Pills
                  text="2000"
                  bgColor="secondaryblue"
                  textColor="primary"
                  boldText
                />
              </Flex>
              <Flex justifyContent={"space-between"} width={"100%"}>
                <Flex columnGap={2} alignItems={"center"}>
                  <Checkbox value={"internship"}>Internship Jobs</Checkbox>
                </Flex>
                <Pills
                  text="2000"
                  bgColor="secondaryblue"
                  textColor="primary"
                  boldText
                />
              </Flex>
              <Flex justifyContent={"space-between"} width={"100%"}>
                <Flex columnGap={2} alignItems={"center"}>
                  <Checkbox value={"contract"}>Contract</Checkbox>
                </Flex>
                <Pills
                  text="2000"
                  bgColor="secondaryblue"
                  textColor="primary"
                  boldText
                />
              </Flex>
            </VStack>
          </Collapse>
        </GridItem>
        <GridItem colSpan={2}></GridItem>
      </Grid>
    </Box>
  );
};

export default Jobs;
