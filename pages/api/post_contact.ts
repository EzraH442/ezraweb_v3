import axios from 'axios';
import { NextApiHandler } from 'next';
import { stringify } from 'querystring';

const handler: NextApiHandler = async (req, res) => {
  const { token, ekey, data } = req.body;
  const response = await axios.post('http://localhost:5000', stringify({
    token,
    sitekey: ekey,
    email: data.email,
    subject: data.subject,
    name: data.name,
    message: data.subject,
  }));
  res.end(response.status);
};

export default handler;
