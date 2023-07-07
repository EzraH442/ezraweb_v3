import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Divider from "../components/Divider/Divider";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { PostData } from "../types/post";
import { comfortaa } from "../constants/fonts";

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
      <div className="mx-auto min-w-fit">
        <h1>All Posts</h1>
        <Divider />
        <h2 className="text-lg">
          {`You can find all ${posts.length} posts below:`}
        </h2>
        <div className="px-5 flex flex-col items-center">
          {posts.map((post: PostData) => (
            <Link
              href={`/posts/${post.context.slug}`}
              key={post.metadata.date}
              passHref
              legacyBehavior
            >
              <div className=" w-4/5 my-3 hover:cursor-pointer hover:underline decoration-cyan-300">
                <h3
                  className={`${comfortaa.className} text-lg mx-2 my-0 text-center`}
                >{`${post.metadata.title} - ${post.metadata.date} `}</h3>
                <path
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
                <p className="text-center">{post.metadata.headline}</p>
                <Divider />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  </>
);
export default AllJournals;
