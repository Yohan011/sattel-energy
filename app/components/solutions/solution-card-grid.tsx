import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface SolutionCard {
  title: ReactNode
  description: ReactNode
  image: string
  href: string
  icon?: ReactNode
}

interface SolutionCardGridProps {
  title: ReactNode
  subtitle: ReactNode
  cards: SolutionCard[]
}

export default function SolutionCardGrid({ title, subtitle, cards }: SolutionCardGridProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Link
              key={index}
              href={card.href}
              className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={typeof card.title === "string" ? card.title : "Solution image"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {card.icon && (
                  <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-blue-600 shadow-md">
                    {card.icon}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-blue-600">{card.title}</h3>
                <p className="mb-4 text-gray-600">{card.description}</p>
                <div className="flex items-center text-blue-600">
                  <span className="mr-2 font-medium">En savoir plus</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
