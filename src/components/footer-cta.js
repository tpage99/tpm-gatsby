import React from "react";

export default function FooterCTA() {
  return (
    <section style={{ textAlign: `center`, margin: `2rem 0rem 4rem`, alignContent: `center` }}>
      <h3 style={{ fontSize: `4rem`, lineHeight: `2rem`, fontWeight: `bold`, paddingTop: `2rem` }}>let's meet.</h3>
      <p style={{ padding: `0 1.5rem`, fontSize: `1.75rem`, lineHeight: `2rem` }}>
        Website design and development, social media strategy and implementation, and small business headache
        resolutions are all strategized and built right here in the local Springfield area.
      </p>
      <p style={{ padding: `0 1.5rem`, fontSize: `1.75rem`, lineHeight: `2rem` }}>
        {" "}
        If you'd like to meet to go over your business pain-points and talk about some potential ways to fix them, we'd
        love to meet. Even if just for coffee and consultation, we are enthusiastic about helping local businesses solve
        problems. Give us a call or send us a message. Consultations are free and no obligation.
      </p>
      <p className="footer-hero">We would love to be a part of the next big thing you're working on.</p>
      <form name="footer-contact" method="POST" action="/success" data-netlify-honeypot="bot-field" data-netlify="true">
        <div className="honey">
          <label>
            Don’t fill this out if you're human:
            <input type="hidden" name="form-name" value="contact" />
          </label>
        </div>
        <div className="footer-form">
          <label htmlFor="name">What is your name? </label>
          <input type="text" name="name" id="name" placeholder="Name (required)" aria-required="true" required />
          <label htmlFor="contact_method">Best way to contact you? </label>
          <input
            type="contact_method"
            name="contact_method"
            id="contact_method"
            placeholder="Email or phone number (required)"
            aria-required="true"
            required
          />
        </div>
        <div className="footer-form2">
          <label htmlFor="message">How can we help you?</label>
          <textarea name="text-field" rows="4" id="message" placeholder=" Write your message here..." />
          <div style={{ paddingTop: `2rem`, margin: `auto`, textAlign: `center` }}>
            <button type="submit" aria-label="submit form">
              <strong>Start Today!</strong>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
