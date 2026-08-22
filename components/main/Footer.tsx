// Le Footer

import Image from "next/image"

export default function Footer() {
    return (
        <footer className="flex flex-col px-10 py-20 bg-background-accent mt-30 rounded-t-2xl">
            <div className="flex justify-between">
                <Image src="/logo.svg" alt="Logo du portail Portfolio Pro" width={300} height={90} />
            </div>
            <hr  className="text-white mt-25 mb-10"/>
            <p className="text-center text-white">©2026 Ecole241. Portail Portfolio</p>

        </footer>
    )
}