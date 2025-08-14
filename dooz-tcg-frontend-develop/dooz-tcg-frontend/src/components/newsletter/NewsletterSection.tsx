import {Input} from "../ui/input.tsx";
import {Button} from "../ui/button.tsx";
import {Checkbox} from "../ui/checkbox.tsx";
import {Label} from "../ui/label.tsx";


export default function NewsletterSection() {
    return (
        <section className={"relative bg-primary-foreground py-12 px-4"}>
            <div className={"relative max-w-6xl mx-auto bg-primary text-foreground rounded-2xl p-8 shadow-md overflow-hidden"}>
                <div className={"absolute inset-0 -z-10"}>

                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"}>
                    <div>
                        <h2 className={"text-3xl font-bold mb-4"}>Newsletter</h2>
                        <p className={"text-lg mb-2"}>
                            Tu souhaite être informé de nos nouveauté en avant-première ?
                        </p>
                        <p className={"text-lg"}>
                            Inscrit-toi à notre newsletter
                        </p>
                    </div>
                    <form className={"space-y-4"}>
                        <div className={"flex gap-2"}>
                            <Input
                                type={"email"}
                                placeholder={"Ton adresse e-mail"}
                                className={"flex-1 text-black"} />
                            <Button type={"submit"} className={"bg-yellow-400 text-foreground hover:bg-yellow-500"}>
                                S'inscrire
                            </Button>
                        </div>
                        <div className={"flex items-center space-x-2"}>
                            <Checkbox id={"rgpd"} />
                            <Label htmlFor={"rgpd"} className={"text-white text-sm"}>
                                Tu confirmes avoir pris connaissance de la{" "}
                                <span className={"text-yellow-400 underline cursor-pointer"}>
                                    politique de confidentialité
                                </span>.
                            </Label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}