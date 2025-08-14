import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card.tsx";
import {Button} from "../ui/button.tsx";

type Props = {
    title: string
    image: string
    onClick?: () => void
}

export default function ProductCardHighlight({title, image, onClick}: Props) {
    return (
        <Card className={"flex flex-col items-center justify-between transition hover:shadow-lg"}>
            <CardHeader>
               <img src={image} alt={title}  className={"h-40 object-contain mb-2"}/>
            </CardHeader>
            <CardContent>
                <CardTitle className={"text-lg font-bold text-foreground"}>
                    {title}
                </CardTitle>
            </CardContent>
            <CardFooter>
                <Button onClick={onClick} className={"w-full bg-primary text-foreground hover:bg-primary/90"} >
                    Je Découvre
                </Button>
            </CardFooter>
        </Card>
    )
}