import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/homepage/banner';

import ThreeColumns from '../components/homepage/triple-column';
import PersonalInfo from '../components/homepage/personalinfo';

import {
  getAllPostFilenames, getPostByContext, PostData, makePostContext,
} from '../lib/api';
import Body from '../components/containers/body';

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = [];
  const postFilenames = getAllPostFilenames();

  for (let i = 0; i < 3; i++) {
    const context = makePostContext(i, postFilenames);

    latestPosts.push(getPostByContext(context, ['title', 'date', 'headline', 'featuredImage']));
  }

  return {
    props: {
      posts: latestPosts,
    },
  };
};

type HomepageProps = {
  posts: PostData[];
}

const Home: NextPage<HomepageProps> = ({ posts }) => (
  <div>
    <Head>
      <title>Home</title>
      <meta name="description" content="Ezra's Website Homepage" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header latestSlug={posts[0].context.slug} />
    <Banner />

    <Body>
      <ThreeColumns
        pos={1}
        title="Backpacking"
        text="I like to go backpacking!"
        images={{
          image1: {
            imageUrl: '/images/column2.jpg',
            altText: 'Backpacking across a large scree field',
          },
          image2: {
            imageUrl: '/images/right.jpg',
            altText: 'Great views from the top of a mountain',
          },
        }}
      />

      <ThreeColumns
        pos={3}
        title="Scrambling"
        text="I also love climbing mountains!"
        images={{
          image1: {
            imageUrl: '/images/summit.jpg',
            altText: 'Backpacking across a large scree field',
          },
          image2: {
            imageUrl: '/images/summit.jpg',
            altText: 'Great views from the top of a mountain',
          },
        }}
      />
      <PersonalInfo posts={posts} />

    </Body>
    <Footer />
  </div>
);

export default Home;
