// Le Footer

import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="flex flex-col px-10 py-20 bg-background-accent mt-30 rounded-t-2xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10">
                <div className="flex flex-col gap-8">
                    <Image src="/logo.svg" alt="Logo du portail Portfolio Pro" width={300} height={90} />

                    <nav>
                        <ul className="flex flex-col lg:flex-row gap-4 text-white font-heading">
                            <li className="hover:opacity-80 transition-opacity"><Link href="/">Accueil</Link></li>
                            <li className="hover:opacity-80 transition-opacity"><Link href="/profil">Développeurs</Link></li>
                            <li className="hover:opacity-80 transition-opacity"><Link href="/about">À propos</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="flex gap-6">
                    <Link href="#" aria-label="LinkedIn" className="text-white hover:opacity-80 transition-opacity">
                        <FaLinkedin size={30} />
                    </Link>
                    <Link href="#" aria-label="Discord" className="text-white hover:opacity-80 transition-opacity">
                        <FaDiscord size={30} />
                    </Link>
                    <Link href="#" aria-label="GitHub" className="text-white hover:opacity-80 transition-opacity">
                        <FaGithub size={30} />
                    </Link>
                </div>
            </div>

            <hr className="text-white/20 mt-16 mb-10" />
            <p className="text-center text-white/80">©2026 École 241. Tous droits réservés</p>
        </footer>
    )
}