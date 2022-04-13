import React from 'react';
import { NextPage, GetStaticProps } from 'next';

import Head from 'next/head';
import { getAllPostSlugs } from '../lib/api';

import Header from '../components/header';
import Body from '../components/containers/body';
import Footer from '../components/footer';

type NextPageProps = {latestSlug: string}

export const getStaticProps: GetStaticProps = async () => {
  const slugs = getAllPostSlugs();
  return {
    props: {
      latestSlug: slugs[0],
    },
  };
};

const AboutPage: NextPage<NextPageProps> = ({ latestSlug }) => (
  <div>
    <Head>
      <meta name="description" content="About Ezra" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header latestSlug={latestSlug} />
    <Body>
      <h1>About Me</h1>
      <p>
        I&apos;m a grade 10 student at Western Canada High School! I&apos;m interested in
        programming, and have made a variety of applications!
      </p>
    </Body>
    <Footer />
  </div>
);

export default AboutPage;
