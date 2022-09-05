import React from "react";
import Image from "next/image";

interface IImagePopupProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: VoidFunction;
}

const ImagePopup: React.FC<IImagePopupProps> = ({
  src,
  alt,
  open,
  onClose,
}) => {
  return (
    <div
      className={`bg-black bg-opacity-60 z-50 ${
        open ? "" : "hidden"
      } flex flex-col items-center justify-center
       fixed top-0 left-0 h-full w-full `}
    >
      <div style={{ width: "50vw" }} className="flex justify-center">
        <img src={src} alt={alt} />
      </div>
      <button
        type="button"
        onClick={onClose}
        className="px-5 py-3 bg-slate-400 rounded-md my-2"
      >
        Close
      </button>
    </div>
  );
};

export default ImagePopup;
