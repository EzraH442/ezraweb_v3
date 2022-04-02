import React from 'react';
import Image from 'next/image';
import * as styles from './banner.module.css';

type BannerProps = Record<string, never>;

const Banner: React.FunctionComponent<BannerProps> = () => (
  <div className={styles.container}>
    <Image src="/images/home-top.jpg" className={styles.image} alt="Mountain Scenery" layout="fill" />
    <p className={styles.text}>
      &quot;a quote&quot;
      <br />
      -from some guy
    </p>
  </div>
);

export default Banner;
