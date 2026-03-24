import Image from "next/image";
import Link from "next/link";
import { getPortfolios } from "@/lib/portfolio";

export default async function PortfolioPage() {
  const items = await getPortfolios();

  return (
    <main className="pf-wrap">
      {/* HERO */}
      <section className="pf-hero">
        <div className="pf-hero-overlay" />
        <div className="pf-hero-container">
          <h1 className="pf-hero-title">Our Featured Projects</h1>
          <p className="pf-hero-subtitle">
            Explore the projects we designed and developed
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="pf-container">
        <div className="pf-grid">
          {items.map((p) => (
            <article key={p.slug} className="pf-card">
              <div className="pf-media">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="pf-img"
                  sizes="(max-width: 900px) 92vw, 360px"
                />
                <div className="pf-img-overlay" />
                <span className="pf-badge">{p.tag}</span>
              </div>

              <div className="pf-body">
                <span className="pf-date">{p.date}</span>
                <h3 className="pf-title">{p.title}</h3>
                <p className="pf-desc">{p.excerpt}</p>

                {/* optional: kalau belum ada detail page, link ini bisa ke "#" */}
                <Link className="pf-link" href="/xavortree/portfolio">
                  View →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}