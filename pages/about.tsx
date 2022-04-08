import React from 'react';
import { NextPage, GetStaticProps } from 'next';

import { getAllPostFilenames } from '../lib/api';

import Header from '../components/header';
import Body from '../components/containers/body';

type NextPageProps = {latestSlug: string}

export const getStaticProps: GetStaticProps = async () => {
  const slugs = getAllPostFilenames();
  return {
    props: {
      latestSlug: slugs[0],
    },
  };
};

const AboutPage: NextPage<NextPageProps> = ({ latestSlug }) => (
  <div>
    <Header latestSlug={latestSlug} />
    <Body backgroundColor="grey">
      <h1>About Me</h1>
      <p>
        I&apos;m a grade 10 student at Western Canada High School! I&apos;m interested in
        programming, and have made a variety of applications!
      </p>
    </Body>
  </div>
);

export default AboutPage;
