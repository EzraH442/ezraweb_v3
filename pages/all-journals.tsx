import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Header from '../components/header';
import Body from '../components/containers/body';
import Footer from '../components/footer';
import * as styles from '../styles/journals.module.css';
import { getAllPosts, PostData } from '../lib/api';

type AllJournalProps = {
    posts: PostData[]
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['headline', 'title']);
  return { props: { posts } };
};

const AllJournals: NextPage<AllJournalProps> = ({ posts }:
   InferGetStaticPropsType<typeof getStaticProps>) => (
     <div>
       <Head>
         <title>All Posts</title>
         <meta name="description" content="All Of Ezra's Journal Posts" />
         <meta name="pathname" content="all-journals" />
       </Head>
       <Header latestSlug={posts[0].context.slug} />
       <Body>
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
           {posts.map((post: PostData) => (
             <Link href={`/posts/${post.context.slug}`} key={post.metadata.date} passHref>
               <div
                 className={styles.link}
               >
                 <h3>
                   {post.metadata.title}
                   {' - '}
                   {post.metadata.date}
                 </h3>

                 <p>{post.metadata.headline}</p>
               </div>
             </Link>
           ))}
         </div>
       </Body>
       <Footer />
     </div>
);
export default AllJournals;
