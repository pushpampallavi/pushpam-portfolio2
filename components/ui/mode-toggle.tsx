"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Wait until the component is mounted to access theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Avoid rendering during SSR

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-9 w-9 overflow-hidden rounded-full"
    >
      <div className="relative h-full w-full">
        <motion.div
          initial={{ y: theme === "dark" ? -30 : 0 }}
          animate={{ y: theme === "dark" ? 0 : -30 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="h-5 w-5" />
        </motion.div>
        <motion.div
          initial={{ y: theme === "light" ? -30 : 0 }}
          animate={{ y: theme === "light" ? 0 : -30 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-5 w-5" />
        </motion.div>
      </div>
    </Button>
  )
}
