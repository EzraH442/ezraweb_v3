import axios from 'axios';

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

export default onVerifySucess;
