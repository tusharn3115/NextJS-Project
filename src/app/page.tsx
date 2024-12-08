import HeroSection from "@/components/ui/HeroSection";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
    </main>
  )
}