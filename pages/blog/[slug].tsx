import { Box, chakra, Text } from "@chakra-ui/react";
import { PageTitle, Section, SectionTitle } from "@components/elements";
import { Post } from "models/Post";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const PostWrapper = chakra(Section, {
  baseStyle: {
    flexDirection: "column !important",
    gap: "1rem"
  }
})

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Box>
      <PostWrapper>
        <SectionTitle>{ post.title.rendered }</SectionTitle>
        <Text fontSize={"1.5rem"} align={"justify"} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </PostWrapper>
    </Box>
  )
}

export const getStaticProps: GetStaticProps<{ post: Post }, { slug: string }> = async (context) => {
  const { params } = context

  let res = await fetch("https://projetosebastianas.com.br/wp-json/wp/v2/posts/")
  const posts: Post[] = await res.json()
  const postWithSlug = posts.find(post => post.slug == params?.slug)
  if (!postWithSlug)
    return {
      notFound: true
    }

  res = await fetch("https://projetosebastianas.com.br/wp-json/wp/v2/posts/" + postWithSlug.id)
  const post: Post = await res.json() 

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://projetosebastianas.com.br/wp-json/wp/v2/posts/")
  const posts: Post[] = await res.json()

  return {
    paths: posts.map(post => ({
      params: { slug: post.slug }
    })),
    fallback: "blocking"
  }
}

export default PostPage;