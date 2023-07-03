import { NextPage } from "next";
import Head from "next/head";
import Divider from "../components/Divider/Divider";
import Layout from "../components/Layout";

const SucessPage: NextPage = () => (
  <>
    <Head>
      <title>Form Submission Complete</title>
      <meta name="description" content="About Me" />
      <link rel="icon" href="/images/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <h1>Thank you!</h1>
      <Divider />
      <p>Your form submission has been recieved. Thank you!.</p>
    </Layout>
  </>
);

export default SucessPage;
