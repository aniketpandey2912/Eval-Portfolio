import React from "react";
import Link from "next/link";
import {
  Text,
  Flex,
  Avatar,
  Heading,
  VStack,
  Grid,
  Badge,
  Button,
  Box,
} from "@chakra-ui/react";
import Experience from "../experience";

const Profile = () => {
  return (
    <Flex direction="column" color="white" gap="20px">
      <VStack textAlign="center">
        <Box>
          <Avatar
            size="2xl"
            name="Aniket Pandey"
            src="https://avatars.githubusercontent.com/u/107461782?v=4"
          />
          <Heading as="h2" size="md">
            Aniket Pandey
          </Heading>
          <Heading as="h4" size="xs" color="grey">
            @aniketpandey2912
          </Heading>
          <Text textAlign="center">
            Full-stack Developer | FOSS | JavaScript | Typescript | NodeJS |
            Deno | ReactJS | HTML | CSS | Chakra-UI | MUI
          </Text>
          <Flex justifyContent="center" gap="5%">
            <Link
              href="https://drive.google.com/file/d/1mwZuiSiBNOQMzjeG6EO8Zkr3L2eLt3Rw/view"
              target="_blank"
            >
              <Button colorScheme="green">Resume</Button>
            </Link>
            <Link href="https://github.com/aniketpandey2912" target="_blank">
              <Button colorScheme="red">Follow</Button>
            </Link>
          </Flex>
        </Box>

        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={1}
          textAlign="center"
          bgColor="gray.700"
          p="10px"
          borderRadius="20px"
        >
          <Badge colorScheme="green">HTML</Badge>
          <Badge colorScheme="green">CSS</Badge>
          <Badge colorScheme="green">JAVASCRIPT</Badge>
          <Badge colorScheme="green">REACT.JS</Badge>
          <Badge colorScheme="green">CHAKRA-UI</Badge>
          <Badge colorScheme="green">REDUX</Badge>
          <Badge colorScheme="green">TYPESCRIPT</Badge>
          <Badge colorScheme="green">NEXT.JS</Badge>
          <Badge colorScheme="green">STORYBOOK</Badge>
          <Badge colorScheme="green">GIT</Badge>
        </Grid>
        <Box bgColor="gray.700" p="10px" borderRadius="20px">
          <Experience />
        </Box>
      </VStack>
    </Flex>
  );
};

export default Profile;
