import { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

import onVerifySucess from "../lib/email";
import { getAllPostSlugs } from "../lib/api";

import Layout from "../components/Layout";
import Input from "../components/contact/Input";

type ContactPageProps = { latestSlug: string; sitekey: string };

export const getStaticProps: GetStaticProps = async () => {
  const slugs = getAllPostSlugs();
  return {
    props: {
      latestSlug: slugs[0],
      sitekey: process.env.SITEKEY!,
    },
  };
};

const ContactPage: NextPage<ContactPageProps> = ({ latestSlug, sitekey }) => {
  const captchaRef = useRef<HCaptcha>(null);

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    captchaRef.current!.execute();
  };
  const onVerify = async (tkn: string, ekey: string) => {
    const res = await onVerifySucess(tkn, ekey, {
      email,
      subject,
      name,
      message,
    });
    if (res.status === 200) {
      router.push("/success");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Head>
        <title>About | EZ</title>
        <meta name="description" content="About Me" />
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout latestSlug={latestSlug}>
        <h1>Contact</h1>
        <div className="py-2 pb-4">
          <hr className="border-black" />
        </div>
        <h2>Send me an email below</h2>
        <form className="p-3">
          <Input
            value={name}
            placeholder="Your name"
            onChange={(e) => setName(e)}
          />
          <Input
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e)}
          />
          <Input
            value={subject}
            placeholder="Subject"
            onChange={(e) => setSubject(e)}
          />
          <Input
            multiline
            value={message}
            placeholder="message"
            onChange={(e) => setMessage(e)}
          />
          <button type="button" onClick={onSubmit}>
            Submit
          </button>

          <HCaptcha
            sitekey={sitekey}
            size="invisible"
            onVerify={onVerify}
            ref={captchaRef}
          />
          <p className={error ? "text-sm text-purple-500 mx-2" : "hidden"}>
            An Unexpected Error Occurred. Please try again later.
          </p>
        </form>
      </Layout>
    </>
  );
};

export default ContactPage;
