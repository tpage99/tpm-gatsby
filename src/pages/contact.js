import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeIcon from "../components/HomeIcon/HomeIcon";
import Appnav from "../components/Navbar/AppNav";
import Container from "../components/container";
import SiteMetadata from "../components/Site-Metadata";
import "../assets/main.css";

export default class contact extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <Navbar />
        <HomeIcon />
        <main>
          <Container>
            <h1 style={{ textAlign: `center` }}>say hello.</h1>
            <p style={{ fontSize: `2rem`, lineHeight: `2.2rem`, textAlign: `center`, padding: `0 4rem 2rem` }}>
              If it sounds like we could be a good fit for what you or your business are needing, please fill out the
              form below so we can reach out to you.
            </p>
            <form
              className="contact"
              name="contact"
              method="POST"
              action="/success"
              data-netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <div className="honey">
                <label>
                  Don’t fill this out if you're human:
                  <input type="hidden" name="form-name" value="contact" />
                </label>
              </div>
              <div className="form-input">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name (required)" aria-required="true" required />
              </div>
              <div className="form-input">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email (required)"
                  aria-required="true"
                  required
                />
              </div>
              <div className="form-input">
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" placeholder="(417) 555-5555" />
              </div>
              <div className="form-input">
                <label htmlFor="message">Message</label>
                <textarea name="text-field" rows="4" id="message" placeholder="Write your message here..." />
              </div>
              <div className="form-input">
                <button type="submit" aria-label="submit form">
                  Submit
                </button>
              </div>
            </form>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
