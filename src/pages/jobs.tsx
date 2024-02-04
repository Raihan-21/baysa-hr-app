import {
  Box,
  Checkbox,
  CheckboxGroup,
  Collapse,
  Flex,
  Grid,
  GridItem,
  Select,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";

import { motion } from "framer-motion";

/**
 *
 * Icons
 *
 */
import { IoChevronDown } from "react-icons/io5";

/**
 *
 * Components
 *
 */
import Heading from "@/components/molecules/Heading";
import Pills from "@/components/molecules/Pills";
import Card from "@/components/organisms/Card";
import JobItem from "@/components/organisms/JobItem";
import Searchbar from "@/components/molecules/Searchbar";

const Jobs = () => {
  const { isOpen: jobTypeOpen, onToggle: toggleJobType } = useDisclosure();
  const { isOpen: seniorityOpen, onToggle: toggleSeniority } = useDisclosure();
  const { isOpen: languageOpen, onToggle: toggleLanguage } = useDisclosure();
  const { isOpen: salaryOpen, onToggle: toggleSalary } = useDisclosure();
  const { isOpen: locationOpen, onToggle: toggleLocation } = useDisclosure();

  const [checkedjobType, setCheckedJobType] = useState<string[]>([]);

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
    {
      image: "/dribbble-logo.png",
      position: "Frontend Developer",
      company: "Dribbble",
      location: "Moscow, Russia",
      type: {
        value: "parttime",
        text: "Part-Time",
      },
      created_at: "5 Days ago",
    },
  ]);
  const [jobFiltered, setJobFiltered] = useState(jobList);

  const [searchInput, setSearchInput] = useState("");

  const [locationInput, setLocationInput] = useState("");

  const [locationOptions, setLocationOptions] = useState([
    { text: "United States", value: "usa" },
    { text: "Russia", value: "russia" },
    { text: "Ukraine", value: "ukraine" },
    { text: "United Kingdom", value: "united kingdom" },
    { text: "France", value: "france" },
  ]);

  const checkJobType = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (checkedjobType.find((jobType) => jobType === e.target.value)) {
        setCheckedJobType(
          checkedjobType.filter((jobType) => {
            return jobType !== e.target.value;
          })
        );
      }
      setCheckedJobType([...checkedjobType, e.target.value]);
    },
    [checkedjobType]
  );
  const checkEmptyJobType = useCallback(() => {
    if (!checkedjobType.length) setCheckedJobType([...checkedjobType, ""]);
  }, [checkedjobType]);

  const search = useCallback(() => {
    setJobFiltered(
      jobList.filter((job) => {
        return (
          (job.position.toLowerCase().match(searchInput.toLowerCase()) ||
            job.company.toLowerCase().match(searchInput.toLowerCase())) &&
          job.location.toLowerCase().match(locationInput.toLowerCase())
        );
      })
    );
  }, [checkedjobType, jobList, searchInput, locationInput]);
  useEffect(() => {
    if (!checkedjobType.length) setCheckedJobType([...checkedjobType, ""]);
    search();
  }, [checkedjobType]);

  return (
    <Box>
      <Heading
        title="Let's find you a new job"
        desc="It is enough to enter keywords or companies"
      />
      <Box paddingX={20} paddingY={10}>
        <Searchbar
          onSearch={search}
          inputValue={searchInput}
          setParentInput={setSearchInput}
          locationValue={locationInput}
          setParentLocation={setLocationInput}
        />
      </Box>
      <Grid
        templateColumns={"repeat(5, 1fr)"}
        paddingX={20}
        paddingY={10}
        columnGap={5}
        backgroundColor={"bggray"}
      >
        <GridItem colSpan={1} data-testid="filter-container">
          <VStack spacing={5} alignItems={"start"}>
            <Box width={"100%"}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                onClick={toggleJobType}
                cursor={"pointer"}
              >
                <Text fontWeight={"bold"} color={"secondarygray"}>
                  Type of employment
                </Text>
                <motion.div animate={{ rotate: jobTypeOpen ? 180 : 0 }}>
                  <IoChevronDown />
                </motion.div>
              </Flex>
              <Collapse in={jobTypeOpen}>
                <VStack paddingX={2} paddingY={4} spacing={2}>
                  <Flex justifyContent={"space-between"} width={"100%"}>
                    <Flex columnGap={2} alignItems={"center"}>
                      <Checkbox
                        value={"fulltime"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Full Time Jobs
                      </Checkbox>
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
                      <Checkbox
                        value={"parttime"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Part Time Jobs
                      </Checkbox>
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
                      <Checkbox
                        value={"remote"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Remote Jobs
                      </Checkbox>
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
                      <Checkbox
                        value={"internship"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Internship Jobs
                      </Checkbox>
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
                      <Checkbox
                        value={"contract"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Contract
                      </Checkbox>
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
            </Box>
            <Box width={"100%"}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                onClick={toggleSeniority}
                cursor={"pointer"}
              >
                <Text fontWeight={"bold"} color={"secondarygray"}>
                  Seniority Level
                </Text>
                <motion.div animate={{ rotate: seniorityOpen ? 180 : 0 }}>
                  <IoChevronDown />
                </motion.div>
              </Flex>
              <Collapse in={seniorityOpen}>
                <VStack paddingX={2} paddingY={4} spacing={2}></VStack>
              </Collapse>
            </Box>
            <Box width={"100%"}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                onClick={toggleLanguage}
                cursor={"pointer"}
              >
                <Text fontWeight={"bold"} color={"secondarygray"}>
                  Language
                </Text>
                <motion.div animate={{ rotate: languageOpen ? 180 : 0 }}>
                  <IoChevronDown />
                </motion.div>
              </Flex>
              <Collapse in={languageOpen}>
                <VStack paddingX={2} paddingY={4} spacing={2}></VStack>
              </Collapse>
            </Box>
            <Box width={"100%"}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                onClick={toggleSalary}
                cursor={"pointer"}
              >
                <Text fontWeight={"bold"} color={"secondarygray"}>
                  Salary Range
                </Text>
                <motion.div animate={{ rotate: salaryOpen ? 180 : 0 }}>
                  <IoChevronDown />
                </motion.div>
              </Flex>
              <Collapse in={salaryOpen}>
                <VStack paddingX={2} paddingY={4} spacing={2}></VStack>
              </Collapse>
            </Box>
            <Box width={"100%"}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                onClick={toggleLocation}
                cursor={"pointer"}
              >
                <Text fontWeight={"bold"} color={"secondarygray"}>
                  Location
                </Text>
                <motion.div animate={{ rotate: locationOpen ? 180 : 0 }}>
                  <IoChevronDown />
                </motion.div>
              </Flex>
              <Collapse in={locationOpen}>
                <VStack paddingX={2} paddingY={4} spacing={2}>
                  {locationOptions.length &&
                    locationOptions.map((opt) => (
                      <Flex justifyContent={"space-between"} width={"100%"}>
                        <Flex columnGap={2} alignItems={"center"}>
                          <Checkbox
                            value={opt.value}
                            onChange={(e) => {
                              checkJobType(e);
                            }}
                          >
                            {opt.text}
                          </Checkbox>
                        </Flex>
                      </Flex>
                    ))}
                  {/* <Flex justifyContent={"space-between"} width={"100%"}>
                    <Flex columnGap={2} alignItems={"center"}>
                      <Checkbox
                        value={"parttime"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Part Time Jobs
                      </Checkbox>
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
                      <Checkbox
                        value={"remote"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Remote Jobs
                      </Checkbox>
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
                      <Checkbox
                        value={"internship"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Internship Jobs
                      </Checkbox>
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
                      <Checkbox
                        value={"contract"}
                        onChange={(e) => {
                          checkJobType(e);
                        }}
                      >
                        Contract
                      </Checkbox>
                    </Flex>
                    <Pills
                      text="2000"
                      bgColor="secondaryblue"
                      textColor="primary"
                      boldText
                    />
                  </Flex> */}
                </VStack>
              </Collapse>
            </Box>
          </VStack>
        </GridItem>
        <GridItem colSpan={4}>
          <Flex justifyContent={"space-between"} marginBottom={5}>
            <Text fontWeight={"bold"}>
              <span className="text-thirdgray mr-1"> Showing:</span>
              <span className=" text-secondarygray">
                {jobFiltered.length} Filtered Jobs
              </span>
            </Text>
            <Select width={"fit-content"}>
              <option>Relevance</option>
            </Select>
          </Flex>
          <Card>
            <Box padding={5}>
              {jobFiltered.length ? (
                jobFiltered.map((job, i) => <JobItem data={job} key={i} />)
              ) : (
                <Text fontWeight={"bold"} color={"secondarygray"}>
                  No job found
                </Text>
              )}
            </Box>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Jobs;
