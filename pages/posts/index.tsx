import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getAllPosts, Post } from '@/lib/posts'

import { Badge, Icon } from '@/components/ui'
import { Header } from '@/components'

interface PostProps extends Post {}

const Post = ({ title, description, tags, slug }: PostProps) => (
  <div className="flexlg:h-64 p-8 bg-secondary border rounded-2xl">
    <h1 className="group text-lg font-bold cursor-pointer">
      <Link href={`/posts/${slug}`}>
        {title}
        <Icon
          name="Link"
          size="1rem"
          className="invisible group-hover:visible inline-block ml-2"
        />
      </Link>
    </h1>
    <div className="mt-2 space-x-2">
      {tags.map((tag, key) => (
        <Badge key={key}>{tag}</Badge>
      ))}
    </div>
    <p className="mt-4">{description}</p>
  </div>
)

type PostsProps = {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => (
  <div className="px-4 md:px-0 max-w-3xl mx-auto">
    <div className="py-4">
      <Header />
    </div>
    <div className="space-y-8">
      {posts.map((post, key) => (
        <Post {...post} key={key} />
      ))}
    </div>
  </div>
)

export const getStaticProps: GetStaticProps<PostsProps> = () => {
  const posts = getAllPosts()
  return {
    props: {
      posts,
    },
  }
}

export default Posts
