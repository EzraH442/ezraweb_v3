import { useRouter } from 'next/router'

import Head from 'next/head'
import ErrorPage from 'next/error'
import Image from 'next/image'
import Link from 'next/link'

import { getPostBySlug, getAllPosts } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

import Body from '../../components/containers/body'
import Header from '../../components/header'
import * as styles from "./blog-post.module.css";


type PostPageProps = {
  post: postProps,
  morePosts: {},
  preview: {}
}

type postProps = {
                title: string,
                date: string,
                featuredImage: string,
                headline: string
                slug: string
                content: string,
                next: string,
                previous: string,

}

export default function Post({ post, morePosts, preview }: PostPageProps) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
            <Head>
                <title>{post.title}</title>
                <meta name="description">{post.headline}</meta>
                <meta property="og:type" content="article" />
                <meta property="og:image" content={post.featuredImage}></meta>
                {
                /* 
                image={post.featuredImage
                    ? post.featuredImage.childImageSharp.gatsbyImageData.images.sizes
                    : null}
                pathname={current}
                article
                TODO: implement this stuff
                */
                }
            </Head>
      <Header></Header>
      
            <Body backgroundColor="#cfe8a3">
                <div className={styles.container}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.date}>{post.date}</p>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
                    <Image src={post.featuredImage} alt="" className={styles.image}></Image>
                    <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                    <div className={styles.links}>
                        <Link href={post.next}>
                            {"<<< "}
                            Next Post
                        </Link>
                    </div>
                    <div className={styles.links}>
                        <Link href={post.previous}>
                            {">>> "}
                            Previous Post
                        </Link>
                    </div>
                </div>
            </Body>
    </div>
  );
              }


type getStaticPropsParamsType = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: getStaticPropsParamsType) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'image',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}