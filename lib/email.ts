import axios from 'axios';

const siteKey = process.env.HC_KEY || '10000000-ffff-ffff-ffff-000000000001';

export type emailData = {
    email: string,
    subject: string,
    name: string,
    message: string,
}

const onVerifySucess = async (
  token: string,
  ekey: string,
  data: emailData,
) => axios.post('/api/post_contact', { token, ekey, data });

export { siteKey, onVerifySucess };
