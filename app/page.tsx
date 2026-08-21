import Image from "next/image"
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link"

export default function Home() {
  return (

    <section className="relative flex flex-col items-center justify-center text-center min-h-150 px-6">
      <Image
          src="/background-1.svg"
          alt=""
          fill
          priority
          className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-blue-950/50 -z-10" />

      <h1 className="font-bold text-white text-100xl md:text-5xl leading-tight mb-3">
          Là où le code rencontre <br /> l&apos;opportunité
      </h1>
      <p className="mt-4 font-medium text-white/90 max-w-xl text-xl mb-6 md:text-2xl">
          Découvrez les développeurs de la Promotion 14 à travers leurs projets, leurs compétences et leurs parcours.
      </p>
     <Link
        href="/profil"
        className="mt-8 border border-white/40 text-white font-semibold px-6 py-3 shadow-xl rounded-full bg-white/30 text-shadow-xs hover:bg-background-accent transition-colors cursor-pointer inline-flex items-center gap-4"
      >
        Explorer leur portfolios <HiArrowRight />
      </Link>
</section>
  )
}