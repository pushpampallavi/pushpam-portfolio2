import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="#hero" className="font-space text-xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pushpam Pallavi
              </span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Creating digital experiences that inspire
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex gap-4">
              <a
                href="https://github.com/pushpampallavi"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-foreground/30 hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/pushpam-choudhary-b12953370/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-foreground/30 hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.x.com/pushpampallavi"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-foreground/30 hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:pushpampalavi@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/10 transition-colors hover:border-foreground/30 hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div> */}
      </div>
    </footer>
  )
}
