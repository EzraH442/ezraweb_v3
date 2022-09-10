import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import { getAllPostSlugs } from "../lib/api";

export const getStaticProps: GetStaticProps = async () => {
  const slugs = getAllPostSlugs();
  return {
    props: {
      latestSlug: slugs[0],
    },
  };
};

interface IGanttPageProps {
  latestSlug: string;
}

const GanttPage: NextPage<IGanttPageProps> = ({ latestSlug }) => (
  <>
    <Head>
      <title>Gantt Chart</title>
    </Head>
    <Layout latestSlug={latestSlug}>Gantt</Layout>
  </>
);

export default GanttPage;
