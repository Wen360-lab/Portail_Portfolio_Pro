"use client"

// CTA Final

import Link from "next/link"
import { motion } from "motion/react"
import { HiArrowRight } from "react-icons/hi"

export default function CtaSection() {
    return (
        <section className="flex flex-col items-center justify-center py-40 pt-40 md:pt-45 mx-10 gap-3 bg-background-accent w-full">
            {/* Le badge au dessus du titre principal du Hero */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-3 items-center justify-center"
            >
                <span className="w-3 h-3 md:w-2 md:h-2 bg-white rounded-full"></span>
                <p className="font-body text-white/90">Notre mission</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-center text-white"
            >
                Découvrez les talents <br />de la promotion 14
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <Link
                    href="/profil"
                    className="font-button mt-8 border border-white text-white font-semibold px-6 py-3 shadow-xl rounded-full hover:bg-white/60 hover:text-background-accent transition-colors cursor-pointer inline-flex items-center gap-4"
                >
                    Explorer leur portfolios <HiArrowRight />
                </Link>
            </motion.div>

           
        </section>
    )
}