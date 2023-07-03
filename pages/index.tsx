import type { NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Body from "../components/containers/Body";
import Divider from "../components/Divider/Divider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/homepage/Banner";
import Column from "../components/homepage/Column";
import ImagePopup from "../components/homepage/ImagePopup";
import TextButton from "../components/homepage/TextButon";
import { getPostByContext, makePostContext, POSTS_DIR } from "../lib/api";
import { allSortedFilenamesInDir } from "../lib/helpers";
import { IPopupData } from "../types/popup";
import { PostData } from "../types/post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleRight,
  faClock,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/homepage/Card";

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = [];
  const postFilenames = allSortedFilenamesInDir(POSTS_DIR);

  for (let i = 0; i < 3; i++) {
    const context = makePostContext(i, postFilenames);

    latestPosts.push(
      getPostByContext(context, ["title", "date", "headline", "featuredImage"]),
    );
  }

  return { props: { posts: latestPosts } };
};

interface IHomepageProps {
  posts: PostData[];
}

const Home: NextPage<IHomepageProps> = ({ posts }) => {
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

      <Header />
      <Banner />

      <Body>
        <div className="flex flex-col items-center pt-9">
          <h2 className="font-raleway text-2xl mx-10 mb-3">the tar pit</h2>
          <div className="w-36">
            <Divider />
          </div>
          <div>
            <Card label="3D Tetris built with Webassembly" href="/wasm-test" />
            <Card label="French flashcards" href="/flashcards" />
            <Card label="foo bar baz" href="/" />
          </div>
          <div className="mt-12" />
          <h2 className="font-raleway text-2xl mx-10 mb-3">blog</h2>
          <div className="w-36">
            <Divider />
          </div>
          <div>
            {posts.map((post) => (
              <Column key={post.metadata.date}>
                <div className="px-4 py-4">
                  <h3 className="text-2xl">{post.metadata.title!}</h3>
                  <p>
                    ⊱ ───────•⊰❉⊱•─────────────⊱⁜⊰────────────•⊰❉⊱•─────── ⊰
                  </p>
                  <p className="mx-4 my-2">
                    <FontAwesomeIcon
                      icon={faPencil}
                      width={15}
                      className="inline mx-2"
                    />
                    {post.metadata.date}
                  </p>
                  <p className="basis-72 mx-3">{post.metadata.headline}</p>
                  <FontAwesomeIcon icon={faChevronCircleRight} width={10} />
                </div>
              </Column>
            ))}
          </div>
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
