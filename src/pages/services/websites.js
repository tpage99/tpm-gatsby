import React, { Component } from "react";

import HeroNav from "../../components/Navbar/HeroNav";
import Container from "../../components/container";

import "../../assets/main.css";

export default class Websites extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <HeroNav />
        <main>
          <Container>
            <h1>This page is under construction! 🔨 🏗️ 🚜</h1>
            <p style={{ fontSize: `1.5rem` }}>
              We were so excited to get our new site redesign up, we didn't have the time yet to build out this page.
              But don't you worry! Pretty soon - something awesome is going to live here.
            </p>
          </Container>
        </main>
      </div>
    );
  }
}
