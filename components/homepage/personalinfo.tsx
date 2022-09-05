import React from "react";

import Image from "next/image";
import * as styles from "./personalinfo.module.css";
import { columns } from "./triple-column.module.css";

import { PostData } from "../../lib/api";
import Column from "./column";
import TextButton from "./TextButon";

const PersonalInfo: React.FunctionComponent<{ posts: PostData[] }> = ({
  posts,
}) => (
  <div className={styles.info}>
    <h2 className={styles.title}>About Me</h2>

    <p className={styles.description}>
      I&apos;m an IBDP student at Western Canada High School. I am usually
      pretty busy. You can read about my life here.
    </p>

    <hr />

    <div className={columns}>
      {posts.map((post) => (
        <Column key={post.metadata.date} height="auto">
          <div className="px-4 py-4">
            <h3>{post.metadata.title!}</h3>
            <p className="mx-4 my-2">{post.metadata.date}</p>
            <p className="basis-72 mx-3">{post.metadata.headline}</p>
            {post.metadata.featuredImage && (
              <Image
                src={post.metadata.featuredImage}
                alt=""
                width={300}
                height={200}
                layout="responsive"
              />
            )}
            <div className="px-3 py-7">
              <TextButton
                href={`/posts/${post.context.slug}`}
                label="Full Post"
              />
            </div>
          </div>
        </Column>
      ))}
    </div>
  </div>
);

export default PersonalInfo;
