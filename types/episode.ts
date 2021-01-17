import Author from './author'

type EpisodeType = {
  slug: string
  title: string
  date: string
  poster: string
  duration: number
  number: number
  tags: string[]
  abstract: string
  content: string
  author: Author

}

export default EpisodeType
