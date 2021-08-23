import * as React from "react";
import { Link, graphql } from "gatsby";
import Intro from "../../components/Intro";
import Layout from "../../components/Layout";
import * as styles from "./blogIndex.module.css";

const BlogPage = ({ data }) => {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      <div className={styles.container}>
        {/* <h1 className={styles.blogTitle}>Davis Family Blog Posts</h1> */}
        <Intro name='Davis Family Blog Posts' emoji='⌨️' label='Computer Keyboard Emoji' />
        <main className={styles.blogList}>
          {nodes.map((node) => {
            return (
              <article key={node.id}>
                <h1>
                  <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
                </h1>
                <p className={styles.description}>{node.frontmatter.description}</p>
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
          description
          date(formatString: "MMMM Do, YYYY")
        }
        id
        slug
      }
    }
  }
`;

export default BlogPage;
