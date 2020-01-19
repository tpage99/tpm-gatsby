import React, { Component } from "react";
import { Link } from "gatsby";

export default class footer extends Component {
  render() {
    return (
      <footer>
        <section style={{ textAlign: `center`, margin: `2rem 0rem 4rem`, alignContent: `center` }}>
          <h3 style={{ fontSize: `2.5rem`, lineHeight: `2rem`, fontWeight: `bold`, paddingTop: `2rem` }}>
            let's meet.
          </h3>
          <p style={{ padding: `0 1.5rem`, lineHeight: `1.75rem` }}>
            Website design and development, social media strategy and implementation, and small business headache
            resolutions are all strategized and built right here in the local Springfield area. If you'd like to meet to
            go over your business pain-points and talk about some potential ways to fix them, we'd love to meet. Even if
            just for coffee and consultation, we are enthusiastic about helping local businesses solve problems. Give us
            a call or send us a message. Consultations are free and no obligation.
          </p>
          <p style={{ fontSize: `2rem`, padding: `0 1.5rem 2rem` }}>
            We would love to be a part of the next big thing you're working on.
          </p>
          <Link
            to="/contact"
            style={{
              backgroundColor: `#CC5529`,
              padding: `2rem`,
              boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
              maxWidth: `60%`,
              fontSize: `2rem`,
              color: `#ECF0F1`,
              textDecoration: `none`
            }}
          >
            Start Today!
          </Link>
        </section>
        <section
          style={{
            display: `grid`,
            gridTemplateColumns: `1fr 1fr 1fr`,
            marginTop: `1rem`,
            padding: `2rem 1rem`,
            backgroundColor: `#2980B9`,
            color: `#ECF0F1`
          }}
        >
          <div style={{ paddingLeft: `2rem` }}>
            <h3 style={{ marginBottom: `0.75rem` }}>pages</h3>
            <Link to="/" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
              home
            </Link>
            <Link to="/about" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
              about
            </Link>
            <Link to="/services" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
              services
            </Link>
            <Link to="/blog" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
              blog
            </Link>
            <Link to="/contact" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
              contact
            </Link>
          </div>
          <div>
            <h3 style={{ marginBottom: `0.75rem` }}>legal</h3>
            <Link to="/a11y" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
              accessibility statement
            </Link>
            <Link to="/terms-and-conditions" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
              terms and conditions
            </Link>
            <Link to="/privacy-policy" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
              privacy policy
            </Link>
          </div>
          <div style={{ lineHeight: `1rem` }}>
            <h3 style={{ marginBottom: `0.75rem` }}>contact</h3>
            <p style={{ fontSize: `1rem` }}>
              334 E. Kearney St., #116
              <br />
              Springfield, MO 65803
            </p>
            <p style={{ fontSize: `1rem` }}>info@thepagesmedia.com</p>
            <p style={{ fontSize: `1rem` }}>417.423.9253</p>
          </div>
        </section>
        <p style={{ backgroundColor: `#2980B9`, color: `#ECF0F1`, textAlign: `center`, fontSize: `1rem` }}>
          Made in Southwest Missouri. Built with{" "}
          <a href="https://gatsbyjs.org/" target="_blank" rel="noopener no referrer" style={{ color: `#ECF0F1` }}>
            GatsbyJS
          </a>{" "}
          and hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noopener no referrer" style={{ color: `#ECF0F1` }}>
            Netlify
          </a>
          .
        </p>
      </footer>
    );
  }
}
