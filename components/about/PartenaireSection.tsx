"use client"

// Les partenaires et sponsors

import { motion } from "motion/react"
import Image from "next/image"

interface PartenaireCardProps {
    logo: string
    alt: string
    description: string
}

function PartenaireCard({ logo, alt, description }: PartenaireCardProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-background rounded-xl px-6 py-8 text-center gap-4 shadow-xl">
            <div className="relative h-30 w-32">
                <Image
                    src={logo}
                    alt={alt}
                    fill
                    className="object-contain"
                />
            </div>
            <p className="text-sm text-background-dark">{description}</p>
        </div>
    )
}

const partenaires = [
    {
        logo: "/oif-logo.svg",
        alt: "Organisation internationale de la Francophonie",
        description: "Finance et soutient les initiatives d'éducation et de formation.",
    },
    {
        logo: "/d_clic-logo.svg",
        alt: "D-CLIC",
        description: "Opérateur du programme qui connecte les jeunes aux métiers du digital.",
    },
    {
        logo: "/ecole241-logo-removebg-preview.png",
        alt: "École 241",
        description: "Finance et soutient les initiatives d'éducation et de formation.",
    },
    {
        logo: "/ogoouelab-logo.svg",
        alt: "Ogooué Labs",
        description: "ONG Gabonaise qui promouvoit la jeunesse à travers des formations professionnelles.",
    },
]

export default function PartenaireSection() {
    return (
        <section className="flex flex-col bg-white w-full items-center justify-center pt-10 pb-10 md:pb-25 md:pt-25 px-10 gap-3">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex gap-3 items-center justify-center"
            >
                <span className="w-3 h-3 md:w-2 md:h-2 bg-background-accent rounded-full"></span>
                <p className="font-body text-grey">Partenaires de confiance</p>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-center text-background-accent"
            >
                Nos partenaires
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-center text-xl md:text-2xl max-w-xl"
            >
                Ils nous accompagent dans notre mission pour former et propulser les talents de demain.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-3xl"
            >
                {partenaires.map((partenaire) => (
                    <PartenaireCard
                        key={partenaire.alt}
                        logo={partenaire.logo}
                        alt={partenaire.alt}
                        description={partenaire.description}
                    />
                ))}
            </motion.div>

        </section>
    )
}