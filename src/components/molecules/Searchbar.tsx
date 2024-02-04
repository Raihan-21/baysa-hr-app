import { Box, Flex, Grid, GridItem, Input, Select } from "@chakra-ui/react";
import React, { useCallback, useState } from "react";

import Button from "../atoms/Button";

const Searchbar = ({
  inputValue,
  setParentInput,
  locationValue,
  setParentLocation,
  onSearch,
}: {
  inputValue: string;
  setParentInput: (input: string) => void;
  locationValue: string;
  setParentLocation: (input: string) => void;
  onSearch: () => void;
}) => {
  const [input, setInput] = useState("");

  const [searchOptions, setSearchOptions] = useState([
    { text: "United States", value: "usa" },
    { text: "Russia", value: "russia" },
    { text: "Ukraine", value: "ukraine" },
    { text: "United Kingdom", value: "united kingdom" },
    { text: "France", value: "france" },
  ]);
  const [locationFilter, setLocationFilter] = useState("");

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      onSearch();
    },
    [inputValue, locationValue]
  );
  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Grid
          padding={4}
          templateColumns={"repeat(3, 1fr)"}
          columnGap={5}
          borderRadius={15}
          boxShadow={"0px 5px 10px 1px lightgray"}
        >
          <GridItem colSpan={2}>
            <Input
              border={"none"}
              placeholder="Job title, Company or Keywords"
              value={inputValue}
              role="input"
              onChange={(e) => setParentInput(e.target.value)}
            />
          </GridItem>
          <GridItem>
            <Flex columnGap={5}>
              <Select
                placeholder="Select Location"
                value={locationValue}
                onChange={(e) => {
                  setParentLocation(e.target.value);
                }}
                role="select"
              >
                {searchOptions.length &&
                  searchOptions.map((option, i) => (
                    <option
                      value={option.value}
                      key={i}
                      role="option"
                      aria-label={option.value}
                    >
                      {option.text}
                    </option>
                  ))}
              </Select>
              <Button type="submit">Search</Button>
            </Flex>
          </GridItem>
        </Grid>
      </form>
    </Box>
  );
};

export default Searchbar;
