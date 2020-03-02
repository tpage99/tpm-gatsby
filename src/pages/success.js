import React, { Component } from "react";
import { Link } from "gatsby";

import HeroNav from "../components/Navbar/HeroNav";
import ContactContainer from "../components/contactContainer";
import "../assets/main.css";
import Image from "../components/Image";

export class Success extends Component {
  render() {
    return (
      <div>
        <HeroNav />
        <ContactContainer>
          <main>
            <div style={{ margin: `0 auto` }}>
              <div style={{ maxWidth: `800px`, maxHeight: `600px`, margin: `0 auto` }}>
                <Image />
              </div>
              <h1 style={{ textAlign: `center`, paddingTop: `2rem` }}>you did it!</h1>
              <h2>Here's the typical process on how we follow-up:</h2>
              <ol style={{ fontSize: `2rem`, maxWidth: `80%`, paddingLeft: `4rem` }}>
                <li>
                  Someone will reach out to you by phone or email after reviewing your information. We'll get some more
                  information about your business and/or project to determine if we'll be a good fit.
                </li>
                <li>
                  We will set up a meeting in person over coffee or lunch to talk about your project. Or if you're too
                  busy for coffee/lunch, we can meet over Google Hangouts.
                </li>
                <li>
                  After meeting and talking about your project and/or the services you're interested in, we'll create a
                  quote for you within the next week.
                </li>
                <li>
                  Hopefully you're happy with the quote and we're working together! You can expect monthly summaries of
                  services and regular progress updates.
                </li>
              </ol>
            </div>
            <button
              style={{
                backgroundColor: `#cc5529`,
                padding: `2rem`,
                boxShadow: `rgba(0, 0, 0, 0.45) 2px 5px 5px`,
                maxWidth: `60%`,
                fontSize: `3rem`,
                color: `#ecf0f1`,
                textDecoration: `none`
              }}
            >
              <Link to="/" style={{ color: `white`, fontWeight: `bold`, textDecoration: `none` }}>
                Go Home
              </Link>
            </button>
          </main>
        </ContactContainer>
      </div>
    );
  }
}

export default Success;
