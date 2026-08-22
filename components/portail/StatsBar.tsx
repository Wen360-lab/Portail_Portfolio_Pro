"use client"

import { motion } from "motion/react"

const stats = [
    { value: "10+", label: "Développeurs" },
    { value: "10+", label: "Projets réalisés" },
    { value: "3", label: "Spécialisations" },
    { value: "14e", label: "Promotion" },
]

export default function StatsBar() {
    return (
        <section className="bg-background-accent px-6 py-8">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, filter: "blur(8px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    >
                        <p className="font-heading font-bold text-white text-3xl md:text-4xl">
                            {stat.value}
                        </p>
                        <p className="text-white/70 text-sm mt-1">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}