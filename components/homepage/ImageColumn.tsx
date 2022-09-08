import Image from "next/image";
import React from "react";
import { IPopupData } from "../../types/popup";
import Column from "./Column";

interface IImageColumnProps {
  src: string;
  alt: string;
  onImageClick?: (data: IPopupData) => void;
}

const ImageColumn: React.FC<IImageColumnProps> = ({
  src,
  alt,
  onImageClick,
}) => (
  <Column>
    <Image
      onClick={onImageClick && (() => onImageClick({ src, alt }))}
      src={src}
      alt={alt}
      layout="responsive"
      width={600}
      height={300}
      objectFit="cover"
    />
  </Column>
);

export default ImageColumn;
