import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const LandingImage = () => (
  <StaticQuery
    query={graphql`
      query {
        landingImage: file(relativePath: { eq: "highfive.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.landingImage.childImageSharp.fluid}
        alt="taylor and kendra high-fiving seated in front of computer. text that says the pages media"
      />
    )}
  />
);
export default LandingImage;
