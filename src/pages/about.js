import React, { Component } from "react";

import HeroNav from "../components/Navbar/HeroNav";
import Container from "../components/container";
import SiteMetadata from "../components/Site-Metadata";
import "../assets/main.css";

export default class about extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <HeroNav />
        <main>
          <Container>
            <h1 style={{ textAlign: `center`, paddingTop: `2rem` }}>meet your neighbors.</h1>
            <div style={{ margin: `auto` }}>
              <div className="img-grid">
                <div className="img-fluid" style={{ marginBottom: `0` }}>
                  <img
                    src="https://res.cloudinary.com/tpage99/image/upload/v1579575965/web%20assets/taylor_profile.png"
                    alt="taylor, web developer"
                    className="feature-img"
                    style={{ marginBottom: `0` }}
                  />
                  <p style={{ marginTop: `0`, paddingTop: `0`, textAlign: `center` }}>Taylor, web developer</p>
                </div>
                <div className="img-fluid" style={{ marginBottom: `0` }}>
                  <img
                    src="https://res.cloudinary.com/tpage99/image/upload/v1579575961/web%20assets/kendra_profile.png"
                    alt="kendra, marketing consultant"
                    className="feature-img"
                    style={{ marginBottom: `0` }}
                  />
                  <p style={{ marginTop: `0`, paddingTop: `0`, textAlign: `center` }}>Kendra, marketing consultant</p>
                </div>
              </div>
            </div>

            <section style={{ textAlign: `center` }}>
              <p className="hero-text">
                We're Taylor and Kendra Page. A husband and wife team that love to spend time working on projects
                together and making our local Springfield community better. We moved to the Springfield area from Ohio
                for college and loved it so much - we stayed! Now we're raising a family here and we're determined to
                help local businesses succeed.{" "}
              </p>
              <div className="feature-card">
                <p>
                  We like to help local area businesses in Springfield, Missouri reach their potential by helping them
                  get in front of their clients. We are all neighbors, after all.
                </p>
              </div>
            </section>
            <hr />
            <section className="about-info">
              <h2>why you should work with us.</h2>
              <h3>
                <span className="highlight-blue">
                  We're not your typical <em>tech</em> people.
                </span>
              </h3>
              <h3 className="mobile-header">
                We're not your typical <em>tech</em> people.
              </h3>
              <p>
                We won't talk to you about Javascript frameworks or [insert random tech term here] and expect you to
                care or understand anything about it. We went to school to learn how to talk, and more importantly, how
                to <em>listen</em> to people.
              </p>
              <h3 className="head-room">
                <span className="highlight-blue">You need to be online.</span>
              </h3>
              <h3 className="mobile-header">You need to be online.</h3>
              <p>
                Maybe you've been doing ok with what you've got or without a website until now but the truth is you're
                missing out on customers without some sort of digital storefront. This gives customers an opportunity to
                learn more about you at their own pace.
              </p>
              <h3 className="head-room">
                <span className="highlight-blue">We actually like this stuff.</span>
              </h3>
              <h3 className="mobile-header">We actually like this stuff.</h3>
              <p>
                The more time you spend working on your online presence yourself, is time away from doing the thing you
                love - your business. Let us help. We love technology and leveraging it to help businesses become more
                efficient and profitable.
              </p>
            </section>
            <section
              style={{
                textAlign: `center`,
                lineHeight: `2rem`,
                marginTop: `3rem`
              }}
            >
              <div className="feature-card">
                <p>We've got plenty more reasons why you should work with us, but maybe that's best over a coffee.</p>
              </div>
              <p className="hero-text">
                Whether it's a solution for your social media presence or getting a website up and running, we can help
                you become more connected with your customers.
              </p>
            </section>
          </Container>
        </main>
      </div>
    );
  }
}
