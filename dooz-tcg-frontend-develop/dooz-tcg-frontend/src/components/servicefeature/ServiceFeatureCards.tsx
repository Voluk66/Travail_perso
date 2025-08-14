import {ReactNode} from "react";
import {Card, CardContent} from "../ui/card.tsx";

type Props = {
    icon: ReactNode
    title: string
    description: string
    bgColor: string
}

export default function ServiceFeatureCards({ icon, title, description, bgColor }: Props) {
    return (
        <Card className={"bg-muted/50 border-none shadow-none"}>
            <CardContent className={"flex flex-col items-center text-center p-6"}>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${bgColor}`}>
                    {icon}
                </div>
                <h3 className={"font-bold text-lg text-primary mb-1"}>{title}</h3>
                <p className={"text-muted-foreground text-sm"}>{description}</p>
            </CardContent>
        </Card>
    )
}