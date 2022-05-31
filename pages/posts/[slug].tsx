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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
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



