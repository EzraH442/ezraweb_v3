import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { PostData } from "../../types/post";

const BlogCard: React.FC<{ post: PostData }> = ({ post }) => {
  return (
    <Link href={`/posts/${post.context.slug}`} key={post.context.date}>
      <div className="my-3 hover:cursor-pointer hover:underline decoration-cyan-300">
        <div className="flex">
          <h3 className="font-sans text-lg inline text-accent">
            {post.metadata.title}
          </h3>
          <FontAwesomeIcon
            icon={faPencil}
            width={16}
            className="inline ml-2 mr-1 text-cyan-300"
          />
          <h3 className="font-sans text-lg inline text-cyan-300">
            {post.context.date}
          </h3>
        </div>
        <p className="font-sans">{post.metadata.headline}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
