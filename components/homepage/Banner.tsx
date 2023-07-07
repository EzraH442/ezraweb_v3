import Image from "next/legacy/image";
import React, { useEffect, useState, useCallback } from "react";
import { consolas } from "../../constants/fonts";

const getSize = (size: number) => {
  return size > 8 ? size : 8;
};

const useWidth = () => {
  const [size, setSize] = useState(0); // default width, detect on server.

  const handleResize = useCallback(() => {
    setSize(getSize(window.innerWidth / 70));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setSize(getSize(window.innerWidth / 75));
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return size;
};

const Banner: React.FunctionComponent<{}> = () => {
  const size = useWidth();

  return (
    <div className="relative">
      <div className="brightness-50">
        <Image
          src="/images/laputa.jpg"
          className="w-full"
          alt="An Image of Laputa, from the film <i>Castle in the Sky</i>"
          layout="responsive"
          width={1000}
          height={600}
        />
      </div>
      <pre
        className={`absolute w-4/6 bg-opacity-40 bg-black text-white px-4 py-8
    top-16 font-light ${consolas.className}`}
        style={{ fontSize: size }}
      >{`
" The programmer, like the poet, works only slightly re-
moved from pure thought-stuff. He builds his castles in the air,
from air, creating by exertion of the imagination. Few media of
creation are so flexible, so easy to polish and rework, so readily
capable of realizing grand conceptual structures. "
      
      - Frederick P. Brooks Jr,
    `}</pre>
    </div>
  );
};

export default Banner;
