import { GetStaticPaths, GetStaticProps } from 'next'

import { getPostBySlug, getAllPosts, Post } from '@/lib/posts'
import { Header, Markdown } from '@/components'

interface PostProps {
  post: Post
}

const Post = ({ post }: PostProps) => (
  <div className="px-4 md:px-0 max-w-3xl mx-auto">
    <div className="py-4">
      <Header />
    </div>
    <div className="prose dark:prose-invert dark:prose-pre:bg-secondary dark:prose-blockquote:border-l-secondary">
      <Markdown text={post.body} />
    </div>
  </div>
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
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  PostProps,
  {
    slug: string
  }
> = (props) => {
  const post = getPostBySlug(props.params?.slug!)
  return {
    props: {
      post: post,
    },
  }
}

export default Post
