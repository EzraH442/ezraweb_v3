import Head from "next/head";
import Link from "next/link"; 

import Header from "../components/header";
import Body from "../components/containers/body";
import Footer from "../components/footer";
import * as styles from "../styles/journals.module.css";

type AllJournalProps = {
    allMarkdownRemark: {
        totalCount: number
        edges: any
    }
}

export default function AllJournals({ data }) {
    return (
        <div>
            <Head>
                <title>All Posts</title>
                <meta name="description">All Of Ezra's Journal Posts</meta>
                <meta name="pathname">all-journals</meta>
            </Head>
            <Header />
            <Body backgroundColor="#cfe8a3">
                <div className={styles.container}>
                    <h1 className={styles.title}>All Posts</h1>
                    <p className={styles.postCount}>
                        You can find all
                        {" "}
                        {data.allMarkdownRemark.totalCount}
                        {" "}
                        posts below:
                    </p>
                    <hr className={styles.line} />
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <Link
                            to={node.fields.slug}
                            key={node.id}
                            className={styles.link}
                        >
                            <div>
                                <h3>
                                    {node.frontmatter.title}
                                    {" - "}
                                    {node.frontmatter.date}
                                </h3>

                                <p>{node.frontmatter.headline}</p>
                            </div>
                        </Link>

                    ))}
                </div>
            </Body>
            <Footer />
        </div>
    );
}

export const query = `
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            headline
          }
          fields {
              slug
          }
        }
      }
    }
  }
`;
