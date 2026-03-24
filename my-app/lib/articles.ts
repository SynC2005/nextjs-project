import { ARTICLES } from "@/dummy/articles";

export async function getArticles() {
  return ARTICLES;
}

export async function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug) ?? null;
}