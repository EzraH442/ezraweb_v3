import React from "react";
import Image from "next/image";

interface ITextColumnProps {
  title: string;
  text: string;
}

interface IColumnProps {
  children: React.ReactNode;
}

const Column: React.FC<IColumnProps> = ({ children }) => (
  <div
    className="mx-3 my-5 min-w-0 content-center shadow-md shadow-black
  basis-72 grow"
  >
    {children}
  </div>
);

const TextColumn: React.FC<ITextColumnProps> = ({ title, text }) => (
  <Column>
    <div className="p-4">
      <h2>{title}</h2>
      <hr />
      <p>{text}</p>
    </div>
  </Column>
);

interface IImageColumnProps {
  src: string;
  alt: string;
}

const ImageColumn: React.FC<IImageColumnProps> = ({ src, alt }) => (
  <Column>
    <Image src={src} alt={alt} layout="responsive" width={300} height={300} />
  </Column>
);

type ImageType = {
  imageUrl: string;
  altText: string;
};

type ThreeColumnsProps = {
  pos: number;
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
    <div className="flex items-center justify-evenly max-w-full ">
      {components.map((e, index, arr) => arr[(index + pos) % 3])}
    </div>
  );
};

export default ThreeColumns;
