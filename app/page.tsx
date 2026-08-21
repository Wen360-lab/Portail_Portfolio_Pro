import Hero from "@/components/portail/Hero"
import StatsBar from "@/components/portail/StatsBar"

export default function Home() {
    return (
         <div className="h-dvh flex flex-col overflow-hidden">
           <Hero />
           <StatsBar />
         </div>
        
    )
}