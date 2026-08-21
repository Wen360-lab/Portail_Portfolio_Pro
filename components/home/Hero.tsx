// Hero : section juste après le Header 

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center mt-16 md:mt-25 md:px-10 gap-3">
            {/* Le badge au dessus du titre principal du Hero */}
            <div className="flex gap-3 items-center justify-center">
                <span className="w-3 h-3 md:w-2 md:h-2 bg-background-accent rounded-full"></span>
                <p className="font-body font-grey">Promotion 14 ⋅ École 241</p>
            </div>
            <h1 className="text-center text-background-accent">De l&apos;apprentissage <br /> à la mise en production</h1>
            <p className="mt-4 text-center text-xl md:text-2xl">Découvrez les profils et réalisations de la Promotion 14.</p>
        </section>
    )
}