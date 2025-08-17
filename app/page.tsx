import Hero from "@/components/hero"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Experience from "@/components/experience"
import Blog from "@/components/blog"
import Notes from "@/components/notes"
import Contact from "@/components/contact"
import ScrollProgress from "@/components/ui/scroll-progress"

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Hero />
      <Projects />
      <TechStack />
      <Experience />
      <Blog />
      <Contact />
    </main>
  )
}
