import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";
import * as styles from "./post.module.css";

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div className={styles.page}>
        <article className={styles.postContainer}>
          <h1 className={styles.postTitle}>{data.mdx.frontmatter.title}</h1>
          <h3 className={styles.authorCredit}>
            Written by <span>{data.mdx.frontmatter.author}</span>
          </h3>
          <p className={styles.date}>{data.mdx.frontmatter.date}</p>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
      }
      body
    }
  }
`;

export default BlogPost;
