import Author from './author'

export type GeneralPost = {
  slug: string
  title: string
  date: string
  content: string
}

type PostType = GeneralPost & {
  _type: "post"
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
}

export default PostType
