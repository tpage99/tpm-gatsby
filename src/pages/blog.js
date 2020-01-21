import React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";

import HeroNav from "../components/Navbar/HeroNav";
import Container from "../components/container";

import "../assets/main.css";

export default function BlogPage({ data }) {
  return (
    <div style={{ height: `100%` }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | The Pages Media</title>
        <link rel="canonical" href="https://www.thepagesmedia.com/blog" />
        <meta
          name="description"
          content="A collection of writings designed to help our readers learn more about us, our services, and the people we work with."
        />
        <html lang="en" />
        <meta name="docsearch:version" content="2.0" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
      </Helmet>
      <HeroNav />
      <main>
        <Container>
          <h1 style={{ textAlign: `center` }}>just some stuff we wrote.</h1>
          <section style={{ margin: `auto` }}>
            <div className="blog-grid">
              {data.allMarkdownRemark.edges.map(post => (
                <article className="blog-card" key={post.node.id}>
                  <h3 className="emHeader" style={{ marginBottom: `0` }}>
                    {post.node.frontmatter.title}
                  </h3>
                  <p style={{ marginTop: `0` }}>
                    <em>Last updated {post.node.frontmatter.date}</em>
                  </p>
                  <p style={{ paddingBottom: `1rem`, fontSize: `1.25rem`, lineHeight: `1.5rem` }}>
                    {post.node.frontmatter.description}
                  </p>
                  <Link
                    to={post.node.frontmatter.path}
                    style={{
                      textDecoration: `none`,
                      backgroundColor: `#2980b9`,
                      color: `white`,
                      fontSize: `1.5rem`,
                      padding: `0.5rem 1rem`
                    }}
                  >
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 100, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
