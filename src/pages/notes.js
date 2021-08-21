import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";

const NotesPage = ({ data }) => {
  const nodes = data.allMdx.nodes;
  return (
    <Layout>
      <div>
        {nodes.map((node) => {
          return (
            <article key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <p>{node.frontmatter.date}</p>
              <MDXRenderer>{node.body}</MDXRenderer>
            </article>
          );
        })}
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

export default NotesPage;
