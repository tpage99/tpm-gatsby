import React, { Component } from "react";
import { Link } from "gatsby";

export default class footer extends Component {
  render() {
    return (
      <footer>
        <hr
          style={{
            display: `block`,
            marginLeft: `auto`,
            marginRight: `auto`,
            border: `0`,
            borderTop: `1px solid gray`,
            margin: `3rem 0 0`
          }}
        />
        <section style={{ textAlign: `center`, margin: `2rem 0rem 4rem`, alignContent: `center` }}>
          <h3 style={{ fontSize: `4rem`, lineHeight: `2rem`, fontWeight: `bold`, paddingTop: `2rem` }}>let's meet.</h3>
          <p style={{ padding: `0 1.5rem`, fontSize: `1.75rem`, lineHeight: `2rem` }}>
            Website design and development, social media strategy and implementation, and small business headache
            resolutions are all strategized and built right here in the local Springfield area. If you'd like to meet to
            go over your business pain-points and talk about some potential ways to fix them, we'd love to meet. Even if
            just for coffee and consultation, we are enthusiastic about helping local businesses solve problems. Give us
            a call or send us a message. Consultations are free and no obligation.
          </p>
          <p className="footer-hero">We would love to be a part of the next big thing you're working on.</p>
          <Link
            to="/contact"
            style={{
              backgroundColor: `#CC5529`,
              padding: `2rem`,
              boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
              maxWidth: `60%`,
              fontSize: `3rem`,
              color: `#ECF0F1`,
              textDecoration: `none`
            }}
          >
            <strong>Start Today!</strong>
          </Link>
        </section>
        <section className="footer-grid">
          <div className="footer-pages">
            <h3>pages</h3>
            <div style={{ fontSize: `1.25rem` }}>
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
          </div>
          <div>
            <h3>legal</h3>
            <div style={{ fontSize: `1.25rem` }}>
              <Link to="/legal/a11y" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
                accessibility statement
              </Link>
              <Link
                to="/legal/terms-and-conditions"
                style={{ display: `block`, textDecoration: `none`, color: `white` }}
              >
                terms and conditions
              </Link>
              <Link to="/legal/privacy-policy" style={{ display: `block`, textDecoration: `none`, color: `white` }}>
                privacy policy
              </Link>
            </div>
          </div>
          <div>
            <h3>contact</h3>
            <div style={{ fontSize: `1.25rem`, lineHeight: `1.5rem` }}>
              <p>
                334 E. Kearney St., #116
                <br />
                Springfield, MO 65803
              </p>
              <p>info@thepagesmedia.com</p>
              <p>417.423.9253</p>
            </div>
          </div>
        </section>
        <p className="footer-notes">
          Made in Southwest Missouri. Built with{" "}
          <a href="https://gatsbyjs.org/" target="_blank" rel="noopener no referrer" style={{ color: `#ECF0F1` }}>
            GatsbyJS
          </a>{" "}
          🚀 and hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noopener no referrer" style={{ color: `#ECF0F1` }}>
            Netlify
          </a>
          .
        </p>
      </footer>
    );
  }
}
