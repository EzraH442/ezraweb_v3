import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Head from "next/head";

import { ParsedUrlQuery } from "querystring";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllPostSlugs, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

import Layout from "../../components/Layout";
import { PostData } from "../../types/post";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import formatDate from "../../lib/util";

type PostPageProps = {
  post: {
    post: PostData;
    content: string;
  };
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<PostPageProps, Params> = async (
  context,
) => {
  const post = getPostBySlug(context.params!.slug, [
    "title",
    "featuredImage",
    "archive",
  ]);
  const content = await markdownToHtml(post.content || "");

  return { props: { post: { post, content } } };
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const postSlugs = getAllPostSlugs();

  return {
    paths: postSlugs.map((post) => ({
      params: { slug: post },
    })),
    fallback: false,
  };
};

const Post: NextPage<PostPageProps> = ({ post }) => (
  <div>
    <Head>
      <title>{`${post.post.metadata.title} | EZ`}</title>
      <meta name="description" content={post.post.metadata.headline} />
      <meta property="og:type" content="article" />
      <link rel="icon" href="/favicon.ico" />
      {post.post.metadata.featuredImage && (
        <meta property="og:image" content={post.post.metadata.featuredImage} />
      )}
    </Head>
    <Layout className="ml-4">
      <a
        className="flex justify-start items-center hover:underline decoration-secondary"
        href={post.post.context.previousSlug}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} width={12} />
        <p className="pl-2 my-2">Previous Post</p>
      </a>

      <article className="prose mx-auto max-w-4xl">
        <div className="not-prose">
          <h1 className="text-3xl font-thin inline mr-6 text-secondary">
            {post.post.metadata.title}
          </h1>
          <FontAwesomeIcon icon={faPencil} width={12} className="inline mr-2" />
          <h2 className="inline">
            {formatDate(new Date(post.post.context.date))}
          </h2>
        </div>
        <hr />
        {post.post.metadata.featuredImage && (
          <img src={post.post.metadata.featuredImage} alt="" />
        )}
        <div
          className="mx-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <div className="flex justify-end">
        <a
          className="flex justify-start items-center hover:underline decoration-secondary"
          href={post.post.context.nextSlug}
        >
          <p className="pr-1 my-2">Next Post</p>
          <FontAwesomeIcon icon={faChevronCircleRight} width={12} />
        </a>
      </div>
    </Layout>
  </div>
);
export default Post;
