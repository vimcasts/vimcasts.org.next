import Author from './author'
import GeneralPost from './post'
type EpisodeType = GeneralPost & {
  _type: "episode"
  poster: string
  duration: number
  number: number
  tags: string[]
  abstract: string
  author?: Author
}

export default EpisodeType
