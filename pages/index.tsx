import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Header from '../components/header';
import Footer from '../components/footer';
import Banner from '../components/homepage/banner';

import ThreeColumns from '../components/homepage/triple-column';
import PersonalInfo from '../components/homepage/personalinfo';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Home</title>
      <meta name="description" content="Ezra's Website Homepage" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Banner />

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
    <PersonalInfo />
    <Footer />
    <Footer />
  </div>
);

export default Home;
