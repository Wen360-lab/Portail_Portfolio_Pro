"use client"

// Header : entête de la page
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import { HiMenu, HiX } from "react-icons/hi"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (

        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-10 py-3 bg-background-accent">
           <Image src="/logo.svg" alt="Logo du portail Portfolio Pro" width={300} height={90} />

           <nav className="hidden md:block px-2">
                <ul className="flex gap-8">
                    <li className="text-white font-heading font-semibold cursor-pointer hover:opacity-80 transition-opacity"><Link href="/" >Accueil</Link></li>
                    <li className="text-white font-heading font-semibold cursor-pointer hover:opacity-80 transition-opacity"><Link href="/profil" >Développeurs</Link></li>
                    <li className="text-white font-heading font-semibold cursor-pointer hover:opacity-80 transition-opacity"><Link href="/about" >À propos</Link></li>
                </ul>
           </nav>

           <button
                className="md:hidden text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Ouvrir le menu"
           >
                {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
           </button>

           {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-background-accent md:hidden">
                    <ul className="flex flex-col items-center gap-6 py-6">
                        <li className="text-white font-heading font-semibold"><Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
                        <li className="text-white font-heading font-semibold"><Link href="/profil" onClick={() => setMenuOpen(false)}>Développeurs</Link></li>
                        <li className="text-white font-heading font-semibold"><Link href="/about" onClick={() => setMenuOpen(false)}>À propos</Link></li>
                    </ul>
                </nav>
           )}

        </header>
    )
}