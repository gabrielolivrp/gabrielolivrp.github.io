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

function mapPost(path: string): Post {
  const content = fs.readFileSync(`./posts/${path}`, 'utf-8')
  const { data: info, content: body } = matter(content)

  return {
    slug: path.replace('.md', ''),
    title: info.title,
    description: info.description,
    date: info.date,
    tags: info.tags,
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
