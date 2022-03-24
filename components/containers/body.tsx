import React from 'react';

import { body } from './body.module.css';

type BodyProps = {
    backgroundColor: string,
    children: any,
}

const Body: React.FunctionComponent<BodyProps> = ({ backgroundColor = '#FFFFFF', children }) => (
  <div style={{ backgroundColor }} className={body}>
    { children }
  </div>
);

export default Body;
