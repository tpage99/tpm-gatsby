import React from 'react';
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
      <Navbar />
      <HomeIcon />
      <main>
        <Container>
          <h1 style={{ textAlign: `center` }}>just some stuff we wrote.</h1>
          <ul>
            {data.allMarkdownRemark.edges.map(post => (
              <li className="blog-card grow" style={{ listStyleType: `none` }}>
                <Link
                  key={post.node.id}
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
