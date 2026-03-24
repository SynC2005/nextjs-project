"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="ft-wrap">
      <div className="ft-container">
        <div className="ft-grid">
          {/* Brand */}
          <div className="ft-brand">
            <div className="ft-logo">XavorTree</div>
            <div className="ft-sub">Software Development</div>
            <div className="ft-sub">Company</div>

            <div className="ft-note">
              Learn More. Contact Us
            </div>
          </div>

          {/* Company */}
          <div className="ft-col">
            <div className="ft-title">Company</div>
            <nav className="ft-links">
              <Link className="ft-link" href="/about">About Us</Link>
              <Link className="ft-link" href="/services">Services</Link>
              <Link className="ft-link" href="/team">Our Team</Link>
            </nav>
          </div>

          {/* Know More */}
          <div className="ft-col">
            <div className="ft-title">Know More</div>
            <nav className="ft-links">
              <Link className="ft-link" href="/support">Support</Link>
              <Link className="ft-link" href="/privacy">Privacy Policy</Link>
              <Link className="ft-link" href="/terms">Terms &amp; conditions</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="ft-col">
            <div className="ft-title">Newsletter</div>
            <form
              className="ft-news"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className="ft-input"
                placeholder="Email Goes here"
                type="email"
                required
              />
              <button className="ft-btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="ft-divider" />
      </div>
    </footer>
  );
}
