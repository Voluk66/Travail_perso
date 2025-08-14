import {Button} from "../ui/button.tsx";
import {Card, CardContent, CardDescription, CardFooter, CardTitle} from "../ui/card.tsx";
import {useNavigate} from "react-router-dom";

type Props = {
    id: string,
    name: string
    price: string
    image: string
    hot?: boolean
}

export default function ProductCard({ id, name, price, image, hot}: Props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${id}`);
    }

    return (
        <Card className={"w-full max-w-sm relative flex flex-col items-center justify-between"}>
            {hot && (
                <span className={"absolute top-2 left-2 bg-primary text-foreground text-sm px-2 py-1 rounded z-10"}>
                    Hot
                </span>
            )}
            <CardContent className={"p-4 flex flex-col items-center"}>
                <img src={image}
                     alt={name}
                     className={"w-[200px] h-[200px]} object-contain mx-auto mb-4"} />
                <CardTitle className={"text-lg text-center"}>{name}</CardTitle>
                <CardDescription className={"text-xl font-bold text-center text-foreground"}>{price}</CardDescription>
            </CardContent>
            <CardFooter className={"w-full"}>
                <Button className={"w-full"} onClick={handleClick}>Je le commande !</Button>
            </CardFooter>
        </Card>
    )
}