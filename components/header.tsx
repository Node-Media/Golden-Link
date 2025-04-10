"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`py-6 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white/95 border-b border-gray-100"
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Decor Systems"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {[
            { name: "PROJECTS", href: "/projects" },
            { name: "PRODUCTS", href: "/products" },
            { name: "RESOURCES", href: "/resources" },
            { name: "ABOUT", href: "/about" },
            { name: "CONTACT", href: "/contact" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={item.href}
                className="text-[#3c4a2f] text-sm uppercase tracking-wide hover:text-[#5a6e47] transition-colors"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}

      
        </nav>
      </div>
    </motion.header>
  )
}
