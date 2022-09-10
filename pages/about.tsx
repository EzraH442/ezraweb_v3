import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Divider from "../components/Divider/Divider";
import Layout from "../components/Layout";
import { getAllPostSlugs } from "../lib/api";

interface IAboutPageProps {
  latestSlug: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const slugs = getAllPostSlugs();
  return {
    props: {
      latestSlug: slugs[0],
    },
  };
};

const AboutPage: NextPage<IAboutPageProps> = ({ latestSlug }) => (
  <>
    <Head>
      <title>About | EZ</title>
      <meta name="description" content="About Me" />
      <link rel="icon" href="/images/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout latestSlug={latestSlug}>
      <h1>About Me</h1>
      <Divider />
      <p>
        I&apos;m a grade 11 student at Western Canada High School! I&apos;m
        interested in programming, and have made a variety of applications!
      </p>
    </Layout>
  </>
);

export default AboutPage;
