import React from "react";

import * as styles from "./personalinfo.module.css";
import { columns } from "./triple-column.module.css";

import PostPreview from "./post-preview";
import { PostData } from "../../lib/api";

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
        <PostPreview
          title={post.metadata.title!}
          key={post.metadata.date}
          date={post.metadata.date}
          headline={post.metadata.headline!}
          link={post.context.slug}
          image={
            post.metadata.featuredImage ? post.metadata.featuredImage : null
          }
        />
      ))}
    </div>
  </div>
);

export default PersonalInfo;
