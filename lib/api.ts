import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import PostType, { GeneralPost } from '../types/post'
import EpisodeType from '../types/episode'

const postsDirectory = join(process.cwd(), '_posts')
const episodesDirectory = join(process.cwd(), '_episodes')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getEpisodeSlugs() {
  return fs.readdirSync(episodesDirectory)
}

function isGeneralPost(input: unknown): input is GeneralPost {
  return typeof input === "object" && input !== null && "slug" in input && "title" in input && "date" in input
}

export function getPostBySlug(slug: string, fields: string[] = []): PostType {
  const {data, realSlug, content} = getItemBySlug(slug, fields, postsDirectory)
  if (!isGeneralPost(data)) {
    throw new Error("The frontmatter for slug:" + slug + " is invalid")
  }

  return {
    ...data, _type: "post", slug: realSlug, content
  }
}

function isEpisode(input: unknown): input is EpisodeType {
  return typeof input === "object" && input !== null && "slug" in input && "title" in input && "date" in input
}

export function getEpisodeBySlug(slug: string, fields: string[] = []) {
  const { data, realSlug, content} = getItemBySlug(slug, fields, episodesDirectory)
  if (!isEpisode(data)) {
    throw new Error("The frontmatter for slug: " + slug + " is invalid")
  }
}

type Item = {
  data: unknown;
  realSlug: string;
  content: string;
}
export function getItemBySlug(slug: string, fields: string[] = [], directory: string): Item {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content }: { data: unknown, content: string} = matter(fileContents)

  return {data, realSlug: realSlug, content: content,};
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
