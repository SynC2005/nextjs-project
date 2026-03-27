export type DummyPortfolio = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  image: string; // path di /public
};



export const PORTFOLIOS: DummyPortfolio[] = [
  {
    slug: "digital-strategy-telkom",
    title: "Digital Strategy For Student In Telkom University",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et accumsan nunc.",
    date: "2025-06-26",
    tag: "Updates",
    image: "/assets/visi.jpeg",
  },
  {
    slug: "product-design-system",
    title: "Product Design System & UI Kit",
    excerpt:
      "Standarisasi UI component untuk mempercepat pengembangan dan menjaga konsistensi brand.",
    date: "2026-02-20",
    tag: "Updates",
    image: "/assets/visi.jpeg",
  },
  {
    slug: "web-app-dashboard",
    title: "Web App Dashboard & Analytics",
    excerpt:
      "Dashboard modern dengan komponen modular, aman, dan siap untuk skalabilitas.",
    date: "2026-02-18",
    tag: "Updates",
    image: "/assets/visi.jpeg",
  },
  {
    slug: "landing-page-campaign",
    title: "Landing Page Campaign Performance",
    excerpt:
      "Optimasi performa & conversion untuk campaign marketing, mobile-first dan cepat.",
    date: "2026-02-10",
    tag: "Updates",
    image: "/assets/visi.jpeg",
  },
  {
    slug: "company-profile-revamp",
    title: "Company Profile Revamp",
    excerpt:
      "Perombakan company profile dengan visual modern dan struktur konten yang lebih rapi.",
    date: "2026-02-07",
    tag: "Updates",
    image: "/assets/visi.jpeg",
  },
  {
    slug: "api-integration-suite",
    title: "API Integration Suite",
    excerpt:
      "Integrasi service & third party API dengan observability dan monitoring yang baik.",
    date: "2026-02-01",
    tag: "Updates",
    image: "/assets/visi.jpeg",
  },
];