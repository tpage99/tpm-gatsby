import React, { Component } from 'react';
import { Link } from 'gatsby';
import Container from '../components/container';
import Navbar from '../components/Navbar/Navbar';
import Appnav from '../components/Navbar/AppNav';
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
            <div style={{ textAlign: `center`, marginTop: `4rem` }}>
              <h1>websites.</h1>
              <h1>social media.</h1>
              <h1>online presence.</h1>
              <h1>all local to 417.</h1>
            </div>
            <section className="grid" style={{ marginTop: `4rem` }}>
              <div className="text-block" style={{ padding: `0.5rem 2.5rem 0 2rem` }}>
                <h2>who we are.</h2>
                <p>
                  Hi, we're the Pages! We're a married couple living in the Springfield area that enjoys helping
                  companies we love become more accessible to others.
                </p>
                <p>
                  We provide social media and web based solutions that help put local businesses within easy reach of
                  people in the Springfield area, even if they don't know you yet.
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/tpage99/image/upload/v1550802820/web%20assets/website_1-2.jpg"
                alt="kendra and taylor"
                className="feature-img"
              />
            </section>
            <section style={{ alignContent: `center`, marginTop: `4rem` }}>
              <h2 style={{ textAlign: `center` }}>what are social media and web based solutions?</h2>
              <div className="grid">
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546752856/web%20assets/KLSiteSkewedShadow.png"
                  alt="kevin lane's catering website"
                  className="img-fluid"
                />
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546752861/web%20assets/photo_layers_3.png"
                  alt="several pieces of created content including promotion for a marriage series, post for facebook engagement, and inspirational graphic stacked on top of each other"
                  className="img-fluid"
                />
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546752858/web%20assets/FBSiteSkewedShadow.png"
                  alt="facebook page for cash saver 417 located in springfield"
                  className="img-fluid"
                />
              </div>
              <button>
                <Link to="/services">Learn More About Our Services</Link>
              </button>
            </section>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
