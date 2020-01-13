import React, { Component } from "react";
import { Link } from "gatsby";

import Container from "../components/container";
import Appnav from "../components/Navbar/AppNav";
import SiteMetadata from "../components/Site-Metadata";
import "../assets/main.css";

export default class index extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <main>
          <Container>
            <div
              style={{
                width: `100%`,
                height: `100vh`,
                backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1550803731/web%20assets/highfive2.jpg)`,
                backgroundPosition: `center center`,
                backgroundRepeat: `no-repeat`,
                objectFit: `cover`
              }}
            >
              <h1>the pages media</h1>
            </div>
            <section>
              <div>
                <h2>services</h2>
              </div>
              <div>
                <h2>about</h2>
              </div>
              <div>
                <h2>blog</h2>
              </div>
              <div>
                <h2>contact</h2>
              </div>
            </section>
            <footer>
              <h3>pages</h3>
              <ul>
                <li>home</li>
                <li>about</li>
                <li>services</li>
                <li>blog</li>
                <li>contact</li>
              </ul>
              <h3>legal</h3>
              <ul>
                <li>accessibility statement</li>
                <li>terms and conditions</li>
                <li>privacy policy</li>
              </ul>
              <h3>contact</h3>
              <p>the pages media</p>
              <p>334 E. Kearney St., #116</p>
              <p>Springfield, MO 65803</p>
              <p>info@thepagesmedia.com</p>
              <p>417.423.9253</p>
            </footer>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
