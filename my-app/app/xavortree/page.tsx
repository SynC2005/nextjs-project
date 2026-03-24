import Hero from "@/components/sections/hero"
import VisiMisi from "@/components/sections/VisiMisi"
import ServicesCarousel from "@/components/sections/ServicesCarousel"
import Milestones from "@/components/sections/Milestones"


export default function Home() {
  return (
    <main className="min-h-[200vh]">
      <Hero />
      <VisiMisi />
      <ServicesCarousel />
      <Milestones />
    </main>
  )
}
