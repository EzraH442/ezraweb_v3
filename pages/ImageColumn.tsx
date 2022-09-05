import React from "react";
import Image from "next/image";
import Column from "../components/homepage/column";

interface IImageColumnProps {
  src: string;
  alt: string;
}

const ImageColumn: React.FC<IImageColumnProps> = ({ src, alt }) => (
  <Column>
    <Image src={src} alt={alt} layout="responsive" width={300} height={300} />
  </Column>
);

export default ImageColumn;
