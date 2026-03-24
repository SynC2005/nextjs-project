import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug } from "@/lib/articles";

const BASE = "/xavortree/articles";

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap params dulu
  const article = await getArticleBySlug(slug);

  if (!article) return notFound();

  return (
    <main className="art-detail-container">
      <Link href={BASE}>← Back</Link>

      <h1>{article.title}</h1>

      <Image
        src={article.image}
        alt={article.title}
        width={800}
        height={400}
        priority
      />

      <p style={{ whiteSpace: "pre-wrap" }}>{article.content}</p>
    </main>
  );
}