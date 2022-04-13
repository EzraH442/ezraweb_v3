import React from 'react';
import {
  NextPage, GetStaticProps, GetStaticPaths,
} from 'next';

import Head from 'next/head';
import Image from 'next/image';

import { ParsedUrlQuery } from 'querystring';
import {
  getPostBySlug, PostData, getAllPostSlugs,
} from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

import Body from '../../components/containers/body';
import Header from '../../components/header';
import * as styles from './blog-post.module.css';
import Footer from '../../components/footer';

type PostPageProps = {
  post: {
    post: PostData
    content: string,
  },
  latestSlug: string,
}

interface Params extends ParsedUrlQuery {
  slug: string
}

export const getStaticProps: GetStaticProps<
PostPageProps, Params> = async (context) => {
  const post = getPostBySlug(context.params!.slug, ['title', 'date', 'featuredImage']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        post,
        content,
      },
      latestSlug: getAllPostSlugs()[0],
    },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const postSlugs = getAllPostSlugs();

  return {
    paths: postSlugs.map((post) => ({
      params: { slug: post },
    })),
    fallback: false,
  };
};
const Post: NextPage<PostPageProps> = ({ post, latestSlug }) => (
  <div>
    <Head>
      <title>{post.post.metadata.title}</title>
      <meta name="description" content={post.post.metadata.headline} />
      <meta property="og:type" content="article" />
      <link rel="icon" href="/favicon.ico" />
      {post.post.metadata.featuredImage && <meta property="og:image" content={post.post.metadata.featuredImage} />}
    </Head>
    <Header latestSlug={latestSlug} />

    <Body>
      <h1 className={styles.title}>{post.post.metadata.title}</h1>
      <p className={styles.date}>{post.post.metadata.date}</p>
      {post.post.metadata.featuredImage && <Image src={post.post.metadata.featuredImage} alt="" className={styles.image} layout="responsive" width={800} height={600} />}
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className={styles.links}>
        <a href={post.post.context.previousSlug}>
          {'<<<'}
            &nbsp; Previous Post
        </a>
      </div>
      <div className={styles.links}>
        <a href={post.post.context.nextSlug}>
          Next Post &nbsp;
          {'>>>'}
        </a>
      </div>
    </Body>
    <Footer />
  </div>
);
export default Post;
