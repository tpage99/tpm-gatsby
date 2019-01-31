import React, { Component } from 'react';
import Container from '../components/container';
import Navbar from '../components/Navbar/Navbar';
import Appnav from '../components/Navbar/AppNav';
import { Link } from 'gatsby';
import '../assets/main.css';

export class errorPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <main>
            <h1>The page you're looking for isn't here.</h1>
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </main>
        </Container>
        <Appnav />
      </div>
    );
  }
}

export default errorPage;
