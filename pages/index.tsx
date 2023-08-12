import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Divider from "../components/Divider/Divider";
import Banner from "../components/homepage/Banner";
import BlogCard from "../components/homepage/BlogCard";
import { getPostByContext, makePostContext, POSTS_DIR } from "../lib/api";
import { allSortedFilenamesInDir } from "../lib/helpers";
import { PostData } from "../types/post";
import Card from "../components/homepage/Card";
import Layout from "../components/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = [];
  const postFilenames = allSortedFilenamesInDir(POSTS_DIR);

  for (let i = 0; i < postFilenames.length; i++) {
    const context = makePostContext(i, postFilenames);

    latestPosts.push(
      getPostByContext(context, [
        "title",
        "date",
        "headline",
        "featuredImage",
        "archive",
      ]),
    );
  }

  return { props: { posts: latestPosts } };
};

interface IHomepageProps {
  posts: PostData[];
}

const Home: NextPage<IHomepageProps> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Home | Ez</title>
        <link rel="icon" href="/public/favicon.ico" />
        <meta name="description" content="The homepage of Ezra's website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <Banner />

        <div className="flex flex-col items-center pt-9">
          <h2 className="font-raleway text-2xl mx-10 mb-3 font-thin">
            the tar pit
          </h2>
          <div className="w-36">
            <Divider />
          </div>
          <div>
            <Card label="3D Tetris built with Webassembly" href="/wasm-test" />
            <Card label="French flashcards" href="/flashcards" />
          </div>
          <div className="mt-12" />
          <h2 className="font-raleway text-2xl mx-10 mb-3 font-thin">blog</h2>
          <div className="w-36">
            <Divider />
          </div>
          <div>
            {posts
              .filter((post) => !parseInt(post.metadata.archive ?? "0", 10))
              .map((post) => (
                <BlogCard
                  key={post.metadata.date}
                  title={post.metadata.title ?? ""}
                  date={post.metadata.date}
                  headline={post.metadata.headline ?? ""}
                  href={`/posts/${post.context.slug}`}
                />
              ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Home;
