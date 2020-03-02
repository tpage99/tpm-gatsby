import React, { Component } from "react";
import { Link } from "gatsby";

import GetYear from "./getCurrentYear";

export default class footer extends Component {
  render() {
    return (
      <footer>
        <hr />
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
            <div className="footer-contact">
              <p>
                334 E. Kearney St., #116
                <br />
                Springfield, MO 65803
              </p>
              <p>
                <a href="mailto:info@thepagesmedia.com" style={{ color: `#ecf0f1` }}>
                  info@thepagesmedia.com
                </a>
              </p>
              <p>
                <a href="tel:+14174239253" style={{ color: `#ecf0f1` }}>
                  417.423.9253
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="footer-notes">
          <p style={{ marginBottom: `0` }}>
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
          <GetYear />
        </div>
      </footer>
    );
  }
}
