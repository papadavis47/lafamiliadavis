import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
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
                <h1>
                  <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
                </h1>
                <p>{node.frontmatter.date}</p>
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
        slug
      }
    }
  }
`;

export default BlogPage;