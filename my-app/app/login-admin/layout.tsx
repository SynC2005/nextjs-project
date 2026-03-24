import type { Metadata } from "next";
import NeuralBackground from "@/components/NeuralBackground";

export const metadata: Metadata = {
  title: "Login Admin | Xavortree",
};

export default function LoginAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen relative">
      {/* Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}