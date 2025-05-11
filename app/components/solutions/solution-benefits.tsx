import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface Benefit {
  title: ReactNode
  description: ReactNode
  icon: ReactNode
  iconColor?: string
}

interface SolutionBenefitsProps {
  title: ReactNode
  subtitle: ReactNode
  benefits: Benefit[]
}

export default function SolutionBenefits({ title, subtitle, benefits }: SolutionBenefitsProps) {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="rounded-lg bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
              <div
                className={cn(
                  "mb-5 flex h-12 w-12 items-center justify-center rounded-full",
                  benefit.iconColor || "text-blue-600 bg-blue-100",
                )}
              >
                {benefit.icon}
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
