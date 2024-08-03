import { NextPage } from "next";
import Image from "next/image";

const Cloud: NextPage = () => {
  return (
    <div className="bg-background">
      <Image
        src="/images/cloud.png"
        alt="A terminal history word cloud"
        className="w-full"
        style={{ objectFit: "cover" }}
        width={2800}
        height={2800}
      />
    </div>
  );
};

export default Cloud;
