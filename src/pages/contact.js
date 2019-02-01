import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appnav from '../components/Navbar/AppNav';
import Container from '../components/container';
import { Link } from 'gatsby';
import '../assets/main.css';

export default class contact extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <Navbar />
        <main>
          <Container>
            <h1 style={{ textAlign: `center` }}>say hello.</h1>
            <p>
              If it sounds like we could be a good fit for what you or your
              business are needing, please fill out the form below so we can
              reach out to you.
            </p>
            <form
              className="contact"
              name="contact"
              method="POST"
              action="/success"
              netlify-honeypot="bot-field"
              netlify
            >
              <div className="invisible">
                <label>
                  Don’t fill this out if you're human:
                  <input name="bot-field" />
                </label>
              </div>
              <div>
                <label for="inputName4">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="inputName4"
                  placeholder="Name (required)"
                  required
                />
              </div>
              <div>
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email (required)"
                  required
                />
              </div>
              <div>
                <label for="inputBusiness">Name of Business</label>
                <input
                  type="text"
                  name="name of business"
                  className="form-control"
                  id="inputBusiness"
                  placeholder="Team Awesome, Inc."
                />
              </div>
              <div className="form-group col-lg-6">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  id="inputCity"
                  placeholder="Springfield"
                />
              </div>
              <div>
                <label for="formControlTextArea">
                  Tell us about how we can help
                </label>
                <textarea
                  className="form-control"
                  name="text-field"
                  id="formControlTextArea"
                  rows="3"
                  placeholder="Details on what services you're interested in..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-outline-light btn-lg"
                  aria-describedby="submit-help"
                >
                  Submit
                </button>
              </div>
              <p id="submit-help" className="help-text">
                We promise to only use your information to contact you.
              </p>
            </form>
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
