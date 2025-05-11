import type { ReactNode } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface SolutionCtaProps {
  title: ReactNode
  description: ReactNode
  primaryButtonText: ReactNode
  primaryButtonHref: string
  secondaryButtonText?: ReactNode
  secondaryButtonHref?: string
}

export default function SolutionCta({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
}: SolutionCtaProps) {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-blue-100">{description}</p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden border-2 border-yellow-400 bg-transparent text-white hover:bg-yellow-400/10 hover:text-yellow-300 hover:shadow-md transition-all duration-300"
            >
              <Link href={primaryButtonHref} className="flex items-center">
                {primaryButtonText}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
              </Link>
            </Button>

            {secondaryButtonText && secondaryButtonHref && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 group relative overflow-hidden"
              >
                <Link href={secondaryButtonHref} className="flex items-center">
                  {secondaryButtonText}
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
