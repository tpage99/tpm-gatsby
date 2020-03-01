import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import HeroNav from "../components/Navbar/HeroNav";
import BlogContainer from "../components/BlogContainer/BlogContainer";
import Footer from "../components/footer";

import "../assets/main.css";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
      }
      title
      slug {
        current
      }
      _rawBody
    }
  }
`;

const BlogPostTemplate = props => {
  const { data, errors } = props;
  const post = data && data.post;
  return (
    <>
      <HeroNav />
      <BlogContainer>
        {errors && <SEO title="GraphQL Error" />}
        {post && <SEO title={post.title || "Untitled"} />}

        {errors && (
          <div>
            <h1>Whoops! Something went terribly wrong...</h1>
          </div>
        )}

        {post && <BlogPost {...post} />}
      </BlogContainer>
      <Footer />
    </>
  );
};

export default BlogPostTemplate;
