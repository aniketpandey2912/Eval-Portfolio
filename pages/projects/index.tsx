import React from "react";
import Link from "next/link";
import { Text, Heading, Grid, GridItem, Box } from "@chakra-ui/react";
import axios from "axios";

const Projects = (props: any) => {
  const { data } = props;
  console.log(props);
  const { items } = data;
  return (
    <Box color="white" py="20px" px="5%" bgColor="black">
      <Heading as="h2" size="lg" textAlign="center">
        Projects
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {items?.map((item: any) => (
          <GridItem key={item.id} w="100%" bg="gray.700" p="10px">
            <Link href={item.html_url} target="_blank">
              <Heading as="h2" size="md">
                {item.full_name}
              </Heading>
            </Link>
            <Text>{item.description}</Text>
            <Text>Stars : {item.stargazers_count}</Text>
            <Text>Forks : {item.forks_count}</Text>
            <Text>Language : {item.language}</Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export async function getStaticProps() {
  let res = await axios.get(
    `https://api.github.com/search/repositories?q=user:aniketpandey2912+fork:true&sort=updated&per_page=10&type=Repositories`
  );

  console.log(res);

  return { props: { data: res.data } };
}

export default Projects;
