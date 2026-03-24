export type DummyArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;     // "2026-02-20" atau string bebas
  tag: string;      // mis. "Update"
  image: string;    // path public, mis. "/assets/visi.jpeg"
  featured?: boolean;
};

export const ARTICLES: DummyArticle[] = [
  {
    slug: "lorem-ipsum-dolor",
    title: "LOREM IPSUM DOLOR",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et accumsan nunc.",
    content:
      "Ini konten lengkap artikel. Kamu bisa ganti jadi panjang.\n\nLorem ipsum dolor sit amet...",
    date: "1998-06-26",
    tag: "Update",
    image: "/assets/visi.jpeg",
    featured: true,
  },
  {
    slug: "digital-strategy-student-telkom",
    title: "Digital Strategy For Student in Telkom University",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et accumsan nunc.",
    content:
      "Konten lengkap Digital Strategy...\n\nTambahkan paragraf sesuai kebutuhan.",
    date: "2026-02-20",
    tag: "Update",
    image: "/assets/visi.jpeg",
  },
  {
    slug: "industrial-insights-1",
    title: "Industrial Insights: Trends 2026",
    excerpt:
      "Ringkasan singkat tentang tren industri dan teknologi yang berkembang.",
    content:
      "Konten lengkap Industrial Insights...\n\nBisa berisi poin-poin.",
    date: "2026-02-18",
    tag: "Insights",
    image: "/assets/visi.jpeg",
  },
  {
    slug: "productivity-stack",
    title: "Building a Productivity Stack for Teams",
    excerpt:
      "Cara menyusun tools dan workflow agar tim lebih produktif.",
    content:
      "Konten lengkap Productivity Stack...\n\nTambahkan contoh tools.",
    date: "2026-02-10",
    tag: "Guide",
    image: "/assets/visi.jpeg",
  },
];