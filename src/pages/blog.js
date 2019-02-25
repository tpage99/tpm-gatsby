import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/Navbar';
import HomeIcon from '../components/HomeIcon/HomeIcon';
import Appnav from '../components/Navbar/AppNav';
import Container from '../components/container';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import '../assets/main.css';

export default function BlogPage({ data }) {
  return (
    <div style={{ height: `100%` }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog | thePagesMedia</title>
        <link rel="canonical" href="https://www.thepagesmedia.com/blog" />
        <meta
          name="description"
          content="A collection of writings designed to help our readers learn more about us, our services, and the people we work with."
        />
        <html lang="en" />
        <meta name="docsearch:version" content="2.0" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
      </Helmet>
      <Navbar />
      <HomeIcon />
      <main>
        <Container>
          <h1 style={{ textAlign: `center` }}>just some stuff we wrote.</h1>
          <ul>
            {data.allMarkdownRemark.edges.map(post => (
              <li
                className="blog-card"
                style={{ listStyleType: `none` }}
                key={post.node.id}
              >
                <Link
                  to={post.node.frontmatter.path}
                  style={{ textDecoration: `none` }}
                >
                  <h3 className="blog-title">{post.node.frontmatter.title}</h3>
                  <p className="blog-date">{post.node.frontmatter.date}</p>
                  <p className="blog-description">
                    {post.node.frontmatter.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Appnav />
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 100) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date
            description
          }
        }
      }
    }
  }
`;
