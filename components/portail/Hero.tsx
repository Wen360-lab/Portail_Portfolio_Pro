"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { HiArrowRight } from "react-icons/hi"

const TRANSITION_DURATION = 10000

export default function Hero() {
    const router = useRouter()
    const [transitioning, setTransitioning] = useState(false)

    function handleClick(e: React.MouseEvent) {
        e.preventDefault()
        setTransitioning(true)
        setTimeout(() => {
            router.push("/profil")
        }, TRANSITION_DURATION)
    }

    return (
        <>
            <section className="relative flex flex-col items-center justify-center text-center flex-1 px-6">
                <Image
                    src="/background-1.svg"
                    alt=""
                    fill
                    priority
                    className="object-cover -z-10"
                />
                <div className="absolute inset-0 bg-background-accent/50 -z-10" />

                <motion.h1
                    initial={{ opacity: 0, filter: "blur(12px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1 }}
                    className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-3"
                >
                    Là où le code rencontre <br /> l&apos;opportunité
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="mt-4 text-white/90 max-w-xl text-xl mb-6 md:text-2xl"
                >
                    Découvrez les développeurs de la Promotion 14 à travers leurs projets, leurs compétences et leurs parcours.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    onClick={handleClick}
                    className="font-button mt-8 border border-white text-white font-semibold px-6 py-3 shadow-xl rounded-full hover:bg-white/60 hover:text-background-accent transition-colors cursor-pointer inline-flex items-center gap-4"
                >
                    Explorer leur portfolios <HiArrowRight />
                </motion.button>
            </section>

            <AnimatePresence>
                {transitioning && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-background-accent"
                    >
                        <Image src="/logo.svg" alt="Logo Portail Portfolio Pro" width={500} height={100} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}