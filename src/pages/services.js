import React, { Component } from "react";
import { Link } from "gatsby";

import Navbar from "../components/Navbar/Navbar";
import HomeIcon from "../components/HomeIcon/HomeIcon";
import Appnav from "../components/Navbar/AppNav";
import Container from "../components/container";
import SiteMetadata from "../components/Site-Metadata";
import "../assets/main.css";

export default class services extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <SiteMetadata pathname={this.props.location.pathname} />
        <Navbar />
        <HomeIcon />
        <main>
          <Container>
            <section style={{ textAlign: `center` }}>
              <h1 style={{ paddingTop: `2rem`, fontSize: `2.5rem` }}>some of the stuff we do.</h1>
              <p style={{ padding: `0 2rem`, fontSize: `1.5rem`, lineHeight: `1.75rem` }}>
                <em>
                  Ignoring your businesses' online strategy means leaving money on the table and customers in the dark.
                  Check out some of the tools we provide to give your business the online advantage it needs to excel.
                </em>
              </p>
            </section>
            <section
              style={{
                display: `grid`,
                gridTemplateColumns: `1fr 1fr 1fr 1fr`,
                gridRowGap: `1rem`,
                gridColumnGap: `1rem`,
                padding: `2rem`,
                lineHeight: `1.5rem`
              }}
            >
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#ECF0F1`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 0px 10px 25px`
                }}
              >
                <Link to="#" style={{ textDecoration: `none`, color: ` rgb(19, 19, 19)` }}>
                  <div
                    style={{
                      backgroundColor: `#CC5529`,
                      color: `#ECF0F1`,
                      padding: `1rem 1rem 0.1rem`
                    }}
                  >
                    <h3 style={{ fontSize: `2rem` }}>WEBSITES</h3>
                  </div>
                  <p style={{ paddingTop: `2rem` }}>
                    Your customers want to meet you online first. Make sure you're there to say hello and answer
                    questions they have about your business.
                  </p>
                </Link>
              </div>
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#ECF0F1`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 0px 10px 25px`
                }}
              >
                <div
                  style={{
                    backgroundColor: `#CC5529`,
                    color: `#ECF0F1`,
                    padding: `1rem 1rem 0.1rem`
                  }}
                >
                  <h3 style={{ fontSize: `2rem` }}>SOCIAL MEDIA</h3>
                </div>
                <p style={{ paddingTop: `2rem` }}>
                  Even grandma uses Facebook now. Become more accessible to your customers.
                </p>
              </div>
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#ECF0F1`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 0px 10px 25px`
                }}
              >
                <div
                  style={{
                    backgroundColor: `#CC5529`,
                    color: `#ECF0F1`,
                    padding: `1rem 1rem 0.1rem`
                  }}
                >
                  <h3 style={{ fontSize: `2rem` }}>REVIEW OF CURRENT SETUP</h3>
                </div>

                <p style={{ paddingTop: `2rem` }}>
                  Your customers are either already using your online info or they're looking for it. We'll take a look
                  at what ya got and let ya know what we think.
                </p>
              </div>
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#ECF0F1`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 0px 10px 25px`
                }}
              >
                <div
                  style={{
                    backgroundColor: `#CC5529`,
                    color: `#ECF0F1`,
                    padding: `1rem 1rem 0.1rem`
                  }}
                >
                  <h3 style={{ fontSize: `2rem` }}>CRASH COURSE TRAININGS</h3>
                </div>
                <p style={{ paddingTop: `2rem` }}>
                  You're pretty confident in your abilities but need some help with tools and knowledge to get started.
                  We got you.
                </p>
              </div>
              <div
                style={{
                  gridColumn: `span 2`,
                  textAlign: `center`,
                  verticalAlign: `center`,
                  padding: `2rem`,
                  backgroundColor: `#ECF0F1`,
                  boxShadow: `rgba(0, 0, 0, 0.45) 0px 10px 25px`
                }}
              >
                <div
                  style={{
                    backgroundColor: `#CC5529`,
                    color: `#ECF0F1`,
                    padding: `1rem 1rem 0.1rem`
                  }}
                >
                  <h3 style={{ fontSize: `2rem` }}>CONSULTATION</h3>
                </div>
                <p style={{ paddingTop: `2rem` }}>
                  Sometimes you don't even know what you need. Get started on where to start.{" "}
                  <i>Consultation for services are free.</i>
                </p>
              </div>
            </section>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
