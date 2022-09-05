import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/homepage/banner";

import ThreeColumns from "../components/homepage/triple-column";

import {
  getAllPostFilenames,
  getPostByContext,
  PostData,
  makePostContext,
} from "../lib/api";
import Body from "../components/containers/body";
import Column from "../components/homepage/column";
import TextButton from "../components/homepage/TextButon";
import { columns } from "../components/homepage/triple-column.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = [];
  const postFilenames = getAllPostFilenames();

  for (let i = 0; i < 3; i++) {
    const context = makePostContext(i, postFilenames);

    latestPosts.push(
      getPostByContext(context, ["title", "date", "headline", "featuredImage"]),
    );
  }

  return {
    props: {
      posts: latestPosts,
    },
  };
};

type HomepageProps = {
  posts: PostData[];
};

const Home: NextPage<HomepageProps> = ({ posts }) => (
  <div>
    <Head>
      <title>Home | Ez</title>
      <link rel="icon" href="/public/favicon.ico" />
      <meta name="description" content="The homepage of Ezra's website" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header latestSlug={posts[0].context.slug} />
    <Banner />

    <Body>
      <ThreeColumns
        pos={0}
        title="Backpacking"
        text="I like to go backpacking!"
        images={{
          image1: {
            imageUrl: "/images/column2.jpg",
            altText: "Backpacking across a large scree field",
          },
          image2: {
            imageUrl: "/images/right.jpg",
            altText: "Great views from the top of a mountain",
          },
        }}
      />

      <ThreeColumns
        pos={1}
        title="Scrambling"
        text="I also love climbing mountains!"
        images={{
          image1: {
            imageUrl: "/images/summit.jpg",
            altText: "Backpacking across a large scree field",
          },
          image2: {
            imageUrl: "/images/summit.jpg",
            altText: "Great views from the top of a mountain",
          },
        }}
      />
      <div className="flex flex-col items-center">
        <h2 className="font-raleway text-2xl mx-10 mb-3">About Me</h2>
        <p className="text-center text-lg">
          I&apos;m an IBDP student at Western Canada High School. I am usually
          pretty busy. You can read about my life here.
        </p>
        <div className="w-11/12">
          <hr className="border-black" />
        </div>
        <div className={columns}>
          {posts.map((post) => (
            <Column key={post.metadata.date} height="auto">
              <div className="px-4 py-4">
                <h3 className="text-2xl">{post.metadata.title!}</h3>
                <p className="mx-4 my-2">{post.metadata.date}</p>
                <p className="basis-72 mx-3">{post.metadata.headline}</p>
                {post.metadata.featuredImage && (
                  <Image
                    src={post.metadata.featuredImage}
                    alt=""
                    width={300}
                    height={200}
                    layout="responsive"
                  />
                )}
                <div className="px-3 py-7">
                  <TextButton
                    href={`/posts/${post.context.slug}`}
                    label="Full Post"
                  />
                </div>
              </div>
            </Column>
          ))}
        </div>
      </div>
    </Body>
    <Footer />
  </div>
);

export default Home;
