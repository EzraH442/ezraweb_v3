import axios from 'axios';
import { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
  const { token, ekey, data } = req.body;
  const params = new URLSearchParams({
    token,
    sitekey: ekey,
    email: data.email,
    subject: data.subject,
    name: data.name,
    message: data.message,
  });
  const response = await axios.post(process.env.POST_URL!, params);
  res.status(response.status);
  res.end(response.statusText);
};

export default handler;
