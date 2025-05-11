import type { ReactNode } from "react"

interface Step {
  number: number
  title: ReactNode
  description: ReactNode
}

interface SolutionProcessProps {
  title: ReactNode
  subtitle: ReactNode
  steps: Step[]
}

export default function SolutionProcess({ title, subtitle, steps }: SolutionProcessProps) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-blue-200"></div>

          <div className="relative z-10 space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center">
                  <div className="absolute left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-blue-600 text-white">
                    {step.number}
                  </div>
                </div>

                <div
                  className={`mt-6 rounded-lg bg-white p-6 shadow-sm ${
                    index % 2 === 0 ? "ml-auto mr-8 md:mr-24 md:w-5/12" : "mr-auto ml-8 md:ml-24 md:w-5/12"
                  }`}
                >
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
