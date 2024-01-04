import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Divider from "../components/Divider/Divider";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { PostData } from "../types/post";
import Title from "../components/shared/Title";
import Timeline from "../components/Timeline/Timeline";
import { TimelineItem } from "../components/Timeline/TimelineItem";
import TimelineA from "../components/TimelineV2/Timeline";

interface IAllJournalProps {
  posts: PostData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["headline", "title", "archive"]);
  return { props: { posts } };
};

const Blog: NextPage<IAllJournalProps> = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [useFillerSkips, setUseFillerSkips] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo({ left: 1000000 });
  }, [ref]);

  return (
    <>
      <Head>
        <title>All Posts</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="All Of Ezra's Posts" />
      </Head>
      <Layout>
        <Title>All Posts</Title>
        <Divider />
        <h2 className="text-lg">{`${posts.length} total posts:`}</h2>

        <div className="flex space-x-2">
          <p>Skip long empty periods?</p>
          <input
            type="checkbox"
            checked={useFillerSkips}
            onChange={(e) => setUseFillerSkips(e.target.checked)}
          />
        </div>
        <div className="flex min-h-0 min-w-0 overflow-x-scroll" ref={ref}>
          <Timeline skip={useFillerSkips}>
            {posts
              // .filter((post: PostData) => !post.metadata.archive)
              .map((post: PostData) => {
                return (
                  <TimelineItem
                    key={post.context.date}
                    date={new Date(post.context.date)}
                    slug={`/posts/${post.context.slug}`}
                    title={post.metadata.title!}
                    headline={post.metadata.headline!}
                  />
                );
              })}
          </Timeline>
        </div>
        <TimelineA posts={posts} />
      </Layout>
    </>
  );
};
export default Blog;
