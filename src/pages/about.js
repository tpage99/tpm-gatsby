import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeIcon from "../components/HomeIcon/HomeIcon";
import Appnav from "../components/Navbar/AppNav";
import Container from "../components/container";
import SiteMetadata from "../components/Site-Metadata";
import "../assets/main.css";

export default class about extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <Navbar />
        <HomeIcon />
        <main>
          <Container>
            <h1 style={{ textAlign: `center`, paddingTop: `2rem` }}>meet your neighbors.</h1>
            <div style={{ display: `flex`, justifyContent: `space-evenly` }}>
              <div className="img-fluid" style={{ marginBottom: `0`, padding: `0 1rem` }}>
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546835049/web%20assets/taylor_website_final.jpg"
                  alt="taylor, web developer"
                  className="feature-img"
                  style={{ marginBottom: `0` }}
                />
                <p style={{ marginTop: `0`, paddingTop: `0`, textAlign: `center` }}>Taylor, web developer</p>
              </div>
              <div className="img-fluid" style={{ marginBottom: `0`, padding: `0 1rem` }}>
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546835047/web%20assets/kendra_website_final.jpg"
                  alt="kendra, marketing consultant"
                  className="feature-img"
                  style={{ marginBottom: `0` }}
                />
                <p style={{ marginTop: `0`, paddingTop: `0`, textAlign: `center` }}>Kendra, marketing consultant</p>
              </div>
            </div>
            <section style={{ textAlign: `center` }}>
              <p style={{ padding: `3rem`, fontSize: `3rem`, lineHeight: `2.95rem`, letterSpacing: `0.01rem` }}>
                We're Taylor and Kendra Page. A husband and wife team that love to spend time working on projects
                together and making our local Springfield community better. We moved to the Springfield area from Ohio
                for college and loved it so much - we stayed! Now we're raising a family here and we're determined to
                help local businesses succeed.{" "}
              </p>
              <div
                style={{
                  backgroundColor: `#CC5529`,
                  padding: `1rem 2rem 0.5rem`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
                  margin: `auto`,
                  color: `white`,
                  maxWidth: `60%`
                }}
              >
                <p style={{ fontSize: `1.75rem`, lineHeight: `2rem` }}>
                  We like to help local area businesses in Springfield, Missouri reach their potential by helping them
                  get in front of their clients. We are all neighbors, after all.
                </p>
              </div>
            </section>
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
            <section style={{ margin: `2rem`, lineHeight: `2rem` }}>
              <h2 style={{ textAlign: `center`, padding: `1rem 2rem 2rem` }}>why you should work with us.</h2>
              <h3>
                <span
                  style={{
                    backgroundColor: `#2980B9`,
                    padding: `0.5rem`,
                    boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
                    color: `white`
                  }}
                >
                  We're not your typical <em>tech</em> people.
                </span>
              </h3>
              <p style={{ fontSize: `1.5rem`, lineHeight: `1.5rem` }}>
                We won't talk to you about Javascript frameworks or [insert random tech term here] and expect you to
                care or understand anything about it. We went to school to learn how to talk, and more importantly, how
                to <em>listen</em> to people.
              </p>
              <h3 style={{ paddingTop: `2rem` }}>
                <span
                  style={{
                    backgroundColor: `#2980B9`,
                    padding: `0.5rem`,
                    boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
                    color: `white`
                  }}
                >
                  You need to be online.
                </span>
              </h3>
              <p style={{ fontSize: `1.5rem`, lineHeight: `1.5rem` }}>
                Maybe you've been doing ok with what you've got or without a website until now but the truth is you're
                missing out on customers without some sort of digital storefront. This gives customers an opportunity to
                learn more about you at their own pace.
              </p>
              <h3 style={{ paddingTop: `2rem` }}>
                <span
                  style={{
                    backgroundColor: `#2980B9`,
                    padding: `0.5rem`,
                    boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
                    color: `white`
                  }}
                >
                  We actually like this stuff.
                </span>
              </h3>
              <p style={{ fontSize: `1.5rem`, lineHeight: `1.5rem` }}>
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
              <p
                style={{
                  padding: `1.5rem 3rem`,
                  fontSize: `2rem`,
                  backgroundColor: `#CC5529`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
                  margin: `auto`,
                  color: `white`,
                  maxWidth: `60%`
                }}
              >
                We've got plenty more reasons why you should work with us, but maybe that's best over a coffee.
              </p>
              <p style={{ padding: `2rem 3rem 0`, fontSize: `2rem` }}>
                Whether it's a solution for your social media presence or getting a website up and running, we can help
                you become more connected with your customers.
              </p>
            </section>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
