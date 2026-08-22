 "use client"
// La section Sponsors qui présente les partenaires (Logo)

import { motion } from "motion/react"
import Image from "next/image"


const logo = [
    {   
        src: "/d_clic-logo.svg",
        alt: "logo D'clic",
    },
    {   
        src: "/oif-logo.svg",
        alt: "logo OIF",
    },
    {   
        src: "/ecole241-logo.svg",
        alt: "logo École 241",
    },
    {   
        src: "/ogoouelab-logo.svg",
        alt: "logo Ogooué Lab",
    }
]

export default function Sponsors() {
    return (
        <section className="flex flex-col items-center justify-center">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-center text-xl md:text-2xl mx-10"
            >
                Ceux grâce à qui tout celà est rendu possible
            </motion.p>
            <div className="grid items-center justify-center  grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
                {logo.map((tech, index) => {
               
                return (
                    <motion.div
                    key={tech.src}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    >
                    <Image src={tech.src} alt={tech.alt} width={250} height={90}/>
                   
                    </motion.div>
                )
                })}
            </div>
        </section>
    )
}