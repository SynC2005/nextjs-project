import Link from "next/link"

export default function Hero() {
  return (
    <section className="hero-wrap">
      <div className="hero-overlay" />
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-title">
              Engineering Reliable
              <br />
              Digital Solutions
            </h1>
            <p className="hero-subtitle">
              We design, build, and scale secure, maintainable software systems for modern businesses.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="hero-btn hero-btn-primary">
                Contact us!
              </Link>
              <Link href="/service" className="hero-btn hero-btn-secondary">
                View all Services
              </Link>
            </div>
          </div>
          <div className="hero-right" />
        </div>
      </div>
    </section>
  )
}
