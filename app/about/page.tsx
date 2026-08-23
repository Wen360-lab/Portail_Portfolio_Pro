// Page À propos

import Header from "@/components/home/Header"
import AboutHero from "@/components/about/AboutHero"
import EcoleSection from "@/components/about/EcoleSection"
import PartenaireSection from "@/components/about/PartenaireSection"
import CtaSection from "@/components/about/CtaSection"

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center ">
        <Header/>
        <AboutHero/>
        <EcoleSection/>
        <PartenaireSection/>
        <CtaSection/>
    </section>

  )
}