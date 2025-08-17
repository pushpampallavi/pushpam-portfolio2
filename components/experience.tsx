"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    id: 1,
    role: "Intern",
    company: "AICTE inten",
    duration: "May 2024 - July 2024",
    location: "Remote",
    description: [
      "Collaborated with teammates to build custom websites for clients, ensuring tailored solutions and timely delivery",
      "Worked across the full stack, handling both frontend and backend tasks to develop scalable features",
      "Improved UI components for better user experience and visual consistency",
    ],
    companyUrl: "#",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={ref} className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[10%] top-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[20%] left-[5%] h-[250px] w-[250px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PROFESSIONAL JOURNEY
            </span>
          </div>
          <h2 className="font-space text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Work Experience</h2>
          {/* <p className="mx-auto max-w-2xl text-muted-foreground">
            My professional journey through various roles and companies, showcasing my growth and expertise in the
            field.
          </p> */}
        </div>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-foreground/10 to-secondary/50 md:left-1/2 md:-ml-px"></div>

          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id} experience={experience} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface Experience {
  id: number
  role: string
  company: string
  duration: string
  location: string
  description: string[]
  companyUrl: string
}

function TimelineItem({ experience, index, isInView }: { experience: Experience; index: number; isInView: boolean }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative mb-12 md:mb-0">
      <motion.div
        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className={`relative mb-12 flex md:mb-24 ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* Timeline dot */}
        <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 transform items-center justify-center md:left-1/2">
          <span className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
          <span className="absolute h-6 w-6 animate-ping rounded-full bg-primary/30"></span>
        </div>

        {/* Content */}
        <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
          <div className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-[0_0_30px_4px_rgba(var(--primary-rgb),0.1)]">
            {/* Background gradient on hover */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 lg:block"></div>

            <div className="relative z-10">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-space text-xl font-bold">{experience.role}</h3>
                  <div className="flex items-center gap-1 text-primary">
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1 hover:underline"
                    >
                      {experience.company}
                      <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100" />
                    </a>
                  </div>
                </div>

                <div className="rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-3 py-1 text-xs backdrop-blur-sm">
                  {experience.duration}
                </div>
              </div>

              <div className="mb-4 flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" />
                <span>{experience.location}</span>
              </div>

              <ul className="space-y-2">
                {experience.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full border border-primary/10"></div>
            <div className="absolute -left-2 -top-2 h-8 w-8 rounded-full border border-secondary/10"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
