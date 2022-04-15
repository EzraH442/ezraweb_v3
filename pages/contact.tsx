import { NextPage } from 'next';
import { useState, useRef, useEffect } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import { onVerifySucess, siteKey } from '../lib/email';

type ContactPageProps = {}

const ContactPage: NextPage<ContactPageProps> = () => {
  const captchaRef = useRef<HCaptcha>(null);

  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (name.length < 5 || message.length < 5) {
      return;
    }
      captchaRef.current!.execute();
  };
  const onVerify = (tkn: string, ekey: string) => {
    setToken(tkn);
    console.log(tkn);
    onVerifySucess(tkn, ekey, { email, subject, message });
  };
  const onExpire = () => { console.log('hCaptcha Token Expired'); };
  const onError = (err: string) => { console.log(`hCaptcha Error: ${err}`); };

  useEffect(() => { if (token) { console.log(`token: ${token}`); } }, [token]);

  return (
    <form>
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
      <button onClick={onSubmit} type="submit">Submit</button>
      <HCaptcha
        sitekey={siteKey}
        size="invisible"
        onVerify={onVerify}
        onError={onError}
        onExpire={onExpire}
        ref={captchaRef}
      />
    </form>
  );
};

export default ContactPage;
