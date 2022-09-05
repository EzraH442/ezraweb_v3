import React from "react";
import Image from "next/image";

import * as styles from "./triple-column.module.css";

// .columns {
//   display: flex;
//   flex-flow: row wrap;
//   align-content: center;
//   justify-content: space-evenly;
//   max-width: 100%;
// }
// .column {
//   margin: 10px 20px;
//   min-width: 0;
//   min-height: 0;
//   align-content: center;
//   -moz-box-shadow: inset 0 0 10px #000000;
//   -webkit-box-shadow: inset 0 0 10px #000000;
//   box-shadow: 0 0 10px #000000;
//   flex: 1 2 300px;
// }
// .text {
//   padding: 20px;
//   flex: 1 1 300px;
// }
// .column img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// }

interface ITextColumnProps {
  title: string;
  text: string;
}

const TextColumn: React.FC<ITextColumnProps> = ({ title, text }) => (
  <div className={`${styles.column} ${styles.text}`}>
    <h2>{title}</h2>
    <hr />
    <p>{text}</p>
  </div>
);

interface IImageColumnProps {
  src: string;
  alt: string;
}

const ImageColumn: React.FC<IImageColumnProps> = ({ src, alt }) => (
  <div className={styles.column}>
    <Image src={src} alt={alt} layout="responsive" width={300} height={300} />
  </div>
);

type ImageType = {
  imageUrl: string;
  altText: string;
};

type ThreeColumnsProps = {
  pos: 1 | 2 | 3;
  title: string;
  text: string;
  images: {
    image1: ImageType;
    image2: ImageType;
  };
};

const ThreeColumns: React.FC<ThreeColumnsProps> = ({
  pos,
  title,
  text,
  images,
}) => {
  const components = [
    <TextColumn key="dd" title={title} text={text} />,
    <ImageColumn
      key="ee"
      src={images.image1.imageUrl}
      alt={images.image1.altText}
    />,
    <ImageColumn
      key="ff"
      src={images.image2.imageUrl}
      alt={images.image2.altText}
    />,
  ];

  return (
    <div>{components.map((e, index, arr) => arr[(index + pos - 1) % 3])}</div>
  );
};

export default ThreeColumns;
