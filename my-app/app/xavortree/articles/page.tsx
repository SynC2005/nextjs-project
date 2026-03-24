import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/articles";

const BASE = "/xavortree/articles";

export default async function ArticlesPage() {
  const articles = await getArticles();
  const featured = articles.find((a: any) => a.featured) ?? articles[0];
  const rest = articles.filter((a: any) => a.slug !== featured?.slug);

  return (
    <main className="art-wrap">
      <section className="art-hero">
        <div className="art-hero-overlay" />
        <div className="art-hero-container">
          <h1 className="art-hero-title">Articles Insights</h1>
          <p className="art-hero-subtitle">
            Explore Our Latest Articles And Industrial Insights
          </p>
        </div>
      </section>

      <section className="art-container">
        {featured && (
          <div className="art-featured">
            <div className="art-featured-media">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="art-img"
                sizes="(max-width: 900px) 92vw, 620px"
                priority
              />
              <div className="art-img-overlay" />
            </div>

            <div className="art-featured-body">
              <div className="art-meta">
                <span className="art-date">{featured.date}</span>
                <span className="art-badge">{featured.tag ?? "Update"}</span>
              </div>

              <h2 className="art-featured-title">{featured.title}</h2>
              <p className="art-featured-desc">{featured.excerpt}</p>

              {/* ✅ UPDATE LINK */}
              <Link className="art-cta" href={`${BASE}/${featured.slug}`}>
                Read More →
              </Link>
            </div>
          </div>
        )}

        <div className="art-grid">
          {rest.map((a: any) => (
            // ✅ UPDATE LINK
            <Link key={a.slug} href={`${BASE}/${a.slug}`} className="art-card">
              <div className="art-card-media">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="art-img"
                  sizes="(max-width: 900px) 92vw, 360px"
                />
                <div className="art-img-overlay" />
                <span className="art-badge art-badge--float">
                  {a.tag ?? "Update"}
                </span>
              </div>

              <div className="art-card-body">
                <h3 className="art-card-title">{a.title}</h3>
                <p className="art-card-desc">{a.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}