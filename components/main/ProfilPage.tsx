export default function ProfilPage() {
    return (
        <section className="w-full">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
            >
                <source src="/animo-spread-rows-720p.webm" type="video/webm" />
                <source src="/animo-spread-rows-720p.mp4" type="video/mp4" />
            </video>
        </section>
    )
}