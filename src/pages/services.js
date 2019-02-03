import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appnav from '../components/Navbar/AppNav';
import Container from '../components/container';
import '../assets/main.css';

export default class services extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <Navbar />
        <main>
          <Container>
            <h1 style={{ textAlign: `center` }}>some of the stuff we do.</h1>
            <div className="row">
              <div className="">
                <div className="card grow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <strong>WEBSITES</strong>
                    </h3>
                    <p className="card-text">
                      Your customers want to meet you online first. Make sure
                      you're there to say hello and answer questions they have
                      about your business.
                    </p>
                    <p className="card-text">
                      <i>Packages starting at $500.</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card text-dark bg-light grow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <strong>SOCIAL MEDIA</strong>
                    </h3>
                    <p className="card-text">
                      Even grandma uses Facebook now. Become more accessible to
                      your customers.
                    </p>
                    <p className="card-text">
                      <i>Packages starting at $500.</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card text-dark bg-light grow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <strong>GRAPHIC DESIGN</strong>
                    </h3>
                    <p className="card-text">
                      Sometimes you just need some cool stuff with pictures and
                      text. We can do that.
                    </p>
                    <p className="card-text">
                      <i>Packages starting at $30.</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card text-dark bg-light grow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <strong>REVIEW OF CURRENT SETUP</strong>
                    </h3>
                    <p className="card-text">
                      Your customers are either already using your online info
                      or they're looking for it. We'll take a look at what ya
                      got and let ya know what we think.
                    </p>
                    <p className="card-text">
                      <i>Packages starting at $100.</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card text-dark bg-light grow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <strong>CRASH COURSE TRAININGS</strong>
                    </h3>
                    <p className="card-text">
                      You're pretty confident in your abilities but need some
                      help with tools and knowledge to get started. We got you.
                    </p>
                    <p className="card-text">
                      <i>Packages starting at $100.</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="card text-dark bg-light grow">
                  <div className="card-body">
                    <h3 className="card-title">
                      <strong>CONSULTATIONS</strong>
                    </h3>
                    <p className="card-text">
                      Sometimes you don't even know what you need. Get started
                      on where to start.
                    </p>
                    <p className="card-text">
                      <i>Consultation for services are free.</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </main>
        <Appnav />
      </div>
    );
  }
}
