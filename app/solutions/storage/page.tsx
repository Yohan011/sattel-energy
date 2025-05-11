import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Battery, BatteryCharging, Clock, LineChart, ShieldCheck, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { TranslateSolution } from "@/components/solutions/translate-solution"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Solutions de stockage d'énergie | Sattel Energy",
  description:
    "Nos systèmes de stockage d'énergie vous permettent de stocker l'électricité produite pendant la journée pour l'utiliser lorsque vous en avez besoin.",
}

export default function StorageSolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <TranslateSolution fr="Solutions de stockage d'énergie" en="Energy Storage Solutions" />
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                  <TranslateSolution
                    fr="Nos systèmes de stockage d'énergie vous permettent de stocker l'électricité produite pendant la journée pour l'utiliser lorsque vous en avez besoin."
                    en="Our energy storage systems allow you to store electricity produced during the day for use when you need it."
                  />
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    <TranslateSolution fr="Demander un devis" en="Request a quote" />
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
                alt="Solutions de stockage d'énergie"
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
            title={<TranslateSolution fr="Avantages du stockage d'énergie" en="Benefits of Energy Storage" />}
            description={
              <TranslateSolution
                fr="Découvrez comment le stockage d'énergie peut transformer votre approche énergétique et améliorer votre indépendance."
                en="Discover how energy storage can transform your energy approach and improve your independence."
              />
            }
            centered={true}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              icon={<ShieldCheck className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Sécurité énergétique" en="Energy Security" />}
              description={
                <TranslateSolution
                  fr="Assurez la continuité de votre alimentation électrique même en cas de coupure de courant ou de conditions météorologiques défavorables."
                  en="Ensure the continuity of your power supply even in case of power outage or unfavorable weather conditions."
                />
              }
            />
            <BenefitCard
              icon={<LineChart className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Optimisation économique" en="Economic Optimization" />}
              description={
                <TranslateSolution
                  fr="Stockez l'énergie lorsqu'elle est abondante et moins chère, et utilisez-la pendant les heures de pointe pour réduire vos coûts."
                  en="Store energy when it is abundant and cheaper, and use it during peak hours to reduce your costs."
                />
              }
            />
            <BenefitCard
              icon={<Zap className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Maximisation de l'autoconsommation" en="Maximizing Self-consumption" />}
              description={
                <TranslateSolution
                  fr="Utilisez jusqu'à 100% de l'énergie produite par vos panneaux solaires en stockant le surplus pour une utilisation ultérieure."
                  en="Use up to 100% of the energy produced by your solar panels by storing the surplus for later use."
                />
              }
            />
            <BenefitCard
              icon={<Battery className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Indépendance énergétique" en="Energy Independence" />}
              description={
                <TranslateSolution
                  fr="Réduisez votre dépendance au réseau électrique et aux fluctuations des prix de l'énergie."
                  en="Reduce your dependence on the power grid and energy price fluctuations."
                />
              }
            />
            <BenefitCard
              icon={<Clock className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Stabilité du réseau" en="Grid Stability" />}
              description={
                <TranslateSolution
                  fr="Contribuez à la stabilité du réseau électrique en lissant les pics de demande et en fournissant des services de régulation."
                  en="Contribute to the stability of the power grid by smoothing demand peaks and providing regulation services."
                />
              }
            />
            <BenefitCard
              icon={<BatteryCharging className="h-10 w-10 text-yellow-500" />}
              title={<TranslateSolution fr="Durabilité environnementale" en="Environmental Sustainability" />}
              description={
                <TranslateSolution
                  fr="Réduisez votre empreinte carbone en maximisant l'utilisation des énergies renouvelables et en minimisant le recours aux énergies fossiles."
                  en="Reduce your carbon footprint by maximizing the use of renewable energies and minimizing the use of fossil fuels."
                />
              }
            />
          </div>
        </div>
      </section>

      {/* Our Technologies Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4">
          <SectionHeading
            title={<TranslateSolution fr="Nos technologies de stockage" en="Our Storage Technologies" />}
            description={
              <TranslateSolution
                fr="Nous proposons une gamme complète de solutions de stockage adaptées à tous les besoins et toutes les échelles."
                en="We offer a complete range of storage solutions adapted to all needs and all scales."
              />
            }
            centered={true}
          />
          <div className="mt-12 space-y-16">
            <TechnologySection
              title={<TranslateSolution fr="Batteries lithium-ion" en="Lithium-ion Batteries" />}
              description={
                <TranslateSolution
                  fr="Nos systèmes de batteries lithium-ion offrent une densité énergétique élevée, une longue durée de vie et une grande fiabilité, idéals pour les applications résidentielles et commerciales."
                  en="Our lithium-ion battery systems offer high energy density, long service life, and high reliability, ideal for residential and commercial applications."
                />
              }
              features={[
                <TranslateSolution key="1" fr="Haute densité énergétique" en="High energy density" />,
                <TranslateSolution key="2" fr="Faible autodécharge" en="Low self-discharge" />,
                <TranslateSolution
                  key="3"
                  fr="Longue durée de vie (jusqu'à 10 ans)"
                  en="Long service life (up to 10 years)"
                />,
                <TranslateSolution key="4" fr="Systèmes modulaires et évolutifs" en="Modular and scalable systems" />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
              reverse={false}
            />
            <TechnologySection
              title={<TranslateSolution fr="Batteries à flux" en="Flow Batteries" />}
              description={
                <TranslateSolution
                  fr="Pour les applications à grande échelle nécessitant un stockage de longue durée, nos batteries à flux offrent une solution robuste et durable avec une capacité de stockage indépendante de la puissance."
                  en="For large-scale applications requiring long-duration storage, our flow batteries offer a robust and durable solution with storage capacity independent of power."
                />
              }
              features={[
                <TranslateSolution key="1" fr="Capacité de stockage évolutive" en="Scalable storage capacity" />,
                <TranslateSolution
                  key="2"
                  fr="Durée de vie très longue (20+ ans)"
                  en="Very long service life (20+ years)"
                />,
                <TranslateSolution
                  key="3"
                  fr="Décharge profonde sans dégradation"
                  en="Deep discharge without degradation"
                />,
                <TranslateSolution
                  key="4"
                  fr="Idéal pour le stockage de longue durée"
                  en="Ideal for long-duration storage"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
              reverse={true}
            />
            <TechnologySection
              title={<TranslateSolution fr="Systèmes hybrides" en="Hybrid Systems" />}
              description={
                <TranslateSolution
                  fr="Nos systèmes hybrides combinent différentes technologies de stockage pour optimiser les performances et les coûts, en fonction des besoins spécifiques de chaque application."
                  en="Our hybrid systems combine different storage technologies to optimize performance and costs, depending on the specific needs of each application."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Combinaison de batteries et de générateurs"
                  en="Combination of batteries and generators"
                />,
                <TranslateSolution
                  key="2"
                  fr="Optimisation des coûts et des performances"
                  en="Optimization of costs and performance"
                />,
                <TranslateSolution
                  key="3"
                  fr="Gestion intelligente des sources d'énergie"
                  en="Intelligent management of energy sources"
                />,
                <TranslateSolution
                  key="4"
                  fr="Adaptabilité aux besoins spécifiques"
                  en="Adaptability to specific needs"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
              reverse={false}
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container px-4">
          <SectionHeading
            title={<TranslateSolution fr="Applications" en="Applications" />}
            description={
              <TranslateSolution
                fr="Nos solutions de stockage d'énergie s'adaptent à tous les secteurs et à toutes les échelles de besoins."
                en="Our energy storage solutions adapt to all sectors and all scales of needs."
              />
            }
            centered={true}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ApplicationCard
              title={<TranslateSolution fr="Résidentiel" en="Residential" />}
              description={
                <TranslateSolution
                  fr="Systèmes de stockage domestiques permettant de maximiser l'autoconsommation solaire et d'assurer une alimentation de secours en cas de coupure."
                  en="Domestic storage systems allowing to maximize solar self-consumption and ensure backup power in case of outage."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
              href="/solutions/residential"
            />
            <ApplicationCard
              title={<TranslateSolution fr="Commercial" en="Commercial" />}
              description={
                <TranslateSolution
                  fr="Solutions pour entreprises et commerces visant à réduire les coûts énergétiques, éviter les pénalités de puissance et assurer la continuité des opérations."
                  en="Solutions for businesses and retail aiming to reduce energy costs, avoid power penalties, and ensure operational continuity."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
              href="/solutions/commercial"
            />
            <ApplicationCard
              title={<TranslateSolution fr="Industriel" en="Industrial" />}
              description={
                <TranslateSolution
                  fr="Systèmes à grande échelle pour sites industriels, permettant de gérer les pics de consommation, d'optimiser l'approvisionnement énergétique et de réduire l'empreinte carbone."
                  en="Large-scale systems for industrial sites, allowing to manage consumption peaks, optimize energy supply, and reduce carbon footprint."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
              href="/solutions/industrial"
            />
            <ApplicationCard
              title={<TranslateSolution fr="Micro-réseaux" en="Microgrids" />}
              description={
                <TranslateSolution
                  fr="Solutions complètes pour créer des réseaux électriques autonomes ou semi-autonomes, idéales pour les zones isolées ou les communautés cherchant l'indépendance énergétique."
                  en="Complete solutions to create autonomous or semi-autonomous electrical networks, ideal for isolated areas or communities seeking energy independence."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
              href="/solutions/photovoltaic"
            />
            <ApplicationCard
              title={<TranslateSolution fr="Télécommunications" en="Telecommunications" />}
              description={
                <TranslateSolution
                  fr="Systèmes de stockage fiables pour alimenter les antennes et stations de télécommunications, assurant une disponibilité continue même dans les zones reculées."
                  en="Reliable storage systems to power telecommunications antennas and stations, ensuring continuous availability even in remote areas."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
              href="/solutions/industrial"
            />
            <ApplicationCard
              title={<TranslateSolution fr="Services publics" en="Public Services" />}
              description={
                <TranslateSolution
                  fr="Solutions pour les infrastructures publiques comme l'éclairage, les hôpitaux ou les écoles, garantissant un service continu et réduisant la dépendance aux générateurs diesel."
                  en="Solutions for public infrastructures such as lighting, hospitals, or schools, guaranteeing continuous service and reducing dependence on diesel generators."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
              href="/solutions/commercial"
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
                fr="Prêt à optimiser votre indépendance énergétique ?"
                en="Ready to optimize your energy independence?"
              />
            </h2>
            <p className="mt-4 text-lg">
              <TranslateSolution
                fr="Contactez nos experts dès aujourd'hui pour discuter de votre projet de stockage d'énergie et découvrir la solution la plus adaptée à vos besoins."
                en="Contact our experts today to discuss your energy storage project and discover the solution best suited to your needs."
              />
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="default" className="bg-white text-yellow-600 hover:bg-gray-100" asChild>
                <Link href="/contact">
                  <TranslateSolution fr="Demander un devis gratuit" en="Request a free quote" />
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

function TechnologySection({
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
          <Button asChild>
            <Link href="/contact">
              <TranslateSolution fr="En savoir plus" en="Learn more" />
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px]">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={typeof title === "string" ? title : "Technologie de stockage"}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

function ApplicationCard({
  title,
  description,
  imageSrc,
  href,
}: {
  title: React.ReactNode
  description: React.ReactNode
  imageSrc: string
  href: string
}) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={typeof title === "string" ? title : "Application de stockage"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="pt-4">
        <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="ghost"
          size="sm"
          className="group-hover:bg-yellow-50 group-hover:text-yellow-600 dark:group-hover:bg-gray-800"
          asChild
        >
          <Link href={href}>
            <TranslateSolution fr="Explorer cette solution" en="Explore this solution" />
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
