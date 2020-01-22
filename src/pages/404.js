import React, { Component } from "react";

import { Link } from "gatsby";
import Container from "../components/container";
import HeroNav from "../components/Navbar/HeroNav";
import "../assets/main.css";

export class errorPage extends Component {
  render() {
    return (
      <div>
        <HeroNav />
        <Container>
          <main>
            <h1>The page you're looking for isn't here.</h1>
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </main>
        </Container>
      </div>
    );
  }
}

export default errorPage;
