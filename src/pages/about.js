import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appnav from '../components/Navbar/AppNav';
import Container from '../components/container';
import { Link } from 'gatsby';
import '../assets/main.css';

export default class about extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <Navbar />
        <main>
          <Container>
            <h1 style={{ textAlign: `center` }}>a little about us.</h1>
            <div className="grid">
              <div className="img-fluid">
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546835047/web%20assets/kendra_website_final.jpg"
                  alt="kendra profile"
                  className="feature-img"
                />
              </div>
              <p className="text-block">
                Kendra is the social media ninja who uses her skills to build
                brand authentic language that helps companies speak to their
                customers like a real person. What does that even mean? She is
                great at talking to your customers in a way that genuinely
                represents your business and makes them feel like they can talk
                back to you.
              </p>
            </div>
            <div className="grid">
              <div className="img-fluid">
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546835049/web%20assets/taylor_website_final.jpg"
                  alt="taylor profile"
                  className="feature-img"
                />
              </div>
              <p className="text-block start-text">
                Taylor is the techie who loves learning about web development
                and using technologies to solve real life problems. With a
                Masters degree in counseling psychology and a lot of experience
                in social work as a caseworker, Taylor uses technology regularly
                as a remedy and resource for all sorts of issues.
              </p>
            </div>
            <h2>Why You Should Work With Us</h2>
            <h5>We're not your typical "tech" people.</h5>
            <p>
              We won't talk to you about Javascript frameworks or [insert random
              tech term here] and expect you to care or understand anything
              about it. We went to school to learn how to talk, and more
              importantly, how to <em>listen</em> to people.
            </p>
            <h5>You need to be online.</h5>
            <p>
              Maybe you've been doing ok with what you've got or without a
              website until now but the truth is you're missing out on customers
              without some sort of digital storefront. This gives customers an
              opportunity to learn more about you at their own pace. You know
              you need a website, a Facebook page, or maybe just a site revamp
              but you don't know or care too much about the details - you just
              know you don't want to have to do it yourself. Let us help!
            </p>
            <Link
              to="/"
              activeStyle={{
                color: 'red',
              }}
              state={{
                pleasant: 'reasonably',
              }}
            >
              Home page
            </Link>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
