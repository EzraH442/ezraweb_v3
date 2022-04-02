import React from 'react';
import Image from 'next/image';

import * as styles from './triple-column.module.css';

function buildTextCol(title: string, text: string) {
  return (
    <div className={`${styles.column} ${styles.text}`}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
function buildImageCol(src: string, alt: string) {
  return (
    <div className={styles.column}>
      <Image src={src} alt={alt} layout="responsive" width={300} height={300} />
    </div>
  );
}

type ImageType = {
            imageUrl: string,
            altText: string,
}

type ThreeColumnsProps = {
    pos: 1|2|3,
    title: string,
    text: string,
    images: {
        image1: ImageType,
        image2: ImageType,
    }
}

const ThreeColumns: React.FunctionComponent<ThreeColumnsProps> = ({
  pos, title, text, images,
}) => {
  if (pos === 1) {
    return (
      <div className={styles.columns}>
        {buildTextCol(title, text)}
        {buildImageCol(images.image1.imageUrl, images.image1.altText)}
        {buildImageCol(images.image2.imageUrl, images.image2.altText)}
      </div>
    );
  } if (pos === 2) {
    return (
      <div className={styles.columns}>
        {buildImageCol(images.image1.imageUrl, images.image1.altText)}
        {buildTextCol(title, text)}
        {buildImageCol(images.image2.imageUrl, images.image2.altText)}
      </div>
    );
  } if (pos === 3) {
    return (
      <div className={styles.columns}>
        {buildImageCol(images.image1.imageUrl, images.image1.altText)}
        {buildImageCol(images.image2.imageUrl, images.image2.altText)}
        {buildTextCol(title, text)}
      </div>
    );
  }
  return (
    <div className={styles.columns}>
      <div className={`${styles.column} ${styles.text}`}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={styles.column}>
        <Image src={images.image1.imageUrl} alt={images.image1.altText} />
      </div>
      <div className={styles.column}>
        <Image src={images.image2.imageUrl} alt={images.image2.altText} />
      </div>
    </div>
  );
};

export default ThreeColumns;
