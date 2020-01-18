import React, { Component } from "react";
import { Link } from "gatsby";

export default class footer extends Component {
  render() {
    return (
      <footer>
        <section style={{ textAlign: `center`, margin: `2rem 0rem 4rem`, alignContent: `center` }}>
          <h3 style={{ fontSize: `3rem`, lineHeight: `2rem`, fontWeight: `bold`, paddingTop: `2rem` }}>let's meet.</h3>
          <p style={{ padding: `0 1.5rem 2rem`, lineHeight: `1.75rem` }}>
            Websites design and development, social media strategy and implementation, small business headache
            resolutions, are all strategized and built right here in the local Springfield area. If you'd like to meet
            to go over your business pain-points to talk about some potential ways to fix them, we'd love to meet. Or
            even if just for coffee, we love helping local businesses solve problems. Give us a call or send us a
            message. Consultations are free and no obligation.
          </p>
          <Link
            to="/contact"
            style={{
              backgroundColor: `orange`,
              padding: `2rem`,
              boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
              maxWidth: `60%`,
              fontSize: `2rem`,
              color: `white`,
              textDecoration: `none`
            }}
          >
            CTA - Do it!
          </Link>
        </section>
        <section
          style={{
            display: `grid`,
            gridTemplateColumns: `1fr 1fr 1fr`,
            marginTop: `1rem`,
            padding: `2rem 1rem`,
            backgroundColor: `blue`,
            color: `white`
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
      </footer>
    );
  }
}
