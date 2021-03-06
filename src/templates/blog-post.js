import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import HeroNav from "../components/Navbar/HeroNav";
import BlogContainer from "../components/BlogContainer/BlogContainer";
import Footer from "../components/footer";

import "../assets/main.css";

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  // above is same as using const post = data.markdownRemark;
  const { site: domain } = data;
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <link rel="canonical" href={`${domain.siteMetadata.siteUrl}${post.frontmatter.path}`} />
        <meta name="docsearch:version" content="2.0" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover" />
        <meta name="description" content={post.frontmatter.description} />

        <meta property="og:url" content={post.frontmatter.path} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="The Pages Media" />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/tpage99/image/upload/v1550803731/web%20assets/highfive2.jpg"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@taylorpage99" />
        <meta name="twitter:description" content={post.frontmatter.description} />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/tpage99/image/upload/v1550803731/web%20assets/highfive2.jpg"
        />

        <meta name="google-site-verification" content="1R4rFQpnixwUVi2dmzSl37vwdeyFFoC69PRMC5H5edY" />
      </Helmet>
      <HeroNav />
      <main>
        <BlogContainer>
          <h1 className="post-header">{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} className="blog" style={{ paddingBottom: `3rem` }} />
        </BlogContainer>
      </main>
      <Footer />
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
        description
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
