export default function AboutSection() {
    return (
        <section className={"w-full py-16 bg-muted"}>
            <div className={"max-w7-xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12"}>
                <div className={"md:w-1/2 text-center md:text-left"}>
                    <h2 className={"text-3xl md:text-4xl font-bold text-primary mb-6"}>
                        A propos de nous
                    </h2>
                    <p className={"text-foreground text-lg leading-relaxed"}>
                        Rejoignez-nous dans notre boutique à Strasbourg pour vivre
                        l&apos;expérience le TCG à fond ! Que vous soyez fan de Pokémon,
                        Magic, Yu-Gi-Oh!... Participez à nos tournois avec Prize Pool,
                        drafts et sessions d&apos;initiation. Chaque semaine, profitez
                        d’une dizaine d’événements pour jouer, apprendre et vous affronter
                        dans une ambiance passionnée !
                    </p>
                </div>
                <div className={"md:w-1/2 flex justify-center"}>
                    <img
                        src={"/about-image.png"}
                        alt={"Illustration à propos de nous"}
                        className={"max-w-md w-full rounded-xl shadow-lg"} />
                </div>
            </div>
        </section>
    )
}