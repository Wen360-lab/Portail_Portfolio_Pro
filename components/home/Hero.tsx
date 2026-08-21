"use client"

// Hero : section juste après le Header 

import { motion } from "motion/react"

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center mt-40 md:mt-45 mx-10 gap-3 ">
            {/* Le badge au dessus du titre principal du Hero */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-3 items-center justify-center"
            >
                <span className="w-3 h-3 md:w-2 md:h-2 bg-background-accent rounded-full"></span>
                <p className="font-body font-grey">Promotion 14 ⋅ École 241</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-center text-background-accent"
            >
                De l&apos;apprentissage <br /> à la mise en production
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-center text-xl md:text-2xl"
            >
                Découvrez les profils et réalisations de la Promotion 14.
            </motion.p>
        </section>
    )
}