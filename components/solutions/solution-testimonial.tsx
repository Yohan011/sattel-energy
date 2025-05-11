import type { ReactNode } from "react"
import { Quote } from "lucide-react"

interface SolutionTestimonialProps {
  quote: ReactNode
  author: ReactNode
  location: ReactNode
}

export default function SolutionTestimonial({ quote, author, location }: SolutionTestimonialProps) {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-sm md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <Quote size={24} />
            </div>
          </div>

          <blockquote className="mb-8 text-center text-xl font-medium text-gray-900 md:text-2xl">"{quote}"</blockquote>

          <div className="text-center">
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-gray-600">{location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
