import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HomeIcon from '../components/HomeIcon/HomeIcon';
import Appnav from '../components/Navbar/AppNav';
import Container from '../components/container';
import { Link } from 'gatsby';
import SiteMetadata from '../components/Site-Metadata';
import '../assets/main.css';

export default class about extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <Navbar />
        <HomeIcon />
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
              <div className="text-block">
                <p>
                  Kendra is the social media ninja who uses her skills to build
                  brand authentic language that helps companies speak to their
                  customers like a real person. What does that even mean? She is
                  great at talking to your customers in a way that genuinely
                  represents your business and makes them feel like they can
                  talk back to you.
                </p>
                <p>
                  Kendra's education is in counseling psychology, she's got an
                  official Masters degree in it. Unofficial degrees include
                  efficiency and planning. She gets super excited about
                  organizing things and making them pretty.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="img-fluid">
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1546835049/web%20assets/taylor_website_final.jpg"
                  alt="taylor profile"
                  className="feature-img"
                />
              </div>
              <div className="text-block start-text">
                <p>
                  Taylor is the techie who loves learning about web development
                  and using technologies to solve real life problems. With a
                  Masters degree in counseling psychology and a lot of
                  experience in social work as a caseworker, Taylor uses
                  technology regularly as a remedy and resource for all sorts of
                  issues.
                </p>
                <p>
                  Taylor first became interested in web development at his
                  church when the previous person who ran the website left.
                  Taylor volunteered to learn and soon found that building and
                  maintaining websites was a lot of fun. Now instead of just
                  working with Wordpress sites or basic HTML, he's learning how
                  to be build entire web applications.
                </p>
              </div>
            </div>
            <h1 style={{ textAlign: `center` }}>
              why you should work with us.
            </h1>
            <h2>
              We're not your typical <em>tech</em> people.
            </h2>
            <p>
              We won't talk to you about Javascript frameworks or [insert random
              tech term here] and expect you to care or understand anything
              about it. We went to school to learn how to talk, and more
              importantly, how to <em>listen</em> to people.
            </p>
            <h2>You need to be online.</h2>
            <p>
              Maybe you've been doing ok with what you've got or without a
              website until now but the truth is you're missing out on customers
              without some sort of digital storefront. This gives customers an
              opportunity to learn more about you at their own pace. You know
              you need a website, a Facebook page, or maybe just a site revamp
              but you don't know or care too much about the details - you just
              know you don't want to have to do it yourself. Let us help!
            </p>
          </Container>
          <div>
            <h1 className="divider">let's get in touch.</h1>
          </div>
          <Container>
            <div className="grid">
              <div className="img-fluid">
                <img
                  src="https://res.cloudinary.com/tpage99/image/upload/v1550803731/web%20assets/highfive2.jpg"
                  alt="taylor and kendra high-fiving"
                  className="feature-img"
                />
              </div>
              <p className="text-block">
                We would love to be a part of the next big thing you're working
                on. Whether it's a solution for your social media presence or
                getting a website up and running, we can help you become more
                connected with your customers.
                <br />
                <br />
                If it sounds like we could be a great fit, head on over to the{' '}
                <Link to="/contact" className="simple-link">
                  contact page
                </Link>{' '}
                to give us a shout. We'd love to be a part of your next step in
                reaching your customers.
              </p>
            </div>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
