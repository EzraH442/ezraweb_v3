import { NextPage, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import onVerifySucess from '../lib/email';
import { getAllPostSlugs } from '../lib/api';

import * as styles from '../styles/contact.module.css';
import Layout from '../components/Layout';

type ContactPageProps = { latestSlug: string, sitekey: string }

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

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const onSubmit = () => {
    captchaRef.current!.execute();
  };
  const onVerify = async (tkn: string, ekey: string) => {
    const res = await onVerifySucess(tkn, ekey, {
      email, subject, name, message,
    });
    if (res.status === 200) {
      router.push('/success');
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
        <hr />
        <h2>Send me an email below</h2>
        <form className={styles.form}>
          <input
            type="text"
            value={name}
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            value={email}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            value={subject}
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            value={message}
            placeholder="message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="button" onClick={onSubmit}>Submit</button>
          <HCaptcha
            sitekey={sitekey}
            size="invisible"
            onVerify={onVerify}
            ref={captchaRef}
          />
        </form>
        {error ? <p>An Unexpected Error Occurred. Please try again later.</p> : null}
      </Layout>
    </>
  );
};

export default ContactPage;
