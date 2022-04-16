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
) => axios.post(postURL, `token=${token}&ekey=${ekey}&email=${data.email}&subject=${data.subject}&message=${data.message}`);

export { siteKey, onVerifySucess };
