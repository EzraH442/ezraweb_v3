import HCaptcha from "@hcaptcha/react-hcaptcha";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Input from "../components/contact/Input";
import Divider from "../components/Divider/Divider";
import Layout from "../components/Layout";
import { getAllPostSlugs } from "../lib/api";
import onVerifySucess from "../lib/email";

interface IContactPageProps {
  sitekey: string;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      sitekey: process.env.SITEKEY!,
    },
  };
};

const ContactPage: NextPage<IContactPageProps> = ({ sitekey }) => {
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
      <Layout>
        <h1>Contact</h1>
        <div className="pb-2">
          <Divider />
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
