import React from "react";
import { Box, Text, Flex, Heading } from "@chakra-ui/react";

const Experience = () => {
  return (
    <Flex
      direction="column"
      gap="20px"
      bgColor="black"
      color="white"
      textAlign="center"
    >
      <Box>
        <Heading as="h4" size="sm">
          BDA at {"BYJU'S"}
        </Heading>
        <Text>December 2020 - September 2021</Text>
      </Box>
      <Box>
        <Heading as="h4" size="sm">
          Student at MASAI SCHOOL
        </Heading>
        <Text>May 2022 - Present</Text>
      </Box>
    </Flex>
  );
};

export default Experience;
