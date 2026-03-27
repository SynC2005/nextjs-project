// Pastikan PORTFOLIOS sudah di-import atau didefinisikan di sini
import { PORTFOLIOS } from "@/dummy/portfolio" // Sesuaikan path-nya

// 1. Fungsi yang sudah ada (mungkin seperti ini)
export async function getPortfolios() {
  return PORTFOLIOS;
}

// 2. TAMBAHKAN INI: Fungsi yang dicari oleh [slug]/page.tsx
export async function getPortfolioBySlug(slug: string) {
  const item = PORTFOLIOS.find((p) => p.slug === slug);
  return item || null;
}