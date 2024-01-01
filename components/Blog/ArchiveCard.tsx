import React from "react";
import Link from "next/link";
import { PostData } from "../../types/post";

const ArchiveCard: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Link href={`/posts/${post.context.slug}`} key={post.context.date}>
      <div className="my-3 hover:cursor-pointer hover:underline decoration-cyan-300">
        <h3 className="font-sans text-lg inline text-cyan-300">
          {` [archive] `}
        </h3>
        <h3 className="font-sans text-lg inline">{`${post.metadata.title} - ${post.context.date}`}</h3>
        <p className="font-sans">{post.metadata.headline}</p>
      </div>
    </Link>
  );
};

export default ArchiveCard;
