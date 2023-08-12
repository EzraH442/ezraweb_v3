import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Divider from "../components/Divider/Divider";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";
import { PostData } from "../types/post";
import Title from "../components/shared/Title";

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
      <meta name="description" content="All Of Ezra's Journal Posts" />
    </Head>
    <Layout className="mx-4">
      <div className="mx-auto min-w-fit">
        <Title>All Posts</Title>
        <Divider />
        <h2 className="text-lg">
          {`You can find all ${posts.length} posts below:`}
        </h2>
        <div className="flex flex-col items-center">
          <div className="max-w-2xl mx-5">
            {posts.map((post: PostData) =>
              !post.metadata.archive ? (
                <Link
                  href={`/posts/${post.context.slug}`}
                  key={post.metadata.date}
                >
                  <div className="my-3 hover:cursor-pointer hover:underline decoration-cyan-300">
                    <div className="flex">
                      <h3 className="font-sans text-lg inline">
                        {post.metadata.title}
                      </h3>
                      <FontAwesomeIcon
                        icon={faPencil}
                        width={16}
                        className="inline ml-2 mr-1 text-cyan-300"
                      />
                      <h3 className="font-sans text-lg inline text-cyan-300">
                        {post.metadata.date}
                      </h3>
                    </div>
                    <p className="font-sans">{post.metadata.headline}</p>
                  </div>
                </Link>
              ) : (
                <Link
                  href={`/posts/${post.context.slug}`}
                  key={post.metadata.date}
                >
                  <div className="my-3 hover:cursor-pointer hover:underline decoration-cyan-300">
                    <h3 className="font-sans text-lg inline text-cyan-300">
                      {` [archive] `}
                    </h3>
                    <h3 className="font-sans text-lg inline">{`${post.metadata.title} - ${post.metadata.date}`}</h3>
                    <p className="font-sans">{post.metadata.headline}</p>
                  </div>
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </Layout>
  </>
);
export default AllJournals;
