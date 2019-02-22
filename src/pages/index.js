import React, { Component } from 'react';
import Container from '../components/container';
import Navbar from '../components/Navbar/Navbar';
import Appnav from '../components/Navbar/AppNav';
import { Link } from 'gatsby';
import SiteMetadata from '../components/Site-Metadata';
import '../assets/main.css';

export default class index extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <Navbar />
        <main className="home">
          <Container>
            <div>
              <div className="grid">
                <div className="text-block">
                  <h1>hi! we're the pages.</h1>
                  <p>
                    We're a married couple living in the Springfield area that
                    enjoys helping companies we love become more accessible to
                    others. <br />
                    <br />
                    We provide social media and web based solutions that help
                    put local businesses within easy reach of people in the
                    Springfield area, even if they don't know you yet.
                  </p>
                </div>
                <div className="img-fluid">
                  <img
                    src="https://res.cloudinary.com/tpage99/image/upload/v1550802820/web%20assets/website_1-2.jpg"
                    alt="kendra and taylor"
                    className="feature-img"
                  />
                </div>
              </div>
            </div>
          </Container>
          <div>
            <h1 className="divider">check out some of the stuff we do.</h1>
          </div>
          <Container>
            <div className="grid">
              <div className="img-fluid">
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546752856/web%20assets/KLSiteSkewedShadow.png"
                  alt="kevin lane's catering website snapshot"
                />
              </div>
              <div className="text-front">
                <h2>websites.</h2>
                <p>
                  Websites are your digital storefront and a great way to make a
                  first impression with potential customers. We specialize in
                  static websites for local businesses. Low overhead, secure
                  websites that load very quickly.
                </p>
                <Link to="/services">
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
            <div className="grid">
              <div className="img-fluid">
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546752861/web%20assets/photo_layers_3.png"
                  alt="examples of created content/media"
                />
              </div>
              <div className="start-text">
                <h2>content creation.</h2>
                <p className="text-block">
                  Do you need to communicate some boring or routine information
                  but want to do it in a way that is appealing and encourages
                  interaction with customers? Because we do the whole pictures
                  and text thing to make your potluck at least look like it's
                  going to be really cool.
                </p>
                <Link to="/services">
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
            <div className="grid">
              <div className="img-fluid">
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546752858/web%20assets/FBSiteSkewedShadow.png"
                  alt="cash saver 417 facebook page"
                />
              </div>
              <div className="text-front">
                <h2>social media.</h2>
                <p>
                  We can help you set up and establish a social media presence.
                  It's not just about having a personal Facebook page but rather
                  having a specially crafted strategy that's geared towards
                  engagement.
                </p>
                <Link to="/services">
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
