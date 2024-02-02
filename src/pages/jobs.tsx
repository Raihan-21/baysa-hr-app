import Heading from "@/components/molecules/Heading";
import Pills from "@/components/molecules/Pills";
import Card from "@/components/organisms/Card";
import JobItem from "@/components/organisms/JobItem";
import Searchbar from "@/components/organisms/Searchbar";
import {
  Box,
  Checkbox,
  Collapse,
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { IoChevronUp } from "react-icons/io5";

const Jobs = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [jobList, setJobList] = useState([
    {
      image: "/apple-logo.png",
      position: "Backend Software Developer",
      company: "Apple Inc.",
      location: "California, USA",
      type: {
        value: "fulltime",
        text: "Full-time",
      },
      created_at: "10 Days ago",
    },
    {
      image: "/dribbble-logo.png",
      position: "Director of Visual Design",
      company: "Dribbble",
      location: "Moscow, Russia",
      type: {
        value: "parttime",
        text: "Part-Time",
      },
      created_at: "5 Days ago",
    },
  ]);
  return (
    <Box>
      <Heading
        title="Let's find you a new job"
        desc="It is enough to enter keywords or companies"
      />
      <Box paddingX={20} paddingY={10}>
        <Searchbar />
      </Box>
      <Grid
        templateColumns={"repeat(5, 1fr)"}
        paddingX={20}
        paddingY={10}
        columnGap={5}
        backgroundColor={"bggray"}
      >
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
        <GridItem colSpan={4}>
          <Flex justifyContent={"space-between"}>
            <Text>Showing: 520 Filtered Jobs</Text>
            <Select width={"fit-content"}>
              <option>Relevance</option>
            </Select>
          </Flex>
          <Card>
            <Box padding={5}>
              {jobList.length && jobList.map((job) => <JobItem data={job} />)}
            </Box>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Jobs;
