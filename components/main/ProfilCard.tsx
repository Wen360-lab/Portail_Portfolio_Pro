"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { HiArrowRight } from "react-icons/hi"
import type { Profil } from "@/components/data/profils"

export default function ProfilCard({ profil }: { profil: Profil }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border-t-8 border-background-accent"
        >
            <div className="relative w-full h-64 px-6">
                <Image src={profil.photo} alt={profil.nom} fill className="object-cover object-[50%_20%]" />
            </div>
            <div className="p-4 text-center">
                <p className="font-heading font-bold text-xl text-background-accent">{profil.nom}</p>
                <p className="font-medium mt-1">{profil.poste}</p>
                <p className="text-sm text-grey mt-3 whitespace-pre-line">{profil.description}</p>
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 mb-4 bg-background-accent font-semibold text-white lg:px-20 px-8 py-2 rounded-xl inline-flex items-center justify-center gap-2 cursor-pointer shadow-2xl hover:bg-background-accent/90 transition-colors"
                >
                    Voir le profil <HiArrowRight />
                </motion.button>
            </div>
        </motion.div>
    )
}