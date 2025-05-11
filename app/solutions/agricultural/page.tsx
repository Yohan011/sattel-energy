import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Droplets, Leaf, Sun, Tractor } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { TranslateSolution } from "@/components/solutions/translate-solution"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Solutions agricoles | Sattel Energy",
  description:
    "Solutions d'énergie solaire spécifiques pour le secteur agricole, combinant production d'énergie et utilisation des terres.",
}

export default function AgriculturalSolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <TranslateSolution fr="Solutions agricoles" en="Agricultural Solutions" />
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                  <TranslateSolution
                    fr="Des solutions solaires innovantes pour le secteur agricole, combinant production d'énergie et optimisation des ressources."
                    en="Innovative solar solutions for the agricultural sector, combining energy production and resource optimization."
                  />
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild className="group relative overflow-hidden">
                  <Link href="/contact">
                    <TranslateSolution fr="Demander un devis" en="Request a quote" />
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
                alt="Solutions agricoles d'énergie solaire"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container px-4">
          <SectionHeading
            title={<TranslateSolution fr="Avantages pour votre exploitation" en="Benefits for your farm" />}
            description={
              <TranslateSolution
                fr="Découvrez comment l'énergie solaire peut transformer votre exploitation agricole et améliorer votre rentabilité."
                en="Discover how solar energy can transform your farm and improve your profitability."
              />
            }
            centered={true}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <BenefitCard
              icon={<Sun className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Réduction des coûts énergétiques" en="Reduced Energy Costs" />}
              description={
                <TranslateSolution
                  fr="Diminuez considérablement vos dépenses en électricité et en carburant pour vos opérations agricoles."
                  en="Significantly reduce your electricity and fuel expenses for your agricultural operations."
                />
              }
            />
            <BenefitCard
              icon={<Leaf className="h-10 w-10 text-green-500" />}
              title={<TranslateSolution fr="Agriculture durable" en="Sustainable Agriculture" />}
              description={
                <TranslateSolution
                  fr="Réduisez votre empreinte carbone et adoptez des pratiques agricoles plus respectueuses de l'environnement."
                  en="Reduce your carbon footprint and adopt more environmentally friendly agricultural practices."
                />
              }
            />
            <BenefitCard
              icon={<Droplets className="h-10 w-10 text-blue-500" />}
              title={<TranslateSolution fr="Gestion optimisée de l'eau" en="Optimized Water Management" />}
              description={
                <TranslateSolution
                  fr="Alimentez vos systèmes d'irrigation et de pompage avec une énergie propre et fiable, même dans les zones isolées."
                  en="Power your irrigation and pumping systems with clean and reliable energy, even in isolated areas."
                />
              }
            />
            <BenefitCard
              icon={<Tractor className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Indépendance énergétique" en="Energy Independence" />}
              description={
                <TranslateSolution
                  fr="Assurez la continuité de vos opérations agricoles, même en cas de coupure de courant ou dans les zones sans accès au réseau."
                  en="Ensure the continuity of your agricultural operations, even in case of power outage or in areas without access to the grid."
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
            title={<TranslateSolution fr="Nos solutions agricoles" en="Our Agricultural Solutions" />}
            description={
              <TranslateSolution
                fr="Des solutions adaptées à tous les types d'exploitations agricoles et à leurs besoins spécifiques."
                en="Solutions adapted to all types of farms and their specific needs."
              />
            }
            centered={true}
          />
          <div className="mt-12 space-y-16">
            <AgriSolution
              title={<TranslateSolution fr="Systèmes de pompage solaire" en="Solar Pumping Systems" />}
              description={
                <TranslateSolution
                  fr="Nos systèmes de pompage solaire vous permettent d'alimenter vos pompes d'irrigation et de forage avec l'énergie du soleil, réduisant considérablement vos coûts d'exploitation et votre dépendance aux combustibles fossiles."
                  en="Our solar pumping systems allow you to power your irrigation and drilling pumps with solar energy, significantly reducing your operating costs and your dependence on fossil fuels."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Pompes solaires de surface et submersibles"
                  en="Surface and submersible solar pumps"
                />,
                <TranslateSolution key="2" fr="Systèmes autonomes ou hybrides" en="Autonomous or hybrid systems" />,
                <TranslateSolution
                  key="3"
                  fr="Contrôleurs intelligents pour optimiser le débit"
                  en="Smart controllers to optimize flow"
                />,
                <TranslateSolution
                  key="4"
                  fr="Stockage d'eau et systèmes de distribution"
                  en="Water storage and distribution systems"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
              reverse={false}
            />
            <AgriSolution
              title={<TranslateSolution fr="Agrivoltaïque" en="Agrivoltaics" />}
              description={
                <TranslateSolution
                  fr="L'agrivoltaïque combine production agricole et production d'électricité sur une même parcelle. Nos systèmes sont conçus pour optimiser l'utilisation des terres tout en créant des conditions favorables pour certaines cultures."
                  en="Agrivoltaics combines agricultural production and electricity production on the same plot of land. Our systems are designed to optimize land use while creating favorable conditions for certain crops."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Panneaux surélevés permettant la culture en dessous"
                  en="Elevated panels allowing cultivation underneath"
                />,
                <TranslateSolution
                  key="2"
                  fr="Protection des cultures contre les conditions climatiques extrêmes"
                  en="Protection of crops against extreme weather conditions"
                />,
                <TranslateSolution
                  key="3"
                  fr="Optimisation de l'utilisation de l'eau"
                  en="Optimization of water use"
                />,
                <TranslateSolution
                  key="4"
                  fr="Double revenu : agricole et énergétique"
                  en="Dual income: agricultural and energy"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
              reverse={true}
            />
            <AgriSolution
              title={<TranslateSolution fr="Séchage solaire" en="Solar Drying" />}
              description={
                <TranslateSolution
                  fr="Nos solutions de séchage solaire permettent de conserver et de transformer vos produits agricoles en utilisant l'énergie du soleil, réduisant les pertes post-récolte et augmentant la valeur ajoutée de votre production."
                  en="Our solar drying solutions allow you to preserve and process your agricultural products using solar energy, reducing post-harvest losses and increasing the added value of your production."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Séchoirs solaires directs et indirects"
                  en="Direct and indirect solar dryers"
                />,
                <TranslateSolution
                  key="2"
                  fr="Systèmes hybrides avec appoint électrique"
                  en="Hybrid systems with electric backup"
                />,
                <TranslateSolution
                  key="3"
                  fr="Contrôle de température et d'humidité"
                  en="Temperature and humidity control"
                />,
                <TranslateSolution
                  key="4"
                  fr="Solutions adaptées à différents types de produits"
                  en="Solutions adapted to different types of products"
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
                fr="Prêt à transformer votre exploitation agricole ?"
                en="Ready to transform your farm?"
              />
            </h2>
            <p className="mt-4 text-lg">
              <TranslateSolution
                fr="Contactez nos experts dès aujourd'hui pour discuter de votre projet et découvrir comment nos solutions peuvent répondre à vos besoins spécifiques."
                en="Contact our experts today to discuss your project and discover how our solutions can meet your specific needs."
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
                  <TranslateSolution fr="Demander un devis gratuit" en="Request a free quote" />
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/configurator">
                  <TranslateSolution fr="Utiliser notre configurateur" en="Use our configurator" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function BenefitCard({
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

function AgriSolution({
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
          alt={typeof title === "string" ? title : "Solution agricole"}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
