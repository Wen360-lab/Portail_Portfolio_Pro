"use client"

// Hero : section juste après le Header 

import { motion } from "motion/react"
import { HiOutlineLightBulb } from "react-icons/hi";

export default function AboutHero() {
    return (
        <section className="flex flex-col items-center justify-center mt-40 md:mt-45 mx-10 gap-3">
            {/* Le badge au dessus du titre principal du Hero */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-3 items-center justify-center"
            >
                <span className="w-3 h-3 md:w-2 md:h-2 bg-background-accent rounded-full"></span>
                <p className="font-body text-grey">Notre mission</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-center text-background-accent"
            >
                Un portail, une promotion,<br /> des opportunités
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-center text-xl md:text-2xl max-w-xl"
            >
                Valoriser les compétences, connecter les talents, ouvrir les portes de demain.
            </motion.p>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative flex flex-col items-center justify-center bg-background-accent rounded-2xl px-5 py-20 mt-20 md:px-25 md:py-25 md:mt-50"
            >
                <span className="bg-white rounded-full p-3 absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                    <HiOutlineLightBulb className="text-background-accent" size={70}/>
                </span>
                <p className="mt-4 text-center text-xl md:text-2xl text-white font-medium max-w-2xl">
                    Nous croyons au potentiel de chaque apprenant. Portail Portfolio Pro est né pour mettre en lumière les talents de la promotion 14 de l&apos;École 241 et créer des opportunités concrètes avec le monde professionnel.
                </p>
            </motion.div>

        </section>
    )
}