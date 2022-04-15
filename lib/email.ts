import axios from 'axios';

const siteKey = process.env.HC_KEY!;
const postURL = process.env.MAIL_URL!;

export type emailData = {
    email: string,
    subject: string,
    message: string,
}

const onVerifySucess = async (
  token: string,
  ekey: string,
  data: emailData,
) => axios.post(postURL, { token, ekey, data });

export { siteKey, onVerifySucess };
