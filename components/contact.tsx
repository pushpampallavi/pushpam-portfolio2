"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  // Moved state inside the component
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Moved event handlers inside the component
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert(data.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" ref={ref} className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[5%] top-[10%] h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[250px] w-[250px] rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-4 inline-block rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="mb-4 font-space text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Contact Me</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-xl border border-foreground/10 bg-background/50 p-6 backdrop-blur-sm"
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"></div>

              <h3 className="mb-6 font-space text-xl font-bold">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Email</h4>
                    <a href="mailto:pushpampalavi@example.com" className="text-lg font-medium hover:text-primary">
                      pushpampallavi@gmail.com
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Phone</h4>
                    <a href="tel:+11234567890" className="text-lg font-medium hover:text-primary">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div> */}

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                    <p className="text-lg font-medium">Bhubaneswar, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-sm font-medium text-muted-foreground">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.github.com/pushpampallavi"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-foreground/30 hover:text-primary"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pushpam-pallavi-393b272a5/"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-foreground/30 hover:text-primary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/pushpampallavi"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-foreground/30 hover:text-primary"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full border border-primary/10"></div>
              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full border border-secondary/10"></div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-xl border border-foreground/10 bg-background/50 p-6 backdrop-blur-sm"
            >
              <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl"></div>

              <h3 className="mb-6 font-space text-xl font-bold">Send Me a Message</h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border-foreground/10 bg-background/50 backdrop-blur-sm focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Your email"
                      className="border-foreground/10 bg-background/50 backdrop-blur-sm focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="border-foreground/10 bg-background/50 backdrop-blur-sm focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className="border-foreground/10 bg-background/50 backdrop-blur-sm focus:border-primary"
                  />
                </div>

                <Button type="submit" className="group relative inline-flex h-12 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-8 py-1 text-sm font-medium text-foreground dark:text-foreground backdrop-blur-3xl">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                </Button>
              </form>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full border border-primary/10"></div>
              <div className="absolute -left-4 -top-4 h-12 w-12 rounded-full border border-secondary/10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
