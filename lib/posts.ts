import fs from 'fs'
import matter from 'gray-matter'

export type Post = {
  slug: string
  title: string
  body: string
  description: string
  tags: string[]
}

function mapPost(path: string): Post {
  const content = fs.readFileSync(`./posts/${path}`, 'utf-8')
  const { data, content: body } = matter(content)

  return {
    slug: path.replace('.md', ''),
    title: data.title,
    description: data.description,
    tags: data.tags,
    body
  }
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync('./posts')
  return files.map(mapPost)
}

export function getPostBySlug(slug: string): Post {
  return mapPost(slug + '.md')
}
