import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type MilestoneItem = {
  title: string;
  desc: string;
  date: string;
  image: string;
  href: string;
};

const MILESTONES: MilestoneItem[] = [
  {
    title: "Milestone Reached #1",
    desc: "Fondasi awal: kami membangun proses delivery yang rapi, standar code yang konsisten, serta praktik keamanan dasar untuk setiap project.",
    date: "June 28, 2018",
    image: "/assets/visi.jpeg",
    href: "/",
  },
  {
    title: "Milestone Reached #2",
    desc: "Skalabilitas: mulai menerapkan arsitektur modular, observability, dan pipeline CI/CD agar rilis lebih cepat dan aman.",
    date: "June 28, 2018",
    image: "/assets/visi.jpeg",
    href: "/",
  },
  {
    title: "Milestone Reached #3",
    desc: "Impact: memperluas layanan dan kemampuan tim untuk membantu klien tumbuh dengan solusi digital yang terukur.",
    date: "June 28, 2018",
    image: "/assets/visi.jpeg",
    href: "/",
  },
];

export default function Milestones() {
  const [first, second, third] = MILESTONES;

  return (
    <section className="ms-wrap" aria-labelledby="milestones-title">
      <div className="ms-container">
        <div className="ms-head">
          <h2 id="milestones-title" className="ms-title">
            Milestone &amp; Achievements
          </h2>
          <div className="ms-line" />
        </div>

        <div className="ms-grid">
          {/* kiri: highlight */}
          <article className="ms-feature">
            <div className="ms-feature-media">
              <Image
                src={first.image}
                alt={first.title}
                fill
                className="ms-img"
                sizes="(max-width: 1000px) 92vw, 620px"
                priority
              />
              <div className="ms-img-overlay" />
            </div>

            <div className="ms-feature-body">
              <h3 className="ms-item-title">{first.title}</h3>
              <p className="ms-item-desc">{first.desc}</p>
              <Link href={first.href} className="ms-link">
                View Post <ArrowUpRight className="ms-link-ic" aria-hidden="true" />
              </Link>
            </div>
          </article>

          {/* kanan: 2 item */}
          <div className="ms-side">
            {[second, third].map((item, idx) => (
              <div key={item.title} className="ms-row">
                <article className="ms-card">
                  <div className="ms-card-media">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="ms-img"
                      sizes="(max-width: 1000px) 92vw, 340px"
                      priority={idx === 0}
                    />
                    <div className="ms-img-overlay" />
                  </div>
                  <div className="ms-date">{item.date}</div>
                </article>

                <div className="ms-copy">
                  <h3 className="ms-item-title">{item.title}</h3>
                  <p className="ms-item-desc">{item.desc}</p>
                  <Link href={item.href} className="ms-link">
                    View Post <ArrowUpRight className="ms-link-ic" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}

            <div className="ms-more">
              <Link href="/xavortree/portofolio" className="ms-more-link">
                See more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
