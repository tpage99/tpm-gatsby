import React, { Component } from 'react';
import Container from '../components/container';
import { Link } from 'gatsby';

export default class index extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1>This is the first of many tests</h1>
          <p>
            Just a bunch more text about how we're the Pages and we can do
            social media and web development-type stuff.
          </p>
          <Link
            to="/about/"
            activeStyle={{
              color: 'red',
            }}
            state={{
              pleasant: 'reasonably',
            }}
          >
            About page
          </Link>
        </div>
      </Container>
    );
  }
}
