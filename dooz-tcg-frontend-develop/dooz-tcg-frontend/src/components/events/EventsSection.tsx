
export default function EventsSection(){
    return (
        <section className={"flex flex-col md:flex-row items-center gap-8 px-6 py-16 bg-background"}>
            <div className={"w-full md:w-1/2 flex justify-center"}>
                <img
                    src={'/event-placeholder.png'}
                    alt={'Événment TCG en boutique'}
                    className={"max-w-md rounded-xl shadow-lg"} />
            </div>
            <div className={"w-full md:w-1/2 text-left"}>
                <h2 className={"text-primary text-3xl md:text-4xl font-bold mb-4"}>
                    Nos événements
                </h2>
                <p className={"text-foreground text-lg leading-relaxed"}>
                    Rejoignez-nous dans notre boutique à Strasbourg pour vivre l'expérience le TCG à fond ! Que vous soyez fan de
                    Pokémon, Magic, Yu-Gi-Oh!... Participez à nos tournois avec Prize Pool, drafts et sessions d’initiation.
                    <br /><br />
                    Chaque semaine, profitez d’une dizaine d’événements pour jouer, apprendre et vous affronter dans une ambiance
                    passionnée !
                </p>
            </div>
        </section>
    )
}