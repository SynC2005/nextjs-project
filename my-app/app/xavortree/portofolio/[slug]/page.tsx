import Image from "next/image";
import { notFound } from "next/navigation";
import { getPortfolioBySlug } from "@/lib/portfolio"; // Sesuaikan path-nya

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  // 1. Ambil data berdasarkan slug dari URL
  const portfolio = await getPortfolioBySlug(params.slug);

  // 2. Jika data tidak ditemukan, tampilkan halaman 404 bawaan Next.js
  if (!portfolio) {
    notFound();
  }

  return (
    <main className="p-8">
      <article className="max-w-4xl mx-auto">
        {/* Header Detail */}
        <div className="mb-6">
          <span className="text-blue-600 font-bold">{portfolio.tag}</span>
          <h1 className="text-4xl font-bold mt-2">{portfolio.title}</h1>
          <p className="text-gray-500 mt-1">{portfolio.date}</p>
        </div>

        {/* Gambar Utama */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={portfolio.image}
            alt={portfolio.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Konten */}
        <div className="prose lg:prose-xl">
          <p className="text-lg leading-relaxed">{portfolio.excerpt}</p>
          {/* Tambahkan konten detail lainnya di sini */}
        </div>
      </article>
    </main>
  );
}