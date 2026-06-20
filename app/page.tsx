import { Navbar } from "@/components/navbar";
import { MarqueeBanner } from "@/components/marquee-banner";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
