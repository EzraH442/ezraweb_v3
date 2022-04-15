import axios from 'axios';

const siteKey = '10000000-ffff-ffff-ffff-000000000001'; // TODO change to real sitekey
const postURL = 'https://localhost:3001';

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
