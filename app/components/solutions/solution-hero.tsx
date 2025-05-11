import Image from "next/image"
import type { ReactNode } from "react"

interface SolutionHeroProps {
  title: ReactNode
  description: ReactNode
  image: string
  icon?: ReactNode
}

export default function SolutionHero({ title, description, image, icon }: SolutionHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950 py-20 text-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <Image src={image || "/placeholder.svg"} alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-blue-950/60"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center">
            {icon && (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                {icon}
              </div>
            )}
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{title}</h1>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-blue-100 sm:text-2xl">{description}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="h-2 w-20 rounded-full bg-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
