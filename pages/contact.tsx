import { NextPage } from 'next';
import { useState, useRef } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import { onVerifySucess, siteKey } from '../lib/email';

type ContactPageProps = {}

const ContactPage: NextPage<ContactPageProps> = () => {
  const captchaRef = useRef<HCaptcha>(null);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    if (name.length < 3) {
      return;
    }
    // TODO more basic client-side validation to prevent spammy server req
    captchaRef.current!.execute();
  };
  const onVerify = async (tkn: string, ekey: string) => {
    const res = await onVerifySucess(tkn, ekey, { email, subject, message });
    console.log(res);
  };
  const onExpire = () => { console.log('expire'); };
  const onError = (err: string) => { console.log(`hCaptcha Error: ${err}`); };

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
      <button type="button" onClick={onSubmit}>Submit</button>
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
