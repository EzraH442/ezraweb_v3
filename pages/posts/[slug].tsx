import React from 'react';
import {
  NextPage, GetStaticProps, GetStaticPaths,
} from 'next';

import { useRouter } from 'next/router';
import Head from 'next/head';
import ErrorPage from 'next/error';
import Image from 'next/image';
import Link from 'next/link';

import { ParsedUrlQuery } from 'querystring';
import {
  getPostBySlug, getAllPosts, PostData, getPostSlugs,
} from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

import Body from '../../components/containers/body';
import Header from '../../components/header';
import * as styles from './blog-post.module.css';

type PostPageProps = {
  post: {
    metadata: PostData,
    content: string,
  },
  latestSlug: string,
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<
PostPageProps, Params> = async (context) => {
  const post = getPostBySlug(context.params!.slug, [
    'title',
    'date',
    'slug',
    'nextSlug',
    'previousSlug',
    'featuredImage',
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        metadata: post,
        content,
      },
      latestSlug: getPostSlugs()[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => ({
      params: { slug: post.slug! },
    })),
    fallback: false,
  };
};
const Post: NextPage<PostPageProps> = ({ post, latestSlug }) => {
  const router = useRouter();
  if (!router.isFallback && post.metadata.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <Head>
        <title>{post.metadata.title}</title>
        <meta name="description" content={post.metadata.headline} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.metadata.featuredImage} />
      </Head>
      <Header latestSlug={latestSlug} />

      <Body backgroundColor="#cfe8a3">
        <div className={styles.container}>
          <h1 className={styles.title}>{post.metadata.title}</h1>
          <p className={styles.date}>{post.metadata.date}</p>
          {post.metadata.featuredImage && <Image src={post.metadata.featuredImage} alt="" className={styles.image} />}
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content! }} />
          <div className={styles.links}>
            <Link href={`${post.metadata.nextSlug}`}>
              {'<<< '}
              Next Post
            </Link>
          </div>
          <div className={styles.links}>
            <Link href={post.metadata.previousSlug!}>
              {'>>> '}
              Previous Post
            </Link>
          </div>
        </div>
      </Body>
    </div>
  );
};

export default Post;
