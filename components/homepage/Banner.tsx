import Image from "next/image";
import React from "react";

const Banner: React.FunctionComponent<{}> = () => (
  <div className="relative">
    <Image
      src="/images/home-top.jpg"
      className="w-full"
      alt="Mountain Scenery"
      layout="responsive"
      width={1000}
      height={600}
    />
    <p
      className="absolute w-4/6 bg-opacity-40 bg-black text-white px-4 py-8
    top-16 text-lg font-light sm:text-4xl"
    >
      &quot;a quote&quot;
      <br />
      -from some guy
    </p>
  </div>
);

export default Banner;
