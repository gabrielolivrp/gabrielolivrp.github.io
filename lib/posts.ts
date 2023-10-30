import fs from 'fs'
import matter from 'gray-matter'

export type Post = {
  slug: string
  title: string
  body: string
  date: string
  description: string
  tags: string[]
}

function readPost(path: string): Post {
  const content = fs.readFileSync(`./posts/${path}`, 'utf-8')
  const { data: info, content: body } = matter(content)
  const slug = path.replace('.md', '')

  return {
    slug,
    title: info.title,
    description: info.description,
    date: info.date,
    tags: info.tags,
    body,
  }
}

export const getAllPosts = (): Array<Post> => fs.readdirSync('./posts').map(readPost)

export const getPostBySlug = (slug: string): Post => readPost(`${slug}.md`)
