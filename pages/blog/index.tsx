import { Flex } from '@chakra-ui/react';
import { PageTitle } from '@components/elements';
import type { NextPage } from 'next';

const Blog: NextPage = () => {
  return (
    <Flex paddingY={"4rem"} direction={{ base: "column-reverse", md: "row" }} gap={"2rem"}>
      <PageTitle>Blog</PageTitle>
      
    </Flex>
  )
}

export default Blog;
