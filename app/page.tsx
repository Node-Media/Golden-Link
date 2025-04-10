"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ProjectShowcase from "@/components/project-showcase"
import ProjectShowcase1 from "@/components/project-showcase copy"
import ProjectShowcase2 from "@/components/project-showcase copy 2"
import Footer from "@/components/footer"

export default function Home() {  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area */}
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <motion.section
          className="py-24 md:py-32 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto">
          <motion.h1
  className="text-[#3c4a2f] text-5xl md:text-7xl lg:text-8xl font-light leading-tight max-w-5xl"
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <span className="block">Golden Link</span>
  <span className="block mt-8">INTERIOR FIT OUT</span>
</motion.h1>

            <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start">
              <motion.p
                className="text-[#3c4a2f] text-xl max-w-md mb-8 md:mb-0"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We help transform spaces into places 
                <br/>
                That inspire, engage and connect people.
                </motion.p>

              <motion.div
                className="flex flex-col md:flex-row gap-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-[#3c4a2f]">BUILT TO SPEC</p>
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider text-[#3c4a2f]">INDIGENOUS OWNED SINCE. 2002</p>
                  <p className="text-xs uppercase tracking-wider text-[#3c4a2f]">ISO CERTIFIED</p>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Supply Nation Certified"
                    width={60}
                    height={60}
                    className="ml-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <footer className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white z-50">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
              <div className="flex items-center space-x-2">
                <Link href="/" className="text-gray-700 text-sm font-medium">
                  Golden Link
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="default" className="bg-[#3c4a2f] hover:bg-[#2e3a23] text-white flex items-center">
                  Chat online
                  <span className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-square"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-700">
                  Request a quote
                </Button>
              </div>
            </div>
          </footer>
        </motion.section>

        {/* Wave Section */}
        <motion.section
          className="relative h-[400px] md:h-[500px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg viewBox="0 0 1440 400" className="absolute w-full h-full">
            <motion.path
              d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,229.3C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              fill="#3c4a2f"
              initial={{
                d: "M0,400L60,400C120,400,240,400,360,400C480,400,600,400,720,400C840,400,960,400,1080,400C1200,400,1320,400,1380,400L1440,400L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z",
              }}
              animate={{
                d: "M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,229.3C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
              }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.section>

        {/* Acoustic Products Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <motion.h2
              className="text-[#3c4a2f] text-3xl md:text-4xl font-light mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ACOUSTIC PRODUCTS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="aspect-square relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Acoustic Product 1"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="aspect-square relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Acoustic Product 2"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="aspect-square relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Acoustic Product 3"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>

            <div className="mt-8 flex justify-end">
              <motion.div
                className="max-w-xs text-sm text-[#3c4a2f]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p>Micromanaging reverberation of sound. Built to exacting standards, with first-rate protection.</p>
                <Button variant="outline" className="mt-4 border-[#3c4a2f] text-[#3c4a2f] rounded-full px-6">
                  View all products
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <ProjectShowcase />
        <ProjectShowcase1 />
        <ProjectShowcase2 />

      </main>

      {/* Footer */}
      <Footer/>
     
    </div>
  )
}
