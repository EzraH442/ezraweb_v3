import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

import { getAllPostSlugs } from '../lib/api';
import Layout from '../components/Layout';

type SucessPageProps = {latestSlug: string}

export const getStaticProps: GetStaticProps = async () => {
  const slugs = getAllPostSlugs();
  return {
    props: {
      latestSlug: slugs[0],
    },
  };
};

const SucessPage: NextPage<SucessPageProps> = ({ latestSlug }) => (
  <>
    <Head>
      <title>Form Submission Complete</title>
      <meta name="description" content="About Me" />
      <link rel="icon" href="/images/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout latestSlug={latestSlug}>
      <h1>Thank you!</h1>
      <hr />
      <p>
        Your form submission has been recieved. Thank you!.
      </p>
    </Layout>
  </>
);

export default SucessPage;
