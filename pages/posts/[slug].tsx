import {
  GetStaticPaths,
  GetStaticProps
} from 'next'
import { getPostBySlug, getAllPosts, Post } from 'lib/posts'
import Container from 'components/Container'
import Markdown from 'components/Markdown'

type PostProps = {
  post: Post
}

type PageParams = {
  slug: string
}

const Post = ({ post }: PostProps) => (
  <Container>
    <Markdown text={post.body} />
  </Container>
)

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const posts = getAllPosts()
  const paths = []
  for (const post of posts) {
    for (const locale of locales!) {
      paths.push({
        locale,
        params: {
          slug: post.slug,
        },
      })
    }
  }
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<
  PostProps,
  PageParams
> = async ({ params }) => {
  const post = getPostBySlug(params?.slug!)
  return {
    props: {
      post: post
    }
  }
}

export default Post



