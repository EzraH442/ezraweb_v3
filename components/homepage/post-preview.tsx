import React from "react";

import Link from "next/link";
import Image from "next/image";
import { column } from "./triple-column.module.css";
import {
  modifiedColumnHeight,
  postLink,
  date as postDate,
  text,
} from "./personalinfo.module.css";

type PostPreviewProps = {
  title: string;
  date: string;
  headline: string;
  link: string;
  image: string | null;
};

const PostPreview: React.FunctionComponent<PostPreviewProps> = ({
  title,
  date,
  headline,
  link,
  image,
}) => (
  <div className={`${column} ${modifiedColumnHeight}`}>
    <h3>{title}</h3>
    <p className={postDate}>{date}</p>
    <p className={text}>{headline}</p>
    {image ? (
      <Image src={image} alt="" width={300} height={200} layout="responsive" />
    ) : (
      ""
    )}
    <Link href={`/posts/${link}`} passHref>
      <a className={postLink} href="inherit">
        Full Post
      </a>
    </Link>
  </div>
);

export default PostPreview;
