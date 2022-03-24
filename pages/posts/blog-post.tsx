import Head from "next/head";
import Image from "next/image";

import Header from "../../components/header";
import Body from "../../components/containers/body";
import Footer from "../../components/footer";
import * as styles from "./blog-post.module.css";
import Link from "next/link";


type BlogPostProps = {
    pageContext: {
        next: string,
        previous: string,
        current: string
    }
    data: {
        markdownRemark: {
            frontmatter: {
                title: string,
                date: string,
                featuredImage: string,
                headline: string
            }
            html: any,
        }
    }
}

export default function BlogPost({ data, pageContext }: BlogPostProps) {
    const { frontmatter, html } = data.markdownRemark;
    const { current, next, previous } = pageContext;
    const image = getImage(frontmatter.featuredImage);
    return (
        <div>
            <Head>
                <title>{frontmatter.title}</title>
                <meta name="description">{frontmatter.headline}</meta>
                <meta property="og:type" content="article" />
                {
                /* 
                image={frontmatter.featuredImage
                    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData.images.sizes
                    : null}
                pathname={current}
                article
                TODO: implement this stuff
                */
                }
            </Head>
            <Header />
            <Body backgroundColor="#cfe8a3">
                <div className={styles.container}>
                    <h1 className={styles.title}>{frontmatter.title}</h1>
                    <p className={styles.date}>{frontmatter.date}</p>
                    <div className={styles.content} dangerouslySetInnerHTML={{ __html: html }} />
                    <Image src={image} alt="" className={styles.image}></Image>
                    <div className={styles.links}>
                        <Link href={next}>
                            {"<<< "}
                            Next Post
                        </Link>
                    </div>
                    <div className={styles.links}>
                        <Link href={previous}>
                            {">>> "}
                            Previous Post
                        </Link>
                    </div>
                </div>
            </Body>
            <Footer />
        </div>

    );
}