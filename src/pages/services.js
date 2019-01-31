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
            <h1 style={{ textAlign: `center` }}>some of the stuff we do.</h1>
            <Link to="/">
              <button>Home page</button>
            </Link>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
