import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

import Image from "next/image";
import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/homepage/banner";

import {
  getAllPostFilenames,
  getPostByContext,
  PostData,
  makePostContext,
} from "../lib/api";
import Body from "../components/containers/body";
import Column from "../components/homepage/column";
import TextButton from "../components/homepage/TextButon";
import Columns from "../components/homepage/columns";
import TextColumn from "../components/homepage/TextColumn";
import ImageColumn from "../components/homepage/ImageColumn";
import ImagePopup from "../components/homepage/ImagePopup";

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

export interface IPopupData {
  src: string;
  alt: string;
}

const Home: NextPage<HomepageProps> = ({ posts }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<IPopupData>({
    src: "/images/column2.jpg",
    alt: "",
  });

  const onImageClick = (data: IPopupData) => {
    setPopupData(data);
    setPopupOpen(true);
  };

  const onPopupClose = () => {
    setPopupOpen(false);
  };

  return (
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
        <Columns>
          <TextColumn title="Backpacking" text="I like to go backpacking!" />
          <ImageColumn
            src="/images/column2.jpg"
            alt="Backpacking across a large scree field"
            onImageClick={(data) => onImageClick(data)}
          />
          <ImageColumn
            src="/images/right.jpg"
            alt="Great views from the top of a mountain"
            onImageClick={(data) => onImageClick(data)}
          />
        </Columns>
        <Columns>
          <ImageColumn
            src="/images/summit.jpg"
            alt="Backpacking across a large scree field"
            onImageClick={(data) => onImageClick(data)}
          />
          <ImageColumn
            src="/images/right.jpg"
            alt="Great views from the top of a mountain"
            onImageClick={(data) => onImageClick(data)}
          />
          <TextColumn
            title="Scrambling"
            text="I also love climbing mountains!"
          />
        </Columns>

        <div className="flex flex-col items-center">
          <h2 className="font-raleway text-2xl mx-10 mb-3">About Me</h2>
          <p className="text-center text-lg">
            I&apos;m an IBDP student at Western Canada High School. I am usually
            pretty busy. You can read about my life here.
          </p>
          <div className="w-11/12">
            <hr className="border-black" />
          </div>
          <Columns>
            {posts.map((post) => (
              <Column key={post.metadata.date}>
                <div className="px-4 py-4">
                  <h3 className="text-2xl">{post.metadata.title!}</h3>
                  <p className="mx-4 my-2">{post.metadata.date}</p>
                  <p className="basis-72 mx-3">{post.metadata.headline}</p>
                  {post.metadata.featuredImage && (
                    <span
                      onClick={() =>
                        onImageClick({
                          src: post.metadata.featuredImage!,
                          alt: "",
                        })
                      }
                    >
                      <Image
                        src={post.metadata.featuredImage}
                        alt=""
                        width={300}
                        height={200}
                        layout="responsive"
                      />
                    </span>
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
          </Columns>
        </div>
      </Body>
      <Footer />
      <ImagePopup
        open={popupOpen}
        src={popupData.src}
        alt={popupData.alt}
        onClose={onPopupClose}
      />
    </div>
  );
};
export default Home;
