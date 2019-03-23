import React from 'react';
import { Helmet } from 'react-helmet';
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
