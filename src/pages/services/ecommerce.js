import React, { Component } from "react";

import Navbar from "../../components/Navbar/Navbar";
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import Appnav from "../../components/Navbar/AppNav";
import Container from "../../components/container";

import "../../assets/main.css";

export default class eCommerce extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <Navbar />
        <HomeIcon />
        <main>
          <Container>
            <h1>This page is under construction! 🔨 🏗️ 🚜</h1>
            <p style={{ fontSize: `1.5rem` }}>
              We were so excited to get our new site redesign up, we didn't have the time yet to build out this page.
              But don't you worry! Pretty soon - something awesome is going to live here.
            </p>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
