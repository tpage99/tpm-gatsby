import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeIcon from '../components/HomeIcon/HomeIcon';
import Appnav from '../components/Navbar/AppNav';
import BlogContainer from '../components/BlogContainer/BlogContainer';
import { graphql } from 'gatsby';
import '../assets/main.css';

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  //above is same as using const post = data.markdownRemark;
  return (
    <div>
      <Navbar />
      <HomeIcon />
      <main>
        <BlogContainer>
          <h1>{post.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="simple-link blog-link"
          />
        </BlogContainer>
      </main>
      <Appnav />
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
