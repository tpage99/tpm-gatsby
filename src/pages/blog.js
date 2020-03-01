import React from "react";
import { graphql } from "gatsby";
import { mapEdgesToNodes, filterOutDocsWithoutSlugs, filterOutDocsPublishedInTheFuture } from "../lib/helpers";
import Container from "../components/container";

import SEO from "../components/seo";
import HeroNav from "../components/Navbar/HeroNav";

import "../assets/main.css";

export const query = graphql`
  query IndexPageQuery {
    allSanityPost(filter: { slug: { current: {} } }) {
      edges {
        node {
          title
          _rawAuthor
          _rawBody
          _rawSlug
        }
      }
    }
  }
`;

const BlogPage = props => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Container>
        <h1>Whoops! Something went horribly wrong...</h1>
      </Container>
    );
  }

  const { site } = data || {};
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <HeroNav />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
        {projectNodes}
      </Container>
    </>
  );
};

export default BlogPage;
