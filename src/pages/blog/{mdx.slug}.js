import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";
import * as styles from "./post.module.css";

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <div className={styles.page}>
        <p>{data.mdx.frontmatter.date}</p>
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.frontmatter.author}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
