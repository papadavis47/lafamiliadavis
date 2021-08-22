import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import * as styles from "./blog.module.css";

const BlogPage = ({ data }) => {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.blogTitle}>Davis Family Blog Posts</h1>
        <main className={styles.blogList}>
          {nodes.map((node) => {
            return (
              <article key={node.id}>
                <h1>{node.frontmatter.title}</h1>
                <p>{node.frontmatter.date}</p>
                <MDXRenderer>{node.body}</MDXRenderer>
                <div className={styles.underline}></div>
              </article>
            );
          })}
        </main>
      </div>
    </Layout>
  );
};

// export const query = graphql`
//   {
//     allFile(filter: { sourceInstanceName: { eq: "notes" } }) {
//       nodes {
//         name
//       }
//       totalCount
//     }
//   }
// `;

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM Do, YYYY")
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
