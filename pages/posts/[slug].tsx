import React from 'react';
import { useRouter } from 'next/router';

import Head from 'next/head';
import ErrorPage from 'next/error';
import Image from 'next/image';
import Link from 'next/link';

import { GetStaticProps, GetStaticPaths } from 'next';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

import Body from '../../components/containers/body';
import Header from '../../components/header';
import * as styles from './blog-post.module.css';

type PostProps = {
                title: string,
                date: string,
                featuredImage: string,
                headline: string
                slug: string
                content: string,
                next: string,
                previous: string,

}

type PostPageProps = {
  post: PostProps,
}

const Post: React.FunctionComponent<PostPageProps> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.headline} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.featuredImage} />
      </Head>
      <Header />

      <Body backgroundColor="#cfe8a3">
        <div className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.date}>{post.date}</p>
          <Image src={post.featuredImage} alt="" className={styles.image} />
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className={styles.links}>
            <Link href={post.next}>
              {'<<< '}
              Next Post
            </Link>
          </div>
          <div className={styles.links}>
            <Link href={post.previous}>
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

export const getStaticProps: GetStaticProps = async (slug: string) => {
  const post = getPostBySlug(slug, [
    'title',
    'date',
    'slug',
    'featuredImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: { ...post, content },
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getAllPosts();

  return {
    paths: posts.map((post: PostProps) => ({
      params: { slug: post.slug },
    })),
    fallback: false,
  };
};
