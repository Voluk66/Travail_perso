import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card.tsx";
import {Heart} from "lucide-react";

type Props = {
    name: string
    price: string
    image: string
}

export default function PreorderCard({name, price, image}: Props) {
    return (
        <Card className={"relative w-full max-w-xs mx-auto p-2 border rounded-xl shadow-md hover:shadow-lg transition"}>
            <Heart className={"absolute top-2 right-2 text-primary"} size={20} />
            <CardContent className={"flex justify-center items-center"}>
                <img src={image} alt={name} className={"w-full h-auto max-h-[220px] object-contain"} />
            </CardContent>
            <CardHeader className={"text-center"}>
                <CardTitle className={"text-base font-semibold leading-tight"}>{name}</CardTitle>
            </CardHeader>
            <CardFooter className={"text-primary font-bold border border-primary px-4 py-2 rounded-md"}>
                {price}
            </CardFooter>
        </Card>
    )
}