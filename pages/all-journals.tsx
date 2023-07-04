import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Divider from "../components/Divider/Divider";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import * as styles from "../styles/journals.module.css";
import { PostData } from "../types/post";

interface IAllJournalProps {
  posts: PostData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["headline", "title"]);
  return { props: { posts } };
};

const AllJournals: NextPage<IAllJournalProps> = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>All Posts | EZ</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="All Of Ezra's Journal Posts" />
    </Head>
    <Layout>
      <h1>All Posts</h1>
      <Divider />
      <h2 className={styles.postCount}>
        {`You can find all ${posts.length} posts below:`}
      </h2>
      <div className={styles.links}>
        {posts.map((post: PostData) => (
          <Link
            href={`/posts/${post.context.slug}`}
            key={post.metadata.date}
            passHref
            legacyBehavior>
            <div className={styles.link}>
              <h3>{`${post.metadata.title} - ${post.metadata.date} `}</h3>
              <p>{post.metadata.headline}</p>
              <Divider />
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  </>
);
export default AllJournals;
