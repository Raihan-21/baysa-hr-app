import { Box, Flex, Grid, GridItem, Input, Select } from "@chakra-ui/react";
import React from "react";
import Button from "../atoms/Button";

const Searchbar = () => {
  return (
    <Grid
      padding={4}
      templateColumns={"repeat(3, 1fr)"}
      borderRadius={15}
      boxShadow={"0px 5px 10px 1px lightgray"}
    >
      <GridItem colSpan={2}>
        <Input border={"none"} placeholder="Job title, Company or Keywords" />
      </GridItem>
      <GridItem>
        <Flex columnGap={2}>
          <Select placeholder="Select Location">
            <option value="">United State</option>
          </Select>
          <Button>Search</Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Searchbar;
