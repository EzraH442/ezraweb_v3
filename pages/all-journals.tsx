import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Header from '../components/header';
import Body from '../components/containers/body';
import Footer from '../components/footer';
import * as styles from '../styles/journals.module.css';
import { getPostBySlug, getPostSlugs } from '../lib/api';

type PostData = {
    date: string,
    headline: string,
    title: string,
    slug: string,
}

type AllJournalProps = {
    posts: PostData[]
}

export const getStaticProps: GetStaticProps = async () => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, ['date', 'headline', 'title', 'slug']));
  return {
    props: {
      posts,
    },
  };
};

const AllJournals: NextPage<AllJournalProps> = ({ posts }:
  InferGetStaticPropsType<typeof getStaticProps>) => (

    <div>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="All Of Ezra's Journal Posts" />
        <meta name="pathname" content="all-journals" />
      </Head>
      <Header latestSlug={posts[0].slug!} />
      <Body backgroundColor="#cfe8a3">
        <div className={styles.container}>
          <h1 className={styles.title}>All Posts</h1>
          <p className={styles.postCount}>
            You can find all
            {' '}
            {posts.length}
            {' '}
            posts below:
          </p>
          <hr className={styles.line} />
          {posts.map((post: any) => (
            <Link href={post.slug} key={post.date} passHref>
              <div
                className={styles.link}
              >
                <h3>
                  {post.title}
                  {' - '}
                  {post.date}
                </h3>

                <p>{post.headline}</p>
              </div>
            </Link>

          ))}
        </div>
      </Body>
      <Footer />
    </div>
);

export default AllJournals;
