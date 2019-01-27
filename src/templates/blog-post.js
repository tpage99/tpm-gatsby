import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Container from '../components/container';
import { Link } from 'gatsby';
import '../assets/main.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  //above is same as using const post = data.markdownRemark;
  return (
    <div>
      <Navbar />
      <main>
        <Container>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Container>
      </main>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
