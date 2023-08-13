import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Head from "next/head";
import Image from "next/legacy/image";

import { ParsedUrlQuery } from "querystring";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAllPostSlugs, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

import Divider from "../../components/Divider/Divider";
import Layout from "../../components/Layout";
import { PostData } from "../../types/post";
import { ebGaramond } from "../../constants/fonts";

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
    "date",
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
      <div className="flex justify-start">
        <a
          href={post.post.context.previousSlug}
          className="px-8 py-2 hover:underline decoration-secondary"
        >
          {"<<< \xa0 Previous Post"}
        </a>
      </div>
      <article className="prose mx-auto">
        <div className="not-prose">
          <h1 className="text-3xl font-thin inline mr-6">
            {post.post.metadata.title}
          </h1>
          <FontAwesomeIcon icon={faPencil} width={12} className="inline mr-2" />
          <h2 className="inline">{post.post.metadata.date}</h2>
        </div>
        <hr />
        {post.post.metadata.featuredImage && (
          <Image
            src={post.post.metadata.featuredImage}
            alt=""
            layout="responsive"
            width={800}
            height={600}
          />
        )}
        <div
          className="max-w-2xl mx-5"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <div className="flex justify-end">
        <a
          href={post.post.context.nextSlug}
          className="px-8 py-2 hover:underline decoration-secondary"
        >
          {"Next Post \xa0 >>>"}
        </a>
      </div>
    </Layout>
  </div>
);
export default Post;
