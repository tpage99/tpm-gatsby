import React, { Component } from "react";
import { Link } from "gatsby";

import HeroNav from "../components/Navbar/HeroNav";
import Container from "../components/container";
import SiteMetadata from "../components/Site-Metadata";
import "../assets/main.css";

import Video from "../components/video";

export default class services extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <HeroNav />
        <main>
          <Container>
            <section style={{ textAlign: `center` }}>
              <h1 style={{ paddingTop: `2rem` }}>some of the stuff we do.</h1>
              <p style={{ padding: `0 3rem`, fontSize: `2rem`, lineHeight: `1.75rem` }}>
                Ignoring your businesses' online strategy means leaving money on the table and customers in the dark.
                Check out some of the tools we provide to give your business the online advantage it needs to excel.
              </p>
            </section>
            <section
              style={{
                display: `grid`,
                gridTemplateColumns: `1fr 1fr`,
                gridRowGap: `2rem`,
                gridColumnGap: `2rem`,
                padding: `2rem`,
                lineHeight: `1.5rem`,
                maxWidth: `80%`,
                margin: `auto`
              }}
            >
              <div className="servCard">
                <div className="emHeader">
                  <h3>Websites</h3>
                </div>
                <div className="vidCard">
                  <Video
                    videoSrcURL="https://res.cloudinary.com/tpage99/video/upload/v1579488259/web%20assets/Websites.mp4"
                    videoTitle="animated mouse interacting with computer"
                  />
                  <div>
                    <p>
                      Your customers want to meet you online first. Make sure you're there to say hello and answer
                      questions they have about your business.
                    </p>
                    <Link to="/services/websites" className="emLink">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="servCard">
                <div className="emHeader">
                  <h3>Social Media</h3>
                </div>
                <div className="vidCard">
                  <Video
                    videoSrcURL="https://res.cloudinary.com/tpage99/video/upload/v1579488267/web%20assets/Social_Media.mp4"
                    videoTitle="animated people standing around screen with a thumbsup icon in motion"
                  />
                  <div>
                    <p>Even grandma uses Facebook now. Become more accessible to your customers.</p>
                    <Link to="/services/social-media" className="emLink">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="servCard">
                <div className="emHeader">
                  <h3>eCommerce</h3>
                </div>
                <div className="vidCard">
                  <Video
                    videoSrcURL="https://res.cloudinary.com/tpage99/video/upload/v1579488270/web%20assets/Ecommerce.mp4"
                    videoTitle="animated transitions on a computer screen"
                  />
                  <div>
                    <p>
                      Everyone can see the merit of being able to buy stuff without putting on pants. If you've tied
                      yourself down to only selling your products in your physical store, boy have we got some news for
                      you.
                    </p>
                    <Link to="/services/ecommerce" className="emLink">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="servCard">
                <div className="emHeader">
                  <h3>Review of Current Setup</h3>
                </div>
                <div className="vidCard">
                  <Video
                    videoSrcURL="https://res.cloudinary.com/tpage99/video/upload/v1579488263/web%20assets/Review_of_Current_Set_up.mp4"
                    videoTitle="animated computer screen with mouse clicking on video to play a presentation"
                  />
                  <div>
                    <p>
                      Your customers are either already using your online info or they're looking for it. We'll take a
                      look at what ya got and let ya know what we think.
                    </p>
                    <Link to="/services/review-of-current-setup" className="emLink">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="servCard">
                <div className="emHeader">
                  <h3>Crash Course Trainings</h3>
                </div>
                <div className="vidCard">
                  <Video
                    videoSrcURL="https://res.cloudinary.com/tpage99/video/upload/v1579488273/web%20assets/Crash_Course_Trainings.mp4"
                    videoTitle="animated people standing around a person sized phone interacting with the screen as chat bubbles continue enter the screen"
                  />
                  <div>
                    <p>
                      You're pretty confident in your abilities but need some help with tools and knowledge to get
                      started. We got you.
                    </p>
                    <Link to="/services/crash-course-trainings" className="emLink">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="servCard">
                <div className="emHeader">
                  <h3>Consultation</h3>
                </div>
                <div className="vidCard">
                  <Video
                    videoSrcURL="https://res.cloudinary.com/tpage99/video/upload/v1579488276/web%20assets/Consultation.mp4"
                    videoTitle="animated people standing around and on top of a bar graph and rolling a pie chart"
                  />
                  <div>
                    <p>
                      Sometimes you don't even know what you need. Get started on where to start.{" "}
                      <i>Consultation for services are free.</i>
                    </p>
                    <Link to="/services/consultation" className="emLink">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </Container>
        </main>
      </div>
    );
  }
}
