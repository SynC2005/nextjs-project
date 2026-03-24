import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BackgroundParticles count={16} />
      <div style={{ position: "relative", zIndex: 30 }}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}
