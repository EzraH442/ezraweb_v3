import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Divider from "../components/Divider/Divider";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { PostData } from "../types/post";
import Title from "../components/shared/Title";
import Timeline, { TimelineItem } from "../components/Timeline/Timeline";
import toUnixMili from "../lib/toUnixMili";

interface IAllJournalProps {
  posts: PostData[];
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["headline", "title", "archive"]);
  return { props: { posts } };
};

const AllJournals: NextPage<IAllJournalProps> = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>All Posts | EZ</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="All Of Ezra's Posts" />
    </Head>
    <Layout className="mx-4">
      <div className="mx-auto min-w-fit">
        <Title>All Posts</Title>
        <Divider />
        <h2 className="text-lg">
          {`You can find all ${posts.length} posts below:`}
        </h2>

        <Timeline>
          {posts
            // .filter((post: PostData) => !post.metadata.archive)
            .map((post: PostData) => {
              return (
                <TimelineItem
                  key={post.metadata.date}
                  date={post.metadata.date}
                  slug={`/posts/${post.context.slug}`}
                  title={post.metadata.title!}
                  headline={post.metadata.headline!}
                  timestamp={toUnixMili(post.metadata.date)}
                />
              );
            })}
        </Timeline>
      </div>
    </Layout>
  </>
);
export default AllJournals;
