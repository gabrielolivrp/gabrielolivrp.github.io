import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getAllPosts, Post } from 'lib/posts'
import Badge from 'components/Badge'
import Container from 'components/Container'

type PostPreviewProps = {
  post: Post
}

const PostPreview = ({ post }: PostPreviewProps) => (
  <div className="py-6 space-y-4">
    <Link href={`/posts/${post.slug}`}>
      <a className="cursor-pointer text-4xl font-bold underline underline-offset-8">
        {post.title}
      </a>
    </Link>
    <p className="text-lg font-normal">{post.description}</p>
    <div>
      {post.tags.map((tag, key) => (
        <Badge key={key}>{tag}</Badge>
      ))}
    </div>
  </div>
)

type PostsProps = {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => (
  <Container>
    <div className="space-y-10 divide-y">
      {posts.map((post, key) =>
        <PostPreview key={key} post={post} />
      )}
    </div>
  </Container>
)

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const posts = getAllPosts()
  return {
    props: {
      posts: posts
    }
  }
}

export default Posts
