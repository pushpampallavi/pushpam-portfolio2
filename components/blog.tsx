"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "All about Attention in Transformers",
    excerpt:
      "Attention is a key component of transformers, a type of neural network architecture used in natural language processing and other tasks. In this blog, we will explore the concept of attention and how it works in transformers.",
    date: "April 18, 2025",
    readTime: "8 min read",
    image: "/rust.jpg?height=150&width=300",
    category: "GenAI",
    tags: ["GenAI", "LLMs", "Attention"],
    url: "https://research.google/pubs/attention-is-all-you-need/",
  },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="blog" ref={ref} className="relative py-10 md:py-12">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[200px] w-[200px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] h-[150px] w-[150px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-3 py-1 text-sm backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              INSIGHTS & THOUGHTS
            </span>
          </div>
          <h2 className="font-space font-bold tracking-tight text-3xl md:text-5xl">From The Blog</h2>
          {/* <p className="mx-auto max-w-2xl text-muted-foreground">
            Articles and insights about design, development, and the latest trends in the tech industry.
          </p> */}
        </div>

        <div className="space-y-4">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BlogCard({ post, index, isInView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative cursor-pointer"
      onClick={() => window.open(post.url, '_blank', 'noopener,noreferrer')}
    >
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-lg bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100 lg:block"></div>

      <div className="relative z-10 overflow-hidden rounded-lg border border-foreground/10 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover:border-foreground/20 group-hover:shadow-[0_0_20px_4px_rgba(var(--primary-rgb),0.1)]">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Image */}
          <div className="relative lg:w-1/6">
            <div className="aspect-[16/9] lg:aspect-auto lg:h-full">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={150}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Category badge */}
            <div className="absolute left-2 top-2 rounded-full bg-background/80 px-2 py-0.5 text-xs font-medium backdrop-blur-sm">
              {post.category}
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-50 lg:bg-gradient-to-r lg:from-transparent lg:to-background/20"></div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col justify-between p-4 lg:w-3/4">
            <div>
              {/* <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div> */}

              <h3 className="mb-1.5 font-space text-md font-bold transition-colors group-hover:text-primary md:text-lg">
                {post.title}
              </h3>

              <p className="mb-2 text-sm text-muted-foreground line-clamp-2 leading-tight">{post.excerpt}</p>

              {/* <div className="mb-3 flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-1 rounded-full bg-muted/50 px-2 py-0.5 text-xs">
                    <Tag className="h-2 w-2" />
                    <span className="text-xs">{tag}</span>
                  </div>
                ))}
              </div> */}
            </div>

            <div className="flex justify-between items-center mt-6">
              <a href={post.url} onClick={(e) => e.stopPropagation()} className="group/button inline-flex items-center gap-1 text-sm md:text-md font-medium text-primary">
                Read Article
                <span className="transition-transform duration-300 group-hover/button:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements - smaller */}
        <div className="absolute -bottom-1 -left-1 h-6 w-6 rounded-full border border-primary/10"></div>
        <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full border border-secondary/10"></div>
      </div>
    </motion.article>
  )
}