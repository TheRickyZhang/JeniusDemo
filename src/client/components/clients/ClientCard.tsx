// src/components/ClientCard.tsx
import { cn } from "@/shared/utils"
import { Link } from "@tanstack/react-router"

interface TierStyle {
    src: string
    size: string
    translateY: string
    rotate?: string
}

type Tier = "platinum" | "gold" | "silver" | "bronze" | "basic"

const tierStyles: Record<Tier, TierStyle> = {
    platinum: {
        src: "/images/platinum.png",     // TODO: add platinum.png to /images
        size: "h-[30%]",
        translateY: "-translate-y-1/3",
        rotate: "rotate-[-15deg]",
    },
    gold: {
        src: "/images/gold.png",         // TODO: add gold.png to /images
        size: "h-[30%]",
        translateY: "-translate-y-1/3",
    },
    silver: {
        src: "/images/silver.png",       // TODO: add silver.png to /images
        size: "h-[30%]",
        translateY: "-translate-y-1/3",
    },
    bronze: {
        src: "/images/bronze.png",       // TODO: add bronze.png to /images
        size: "h-[30%]",
        translateY: "-translate-y-1/3",
    },
    basic: {
        src: "/images/basic.png",        // TODO: add basic.png to /images
        size: "h-[30%]",
        translateY: "-translate-y-1/3",
    },
}

interface ClientCardProps {
    company: string
    image: string
    link: string
    shadowColor: string
    tier: Tier
}

const ClientCard: React.FC<ClientCardProps> = ({
                                                   company,
                                                   image,
                                                   link,
                                                   shadowColor,
                                                   tier,
                                               }) => {
    const tierStyle = tierStyles[tier]

    return (
        <div className="flex h-full w-full flex-col" style={{ zIndex: 10 }}>
            <p
                className={cn(
                    tier === "platinum" ? "text-gray-300" :
                        tier === "gold"     ? "text-amber-300" :
                            tier === "silver"   ? "text-slate-400" :
                                tier === "bronze"   ? "text-amber-700" :
                                    "text-green-500",
                    "pb-2 text-center font-redhat text-4xl font-semibold"
                )}
            >
                {tier.charAt(0).toUpperCase() + tier.slice(1)}
            </p>

            <div
                className={cn(
                    "relative flex h-full flex-col items-center rounded-2xl border-4 bg-white p-1",
                    shadowColor,
                    "shadow-2xl duration-300 hover:scale-105"
                )}
            >
                <Link to={link} className="absolute inset-0 z-10" />
                <img
                    src={image}
                    alt={`${company} logo`}
                    className="h-5/6 w-full rounded-2xl object-contain"
                />
                <p className="pt-4 pb-4 text-center font-redhat text-3xl font-semibold">
                    {company}
                </p>

                {tierStyle && (
                    <img
                        src={tierStyle.src}
                        alt={`${tier} icon`}
                        className={cn(
                            "absolute left-0 top-0 -translate-x-1/2",
                            tierStyle.size,
                            tierStyle.translateY,
                            tierStyle.rotate ?? ""
                        )}
                    />
                )}
            </div>
        </div>
    )
}

export default ClientCard
