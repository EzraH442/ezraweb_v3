import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";

const AboutPage: NextPage = () => (
  <>
    <Head>
      <title>man ezrahuang</title>
      <meta name="description" content="About Me" />
      <link rel="icon" href="/images/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <pre className="overflow-scroll">{`
      EZRA HUANG

      NAME
          ezra - statistics and comp. sci. student at mcgill

      SYNOPSIS
          ezra [b.sc. statistics and computer science at mcgill]

      DESCRIPTION
          ezra is a joint statistics and computer science major student at McGill.
          ezra was born in Calgary, AB, and currently lives in Montreal. Outside, 
          ezra enjoys scrambling, skiing, and backpacking, and inside, he enjoys
          listening to phish, ripping off cloud services' free tier, and playing 
          piano. ezra is an advocate for free science, free software, and free
          information.

      SEE ALSO
          leo zhang
          random 121
          lithium engineer

      EZRA HUANG                              July 2023                           EZRA HUANG
      `}</pre>
    </Layout>
  </>
);

export default AboutPage;
