import React from "react";
import Link from "next/link";
import { Button, Flex, Heading, Spacer, Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const goback = () => {
    router.back();
  };
  return (
    <Flex p="20px" alignItems="center" bgColor="blue.700" color="white">
      <Link href="/">
        <Heading as="h2" size="md">
          Aniket Pandey
        </Heading>
      </Link>
      <Spacer />
      <Link href="/projects">
        <Heading as="h2" size="md">
          Projects
        </Heading>
      </Link>
      <Spacer />
      <Link href="/experience">
        <Heading as="h2" size="md">
          Experience
        </Heading>
      </Link>
      <Spacer />
      <Button colorScheme="blackAlpha" onClick={goback}>
        Go Back
      </Button>
      <Spacer />
      <Avatar
        size="md"
        name="Aniket Pandey"
        src="https://avatars.githubusercontent.com/u/107461782?v=4"
      />
    </Flex>
  );
};

export default Navbar;
