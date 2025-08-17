import { Github, Linkedin, Twitter, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/pushpampallavi",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pushpam-choudhary-b12953370/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/username",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      name: "Leetcode",
      url: "https://leetcode.com/pushpampallavi/",
      icon: <BookOpen className="h-5 w-5" />,
    },
  ]

  return (
    <div className={cn("flex items-center space-x-4", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
