import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import EpisodeBody from '../../components/post-body'
import Header from '../../components/header'
import EpisodeHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getEpisodeBySlug, getAllEpisodes } from '../../lib/api'
import EpisodeTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import EpisodeType from '../../types/episode'

type Props = {
  episode: EpisodeType
  moreEpisodes: EpisodeType[]
  preview?: boolean
}

const Episode = ({ episode, moreEpisodes, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !episode?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <EpisodeTitle>Loading…</EpisodeTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {episode.title} | Next.js Blog Example with {CMS_NAME}
                </title>
              </Head>
              <EpisodeHeader
                title={episode.title}
                coverImage={episode.poster}
                date={episode.date}
                author={episode.author}
              />
              <EpisodeBody content={episode.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Episode

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const episode = getEpisodeBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(episode.content || '')

  return {
    props: {
      episode: {
        ...episode,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const episodes = getAllEpisodes(['slug'])

  return {
    paths: episodes.map((episodes) => {
      return {
        params: {
          slug: episodes.slug,
        },
      }
    }),
    fallback: false,
  }
}
