import { ArrowUpLeft, BadgeCheck, GripVertical, Layers, Sparkles, Target } from "lucide-react"
import { Badge } from "@workspace/ui/components/badge"
export const Offer = () => {
    const offerings = [{
        offer: "Custom Landing Page",
        icon: GripVertical,
        charge: "$1000",
        type: "one time"
    }, {
        offer: "AI Content & Growth Pack",
        icon: GripVertical,
        charge: "$2000",
        type: "monthly retainer"
    }]
    return <div className="w-full border-b">
        <div className="max-w-7xl mx-auto">
            <div className="text-3xl font-medium border-b px-4 py-3 border-x">Offerings</div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {offerings.map((offer, idx) => (
                    <div key={idx} className="flex border-b md:border-b-0 border-x relative">
                        <div className="border-r w-[50px] flex items-center justify-center">{<offer.icon size={30}/>}</div>
                        <div className="flex-1 px-4 py-3">
                            <div className="text-lg font-semibold">{offer.offer}</div>
                            <Badge className="text-xs" variant={"secondary"}>{offer.type}</Badge>
                        </div>
                        <div className="absolute top-3 right-5">
                            <Badge variant={"outline"} className="gap-1 rounded-full">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                {offer.charge}</Badge>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
}