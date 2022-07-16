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

function loadPost(path: string): Post {
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

export function getAllPosts(): Post[] {
  const files = fs.readdirSync('./posts')
  return files.map(loadPost)
}

export function getPostBySlug(slug: string): Post {
  return loadPost(slug + '.md')
}
