import React, { Component } from 'react';
import { Link } from 'gatsby';

import Container from '../components/container';
import Appnav from '../components/Navbar/AppNav';
import SiteMetadata from '../components/Site-Metadata';
import '../assets/main.css';

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
                objectFit: `cover`,
                textAlign: `center`,
              }}
            >
              <h1
                style={{
                  paddingTop: `20rem`,
                  fontSize: `4.5rem`,
                  color: `white`,
                  textShadow: `rgba(0, 0, 0, 0.67) 5px 5px 8px`,
                  textAlign: `center`,
                }}
              >
                the pages media
              </h1>
            </div>
            <section style={{ textAlign: `center`, margin: `2rem 0rem` }}>
              <p>
                We offer <span style={{ fontStyle: `italic`, fontWeight: `bold` }}>digital solutions</span> for local
                businesses to solve their biggest problems - like meeting their customers where they are. We work to
                help you cut costs while increasing your exposure in our local 417 market.
              </p>
              <div
                style={{
                  backgroundColor: `orange`,
                  padding: `2rem 1rem 0.5rem`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
                }}
              >
                <h2 style={{ marginBottom: `0`, fontWeight: `bold`, fontSize: `2rem` }}>dig·i·tal so·lu·tions</h2>
                <p style={{ marginTop: `0`, fontStyle: `italic`, color: `gray` }}>/ˈdijidl/ /səˈlo͞oSH(ə)n/</p>
                <p>
                  Virtual or electronic products that help solve real world problems in a consistent, economic, and
                  reliable manner. Websites, social media, content strategy, search engine optimization (SEO), business
                  software as a service, and progressive web apps are all examples of digital solutions.
                </p>
              </div>
            </section>
            <section style={{ display: `grid`, gridTemplateColumns: `1fr 1fr 1fr 1fr` }}>
              <div style={{ gridColumn: `span 2` }}>
                <h2>services</h2>
              </div>
              <div style={{ gridColumn: `span 2` }}>
                <h2>about</h2>
              </div>
              <div style={{ gridColumn: `span 2` }}>
                <h2>blog</h2>
              </div>
              <div style={{ gridColumn: `span 2` }}>
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
