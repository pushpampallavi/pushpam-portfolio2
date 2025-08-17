"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Breast Cancer Detection",
    description:
      "A machine learning model that predicts the likelihood of breast cancer based on patient data.",
    image: "/brest.png?height=400&width=600",
    tags: ["TypeScript", "Next.js", "Node.js", "MongoDB" , "Python" , "Machine Learning"],
    liveUrl: "https:///", // replace with actual if available
    githubUrl: "https://github.com/", // replace with actual
    completion: 80,
  },
  {
    id: 2,
    title: "E-commerce Website",
    description:
      "An e-commerce website that allows users to buy and sell products online.",
    image: "/ecommerce.png?height=400&width=600",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://", // replace with actual if available
    githubUrl: "https://github.com/", // replace with actual
    completion: 100,
  },
]


export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[10%] top-[20%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] h-[250px] w-[250px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              FEATURED WORK
            </span>
          </div>
          <h2 className="font-space text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Recent Projects</h2>
          {/* <p className="mx-auto max-w-2xl text-muted-foreground">
            Explore my latest work showcasing modern design and development techniques. Each project represents a unique
            challenge and solution.
          </p> */}
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          {/* <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            View All Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a> */}
        </div>
      </div>
    </section>
  )
}

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  completion: number
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 lg:block"></div>

      <div className="relative z-10 overflow-hidden rounded-xl border border-foreground/10 bg-background/50 p-1 backdrop-blur-sm transition-all duration-300 group-hover:border-foreground/20 group-hover:shadow-[0_0_30px_4px_rgba(var(--primary-rgb),0.1)]">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Image Section */}
          <div className={`relative overflow-hidden rounded-lg lg:w-2/5 ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
            <div className="aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60"></div>

            {/* Tags */}
            <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-background/80 px-3 py-1 text-xs backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className={`flex flex-col justify-between p-6 lg:w-3/5 ${isEven ? "order-2" : "order-2 lg:order-1"}`}>
            <div>
              <h3 className="mb-3 font-space text-2xl font-bold">{project.title}</h3>
              <p className="mb-6 text-muted-foreground">{project.description}</p>

              {/* Progress bar */}
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Completion</span>
                  <span className="text-xs font-medium">{project.completion}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button relative inline-flex h-10 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-4 py-1 text-sm font-medium backdrop-blur-3xl">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-foreground/10 px-4 py-1 text-sm font-medium transition-all hover:border-foreground/30"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full border border-primary/20 opacity-70"></div>
      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-secondary/20 opacity-70"></div>
      <div className="absolute -bottom-2 right-1/4 h-8 w-8 rounded-full bg-accent/10"></div>
    </motion.div>
  )
}
