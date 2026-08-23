// La section présentant l'École 241

interface StatCardProps {
    value: string
    label: string
    description: string
}

function StatCard({ value, label, description }: StatCardProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-xl px-13 py-7 md:px-6 md:py-8 text-center shadow-sm">
            <span className="text-3xl font-bold text-background-accent font-heading">{value}</span>
            <span className="text-sm font-semibold uppercase tracking-wide text-background-accent mt-1">{label}</span>
            <p className="text-sm text-background-dark mt-2">{description}</p>
        </div>
    )
}

const stats = [
    { value: "6", label: "mois", description: "de formations intensives" },
    { value: "1000+", label: "Apprenants", description: "formés depuis le lancement" },
    { value: "20+", label: "Projets", description: "Réalisés durant la formation" },
    { value: "100%", label: "Pratique", description: "Méthodologie agile" },
]

export default function EcoleSection() {
    return (
        <section className="flex items-center justify-center mt-40  md:mt-45 mx-4 md:mx-10 w-full bg-white">
            <div className="flex flex-col md:flex-row items-center justify-between bg-background px-6 py-10 md:px-25 md:py-35 rounded-xl mt-20 mb-20 gap-10">
                
                <div className="max-w-md">
                    <h2 className="text-background-accent text-3xl text-left font-bold">École 241</h2>
                    <p className="text-background-dark mt-4">
                        L&apos;École 241 forme la nouvelle génération de talents numériques en Afrique.
                    </p>
                    <p className="text-background-dark mt-4">
                        Un programme intensif, basé sur la pratique et l&apos;apprentissage par projet réels, pour développer des compétences techniques, humaines et entrepreneuriales solides.
                    </p>
                    <p className="text-background-dark mt-4">
                        En 6 mois, les apprenants passent de la découverte à l&apos;expertise, prêts à relever les défis du monde professionnel.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-2 p-6 rounded-xl border-background-accent">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.label}
                            value={stat.value}
                            label={stat.label}
                            description={stat.description}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}