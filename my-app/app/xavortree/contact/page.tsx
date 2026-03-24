"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [heardFrom, setHeardFrom] = useState("");
  const [about, setAbout] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: ganti dengan logic submit (API/email service)
    console.log({ name, email, projectType, heardFrom, about });
    alert("Message sent ✅");
  };

  return (
    <main className="ct-wrap">
      {/* HERO */}
      <section className="ct-hero">
        <div className="ct-hero-overlay" />
        <div className="ct-hero-container">
          <h1 className="ct-hero-title">Let’s Talk Business</h1>
          <p className="ct-hero-subtitle">
            We design, build, and scale secure, maintainable software systems for modern
            businesses.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="ct-surface">
        <div className="ct-surface-inner">
          <div className="ct-grid">
            {/* LEFT: FORM */}
            <div className="ct-form">
              <form onSubmit={onSubmit} className="ct-form-inner">
                <div className="ct-row2">
                  <label className="ct-field">
                    <span className="ct-label">Hello My Name is…</span>
                    <input
                      className="ct-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="ct-field">
                    <span className="ct-label">Here is my Email</span>
                    <input
                      className="ct-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      type="email"
                      required
                    />
                  </label>
                </div>

                <div className="ct-row2">
                  <label className="ct-field">
                    <span className="ct-label">Tell Us About Your Project</span>
                    <input
                      className="ct-input"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      placeholder="e.g. Website / Mobile App / System"
                    />
                  </label>

                  <label className="ct-field">
                    <span className="ct-label">How Did You Hear About Us</span>
                    <input
                      className="ct-input"
                      value={heardFrom}
                      onChange={(e) => setHeardFrom(e.target.value)}
                      placeholder="e.g. Instagram / Friend / Google"
                    />
                  </label>
                </div>

                <label className="ct-field">
                  <span className="ct-label">About Project</span>
                  <textarea
                    className="ct-textarea"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="Describe your project..."
                    rows={7}
                  />
                </label>

                <button className="ct-btn" type="submit">
                  Send
                </button>
              </form>
            </div>

            {/* RIGHT: INFO */}
            <aside className="ct-info">
              <h3 className="ct-info-title">Connect with us.</h3>

              <div className="ct-info-block">
                <div className="ct-info-line">hello@gmail.com</div>
                <div className="ct-info-line">(62567890345)</div>
              </div>

              <div className="ct-info-block">
                <div className="ct-info-subtitle">Address</div>
                <p className="ct-info-text">
                  Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor
                  pretium donec dictum. Vici consequat justo enim. Venenatis eget
                  adipiscing luctus lorem.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}