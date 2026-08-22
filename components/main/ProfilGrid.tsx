"use client"

import { useState } from "react"
import { profils, type Categorie } from "@/components/data/profils"
import ProfilCard from "./ProfilCard"

const filtres: (Categorie | "Tous")[] = ["Tous", "Front-end", "Back-end", "Full-stack"]

export default function ProfilGrid() {
    const [filtreActif, setFiltreActif] = useState<Categorie | "Tous">("Tous")

    const profilsFiltres = filtreActif === "Tous"
        ? profils
        : profils.filter((p) => p.categorie === filtreActif)

    return (
        <section className="flex flex-col items-center justify-center px-6 py-12">
            <div className="w-auto">
            <p className="text-grey mb-4 text-left ">Spécialité</p>
            <div className="grid items-center justify-center  grid-cols-2 md:grid-cols-4 gap-4 mx-auto border-b border-background-accent pb-6 mb-8">
                {filtres.map((filtre) => (
                    <button
                        key={filtre}
                        onClick={() => setFiltreActif(filtre)}
                        className="px-4 py-2 rounded-full bg-white shadow-sm flex items-center gap-2 cursor-pointer transition-colors hover:border-background-accent"
                    >
                        <span
                            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                                filtreActif === filtre
                                    ? "border-background-accent bg-background-accent"
                                    : "border-grey/40"
                            }`}
                        >
                            {filtreActif === filtre && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            )}
                        </span>
                        <span className={filtreActif === filtre ? "text-background-accent" : "text-grey"}>
                            {filtre}
                        </span>
                    </button>
                ))}
            </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {profilsFiltres.map((profil) => (
                    <ProfilCard key={profil.id} profil={profil} />
                ))}
            </div>
        </section>
    )
}