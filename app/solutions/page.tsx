import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Home, Building, Factory, Tractor, Sun, Battery, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TranslateSolution } from "@/components/solutions/translate-solution"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Solutions | Sattel Energy",
  description: "Découvrez nos solutions énergétiques adaptées à tous les secteurs et technologies",
}

interface SolutionCardProps {
  title: React.ReactNode
  description: React.ReactNode
  image: string
  href: string
  icon: React.ReactNode
  className?: string
}

const SolutionCard = ({ title, description, image, href, icon, className }: SolutionCardProps) => {
  return (
    <Link href={href} className={cn("group relative overflow-hidden rounded-xl", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/80 z-10" />
      <Image
        src={image || "/placeholder.svg?height=400&width=600"}
        alt={typeof title === "string" ? title : "Solution"}
        width={600}
        height={400}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-white">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm text-gray-200">{description}</p>
        <div className="flex items-center text-yellow-400 transition-transform duration-300 group-hover:translate-x-2">
          <span className="mr-2 font-medium">
            <TranslateSolution fr="En savoir plus" en="Learn more" />
          </span>
          <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  )
}

export default function SolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <TranslateSolution fr="Nos Solutions" en="Our Solutions" />
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
            <TranslateSolution
              fr="Des solutions énergétiques innovantes adaptées à tous les besoins et secteurs d'activité"
              en="Innovative energy solutions tailored to all needs and business sectors"
            />
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#sectors">
                <TranslateSolution fr="Par secteur" en="By sector" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="#technologies">
                <TranslateSolution fr="Par technologie" en="By technology" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              <TranslateSolution fr="Solutions par secteur" en="Solutions by sector" />
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              <TranslateSolution
                fr="Des solutions adaptées à chaque secteur d'activité pour répondre à vos besoins spécifiques"
                en="Solutions adapted to each business sector to meet your specific needs"
              />
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SolutionCard
              title={<TranslateSolution fr="Résidentiel" en="Residential" />}
              description={
                <TranslateSolution
                  fr="Solutions pour maisons individuelles et copropriétés"
                  en="Solutions for individual homes and condominiums"
                />
              }
              image="/placeholder.svg?height=400&width=600"
              href="/solutions/residential"
              icon={<Home size={24} />}
            />
            <SolutionCard
              title={<TranslateSolution fr="Commercial" en="Commercial" />}
              description={
                <TranslateSolution
                  fr="Solutions pour bureaux, commerces et bâtiments tertiaires"
                  en="Solutions for offices, shops and commercial buildings"
                />
              }
              image="/placeholder.svg?height=400&width=600"
              href="/solutions/commercial"
              icon={<Building size={24} />}
            />
            <SolutionCard
              title={<TranslateSolution fr="Industriel" en="Industrial" />}
              description={
                <TranslateSolution
                  fr="Solutions pour sites industriels et grandes installations"
                  en="Solutions for industrial sites and large installations"
                />
              }
              image="/placeholder.svg?height=400&width=600"
              href="/solutions/industrial"
              icon={<Factory size={24} />}
            />
            <SolutionCard
              title={<TranslateSolution fr="Agricole" en="Agricultural" />}
              description={
                <TranslateSolution
                  fr="Solutions pour exploitations agricoles et serres"
                  en="Solutions for farms and greenhouses"
                />
              }
              image="/placeholder.svg?height=400&width=600"
              href="/solutions/agricultural"
              icon={<Tractor size={24} />}
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              <TranslateSolution fr="Solutions par technologie" en="Solutions by technology" />
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              <TranslateSolution
                fr="Découvrez nos différentes technologies pour une transition énergétique réussie"
                en="Discover our different technologies for a successful energy transition"
              />
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SolutionCard
              title={<TranslateSolution fr="Photovoltaïque" en="Photovoltaic" />}
              description={
                <TranslateSolution
                  fr="Production d'électricité à partir de l'énergie solaire"
                  en="Electricity production from solar energy"
                />
              }
              image="/placeholder.svg?height=400&width=600"
              href="/solutions/photovoltaic"
              icon={<Sun size={24} />}
            />
            <SolutionCard
              title={<TranslateSolution fr="Stockage d'énergie" en="Energy Storage" />}
              description={
                <TranslateSolution
                  fr="Solutions de stockage pour optimiser votre consommation"
                  en="Storage solutions to optimize your consumption"
                />
              }
              image="/placeholder.svg?height=400&width=600"
              href="/solutions/storage"
              icon={<Battery size={24} />}
            />
            <SolutionCard
              title={<TranslateSolution fr="Monitoring" en="Monitoring" />}
              description={
                <TranslateSolution
                  fr="Suivi et optimisation de vos installations énergétiques"
                  en="Monitoring and optimization of your energy installations"
                />
              }
              image="/placeholder.svg?height=400&width=600"
              href="/solutions/monitoring"
              icon={<LineChart size={24} />}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <TranslateSolution fr="Prêt à passer à l'énergie solaire ?" en="Ready to switch to solar energy?" />
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            <TranslateSolution
              fr="Contactez nos experts pour une étude personnalisée de votre projet"
              en="Contact our experts for a personalized study of your project"
            />
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-yellow-600 hover:bg-gray-100 group relative overflow-hidden"
            >
              <Link href="/contact">
                <TranslateSolution fr="Demander un devis" en="Request a quote" />
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/configurator">
                <TranslateSolution fr="Utiliser le configurateur" en="Use the configurator" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
