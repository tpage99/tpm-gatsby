import React, { Component } from "react";

import HeroNav from "../../components/Navbar/HeroNav";
import Container from "../../components/container";

import "../../assets/main.css";

export default class a11y extends Component {
  render() {
    return (
      <div style={{ height: `100%` }}>
        <HeroNav />
        <main>
          <Container>
            <div className="legal">
              <h1>Website Accessibility Statement</h1>
              <p>
                The Pages Media strives for an inclusive and accessible experience in all aspects of life for varying
                abilities. That's why it is important to meet current accessibility standards, even with our website. We
                strive to meet WCAG 2.0 AA requirements in order to make certain that everyone can access helpful
                information about us and our services and because it is the right thing to do.
              </p>

              <p className="quote">Accessibility shouldn't be another line-item in the budget. It's a standard.</p>

              <p>
                The sites we build are designed to be accessible. Even with standards in place, it is true that we don't
                get it right every time. If you have information or sugestions on how we can provide a more accessible
                experience for our users please feel free to reach out to us at info@thepagesmedia.com.
              </p>
            </div>
          </Container>
        </main>
      </div>
    );
  }
}
