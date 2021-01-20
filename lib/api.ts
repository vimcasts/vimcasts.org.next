import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType, { GeneralPost } from '../types/post'

const postsDirectory = join(process.cwd(), '_posts')
const episodesDirectory = join(process.cwd(), '_episodes')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getEpisodeSlugs() {
  return fs.readdirSync(episodesDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []): PostType {
  const data = getItemBySlug(slug, fields, postsDirectory)
  return {
    ...data, _type: "post"
  }
}

export function getEpisodeBySlug(slug: string, fields: string[] = []) {
  return getItemBySlug(slug, fields, episodesDirectory)
}

export function getItemBySlug(slug: string, fields: string[] = [], directory: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  
  return {...data, slug: realSlug, content: content,};
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getAllEpisodes(fields: string[] = []) {
  const slugs = getEpisodeSlugs()
  const episodes = slugs
    .map((slug) => getEpisodeBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((episode1, episode2) => (episode1.date > episode2.date ? -1 : 1))
  return episodes
}
