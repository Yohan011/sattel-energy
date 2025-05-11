import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Factory, Gauge, LineChart, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { TranslateSolution } from "@/components/solutions/translate-solution"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Solutions industrielles | Sattel Energy",
  description:
    "Solutions d'énergie solaire pour sites industriels, avec des installations à grande échelle et des solutions de micro-réseaux.",
}

export default function IndustrialSolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <TranslateSolution text="Solutions industrielles" textEn="Industrial Solutions" />
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                  <TranslateSolution
                    fr="Optimisez vos coûts énergétiques et réduisez votre empreinte carbone avec nos solutions solaires pour sites industriels."
                    en="Optimize your energy costs and reduce your carbon footprint with our solar solutions for industrial sites."
                  />
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="group relative overflow-hidden">
                  <Link href="/contact">
                    <TranslateSolution fr="Demander un devis" en="Request a quote" />
                    <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/configurator">
                    <TranslateSolution fr="Configurer votre système" en="Configure your system" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Solutions industrielles d'énergie solaire"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container px-4">
          <SectionHeading
            title={<TranslateSolution fr="Caractéristiques clés" en="Key Features" />}
            description={
              <TranslateSolution
                fr="Nos solutions industrielles sont conçues pour répondre aux besoins spécifiques des sites à forte consommation énergétique."
                en="Our industrial solutions are designed to meet the specific needs of sites with high energy consumption."
              />
            }
            centered={true}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Factory className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Installations à grande échelle" en="Large-scale Installations" />}
              description={
                <TranslateSolution
                  fr="Systèmes solaires de plusieurs mégawatts adaptés aux grands sites industriels."
                  en="Multi-megawatt solar systems adapted to large industrial sites."
                />
              }
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Haute performance" en="High Performance" />}
              description={
                <TranslateSolution
                  fr="Technologies de pointe pour maximiser la production d'énergie et le rendement."
                  en="Cutting-edge technologies to maximize energy production and yield."
                />
              }
            />
            <FeatureCard
              icon={<Gauge className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Fiabilité industrielle" en="Industrial Reliability" />}
              description={
                <TranslateSolution
                  fr="Composants robustes conçus pour fonctionner dans des environnements industriels exigeants."
                  en="Robust components designed to operate in demanding industrial environments."
                />
              }
            />
            <FeatureCard
              icon={<LineChart className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Monitoring avancé" en="Advanced Monitoring" />}
              description={
                <TranslateSolution
                  fr="Systèmes de suivi en temps réel pour optimiser la performance et anticiper la maintenance."
                  en="Real-time monitoring systems to optimize performance and anticipate maintenance."
                />
              }
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4">
          <SectionHeading
            title={<TranslateSolution fr="Nos solutions industrielles" en="Our Industrial Solutions" />}
            description={
              <TranslateSolution
                fr="Des solutions adaptées à tous les types d'industries et de processus de production."
                en="Solutions adapted to all types of industries and production processes."
              />
            }
            centered={true}
          />
          <div className="mt-12 space-y-16">
            <IndustrialSolution
              title={<TranslateSolution fr="Micro-réseaux industriels" en="Industrial Microgrids" />}
              description={
                <TranslateSolution
                  fr="Nos micro-réseaux combinent production solaire, stockage d'énergie et gestion intelligente pour créer un système énergétique autonome et résilient pour votre site industriel."
                  en="Our microgrids combine solar production, energy storage, and intelligent management to create an autonomous and resilient energy system for your industrial site."
                />
              }
              features={[
                <TranslateSolution key="1" fr="Indépendance énergétique complète" en="Complete energy independence" />,
                <TranslateSolution
                  key="2"
                  fr="Intégration avec les générateurs existants"
                  en="Integration with existing generators"
                />,
                <TranslateSolution
                  key="3"
                  fr="Gestion intelligente de la demande"
                  en="Intelligent demand management"
                />,
                <TranslateSolution key="4" fr="Évolutivité et modularité" en="Scalability and modularity" />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
              reverse={false}
            />
            <IndustrialSolution
              title={<TranslateSolution fr="Systèmes d'autoconsommation" en="Self-consumption Systems" />}
              description={
                <TranslateSolution
                  fr="Nos systèmes d'autoconsommation vous permettent de produire votre propre électricité pour alimenter vos processus industriels, tout en restant connecté au réseau pour plus de sécurité."
                  en="Our self-consumption systems allow you to produce your own electricity to power your industrial processes, while remaining connected to the grid for more security."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Réduction significative des coûts énergétiques"
                  en="Significant reduction in energy costs"
                />,
                <TranslateSolution
                  key="2"
                  fr="Dimensionnement optimal selon votre profil de consommation"
                  en="Optimal sizing according to your consumption profile"
                />,
                <TranslateSolution
                  key="3"
                  fr="Possibilité de revente du surplus d'énergie"
                  en="Possibility of reselling surplus energy"
                />,
                <TranslateSolution
                  key="4"
                  fr="Monitoring précis de la production et de la consommation"
                  en="Precise monitoring of production and consumption"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
              reverse={true}
            />
            <IndustrialSolution
              title={<TranslateSolution fr="Solutions de stockage industriel" en="Industrial Storage Solutions" />}
              description={
                <TranslateSolution
                  fr="Nos systèmes de stockage d'énergie à grande échelle vous permettent de stocker l'électricité produite pendant les heures de pointe solaire pour l'utiliser lorsque vous en avez besoin."
                  en="Our large-scale energy storage systems allow you to store electricity produced during solar peak hours for use when you need it."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Batteries haute capacité pour applications industrielles"
                  en="High-capacity batteries for industrial applications"
                />,
                <TranslateSolution
                  key="2"
                  fr="Systèmes de gestion thermique avancés"
                  en="Advanced thermal management systems"
                />,
                <TranslateSolution
                  key="3"
                  fr="Intégration avec les systèmes de gestion d'énergie existants"
                  en="Integration with existing energy management systems"
                />,
                <TranslateSolution
                  key="4"
                  fr="Durée de vie prolongée et maintenance réduite"
                  en="Extended lifespan and reduced maintenance"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-yellow-600 to-yellow-500 py-16 text-white">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <TranslateSolution
                fr="Prêt à transformer votre approvisionnement énergétique ?"
                en="Ready to transform your energy supply?"
              />
            </h2>
            <p className="mt-4 text-lg">
              <TranslateSolution
                fr="Contactez nos experts dès aujourd'hui pour discuter de votre projet industriel et découvrir comment nos solutions peuvent optimiser vos coûts énergétiques."
                en="Contact our experts today to discuss your industrial project and discover how our solutions can optimize your energy costs."
              />
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="default"
                className="bg-white text-yellow-600 hover:bg-gray-100 group relative overflow-hidden"
                asChild
              >
                <Link href="/contact">
                  <TranslateSolution fr="Demander un devis personnalisé" en="Request a customized quote" />
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/projects/gallery">
                  <TranslateSolution fr="Voir nos projets industriels" en="View our industrial projects" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function IndustrialSolution({
  title,
  description,
  features,
  imageSrc,
  reverse = false,
}: {
  title: React.ReactNode
  description: React.ReactNode
  features: React.ReactNode[]
  imageSrc: string
  reverse?: boolean
}) {
  return (
    <div className={`grid gap-8 md:grid-cols-2 ${reverse ? "md:flex md:flex-row-reverse" : ""}`}>
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div>
          <Button asChild className="group relative overflow-hidden">
            <Link href="/contact">
              <TranslateSolution fr="En savoir plus" en="Learn more" />
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={typeof title === "string" ? title : "Solution industrielle"}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
