// Page À propos

import Header from "@/components/home/Header"
import AboutHero from "@/components/about/AboutHero"
import EcoleSection from "@/components/about/EcoleSection"

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center ">
        <Header/>
        <AboutHero/>
        <EcoleSection/>
    </section>

  )
}