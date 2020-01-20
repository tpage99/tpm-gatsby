import React, { Component } from "react";
import { Link } from "gatsby";

import Container from "../components/container";
import Appnav from "../components/Navbar/AppNav";
import SiteMetadata from "../components/Site-Metadata";
import "../assets/main.css";
import LandingImage from "../components/landingImage";

export default class index extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <main>
          <Container>
            <div style={{ maxWidth: `90%`, margin: `auto` }}>
              <LandingImage />
            </div>
            <section style={{ textAlign: `center`, margin: `2rem 0rem` }}>
              <p className="hero-text">
                We offer <span style={{ fontStyle: `italic`, fontWeight: `bold` }}>digital solutions</span> for
                businesses to solve their biggest problems - meeting their customers where they are. We leverage
                software and technology to help you cut costs while increasing your exposure.
              </p>
              <div className="feature-card">
                <h2>dig·i·tal so·lu·tions</h2>
                <p style={{ marginTop: `0`, fontStyle: `italic`, fontSize: `2rem` }}>/ˈdijidl/ /səˈlo͞oSH(ə)nz/</p>
                <p>
                  Virtual or electronic products or software that help solve real world problems in a consistent,
                  economic, and reliable manner. Websites, social media, content strategy, search engine optimization
                  (SEO), business software as a service, and progressive web apps are all examples of digital solutions.
                </p>
              </div>
            </section>
            <section className="grid-sec">
              <div
                className="pic-card"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1579377634/web%20assets/jordanvalleyoverlay.png)`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`
                }}
              >
                <Link to="/services" className="pic-header">
                  SERVICES
                </Link>
              </div>
              <div
                className="pic-card"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1579377645/web%20assets/gilliozoverlay.png)`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`
                }}
              >
                <Link to="/about" className="pic-header">
                  ABOUT
                </Link>
              </div>
              <div
                className="pic-card"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1579377650/web%20assets/downtownoverlay.png)`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`
                }}
              >
                <Link to="/blog" className="pic-header">
                  BLOG
                </Link>
              </div>
              <div
                className="pic-card"
                style={{
                  backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1579377654/web%20assets/conventionoverlay.png)`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`
                }}
              >
                <Link to="/contact" className="pic-header">
                  CONTACT
                </Link>
              </div>
            </section>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
