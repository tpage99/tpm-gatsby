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
              <p style={{ padding: `3rem`, fontSize: `2rem`, lineHeight: `2rem` }}>
                We offer <span style={{ fontStyle: `italic`, fontWeight: `bold` }}>digital solutions</span> for
                businesses to solve their biggest problems - meeting their customers where they are. We leverage
                software and technology to help you cut costs while increasing your exposure.
              </p>
              <div
                style={{
                  backgroundColor: `#CC5529`,
                  padding: `2rem 1rem 0.5rem`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
                  maxWidth: `75%`,
                  margin: `auto`,
                  color: `#ECF0F1`
                }}
              >
                <h2 style={{ marginBottom: `0`, fontWeight: `bold`, fontSize: `2rem` }}>dig·i·tal so·lu·tions</h2>
                <p style={{ marginTop: `0`, fontStyle: `italic`, fontSize: `1.5rem` }}>/ˈdijidl/ /səˈlo͞oSH(ə)nz/</p>
                <p>
                  Virtual or electronic products or software that help solve real world problems in a consistent,
                  economic, and reliable manner. Websites, social media, content strategy, search engine optimization
                  (SEO), business software as a service, and progressive web apps are all examples of digital solutions.
                </p>
              </div>
            </section>
            <section
              style={{
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr 1fr`,
                gridRowGap: `1rem`,
                gridColumnGap: `1rem`
              }}
            >
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#2980B9`,
                  backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1579377634/web%20assets/jordanvalleyoverlay.png)`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`
                }}
              >
                <Link
                  to="/services"
                  style={{
                    textDecoration: `none`,
                    fontSize: `5rem`,
                    color: `#ECF0F1`,
                    textShadow: `rgba(0, 0, 0, 0.67) 5px 5px 8px`
                  }}
                >
                  SERVICES
                </Link>
              </div>
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#2980B9`,
                  backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1579377645/web%20assets/gilliozoverlay.png)`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`
                }}
              >
                <Link
                  to="/about"
                  style={{
                    textDecoration: `none`,
                    fontSize: `5rem`,
                    color: `#ECF0F1`,
                    textShadow: `rgba(0, 0, 0, 0.67) 5px 5px 8px`
                  }}
                >
                  ABOUT
                </Link>
              </div>
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#2980B9`,
                  backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1579377650/web%20assets/downtownoverlay.png)`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`
                }}
              >
                <Link
                  to="/blog"
                  style={{
                    textDecoration: `none`,
                    fontSize: `5.3rem`,
                    color: `#ECF0F1`,
                    textShadow: `rgba(0, 0, 0, 0.67) 5px 5px 8px`
                  }}
                >
                  BLOG
                </Link>
              </div>
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#2980B9`,
                  backgroundImage: `url(https://res.cloudinary.com/tpage99/image/upload/v1579377654/web%20assets/conventionoverlay.png)`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`
                }}
              >
                <Link
                  to="/contact"
                  style={{
                    textDecoration: `none`,
                    fontSize: `4.8rem`,
                    color: `#ECF0F1`,
                    position: `relative`,
                    textShadow: `rgba(0, 0, 0, 0.67) 5px 5px 8px`
                  }}
                >
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
