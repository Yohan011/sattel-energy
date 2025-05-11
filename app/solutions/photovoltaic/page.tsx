import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { TranslateSolution } from "@/components/solutions/translate-solution"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Solutions photovoltaïques | Sattel Energy",
  description:
    "Nos systèmes photovoltaïques de haute performance convertissent l'énergie solaire en électricité pour alimenter vos bâtiments et installations.",
}

export default function PhotovoltaicSolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <TranslateSolution fr="Solutions photovoltaïques" en="Photovoltaic Solutions" />
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                  <TranslateSolution
                    fr="Nos systèmes photovoltaïques de haute performance convertissent l'énergie solaire en électricité pour alimenter vos bâtiments et installations."
                    en="Our high-performance photovoltaic systems convert solar energy into electricity to power your buildings and facilities."
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
                alt="Solutions photovoltaïques"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 dark:bg-gray-950">
        <div className="container px-4">
          <SectionHeading
            title={<TranslateSolution fr="Comment ça fonctionne" en="How It Works" />}
            description={
              <TranslateSolution
                fr="Comprendre le processus de conversion de l'énergie solaire en électricité utilisable."
                en="Understanding the process of converting solar energy into usable electricity."
              />
            }
            centered={true}
          />
          <div className="mt-12">
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-yellow-200 dark:bg-yellow-900/30 md:left-0 md:translate-x-0"></div>
              <div className="space-y-12">
                <ProcessStep
                  number="01"
                  title={<TranslateSolution fr="Captation de la lumière solaire" en="Solar Light Capture" />}
                  description={
                    <TranslateSolution
                      fr="Les cellules photovoltaïques des panneaux solaires captent les photons de la lumière solaire."
                      en="The photovoltaic cells of solar panels capture photons from sunlight."
                    />
                  }
                />
                <ProcessStep
                  number="02"
                  title={<TranslateSolution fr="Génération de courant continu" en="Direct Current Generation" />}
                  description={
                    <TranslateSolution
                      fr="L'énergie des photons est convertie en courant électrique continu (DC) par effet photovoltaïque."
                      en="The energy of photons is converted into direct current (DC) by the photovoltaic effect."
                    />
                  }
                />
                <ProcessStep
                  number="03"
                  title={
                    <TranslateSolution fr="Conversion en courant alternatif" en="Conversion to Alternating Current" />
                  }
                  description={
                    <TranslateSolution
                      fr="L'onduleur transforme le courant continu en courant alternatif (AC) compatible avec vos appareils électriques."
                      en="The inverter transforms direct current into alternating current (AC) compatible with your electrical appliances."
                    />
                  }
                />
                <ProcessStep
                  number="04"
                  title={<TranslateSolution fr="Distribution de l'électricité" en="Electricity Distribution" />}
                  description={
                    <TranslateSolution
                      fr="L'électricité est distribuée dans votre bâtiment pour alimenter vos équipements ou injectée dans le réseau."
                      en="Electricity is distributed in your building to power your equipment or injected into the grid."
                    />
                  }
                />
                <ProcessStep
                  number="05"
                  title={<TranslateSolution fr="Monitoring et optimisation" en="Monitoring and Optimization" />}
                  description={
                    <TranslateSolution
                      fr="Les systèmes de monitoring permettent de suivre la production et d'optimiser les performances de l'installation."
                      en="Monitoring systems allow you to track production and optimize the performance of the installation."
                    />
                  }
                  isLast
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Technologies Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4">
          <SectionHeading
            title={<TranslateSolution fr="Nos technologies photovoltaïques" en="Our Photovoltaic Technologies" />}
            description={
              <TranslateSolution
                fr="Nous utilisons les technologies les plus avancées pour maximiser la production d'énergie et la durabilité de nos installations."
                en="We use the most advanced technologies to maximize energy production and the durability of our installations."
              />
            }
            centered={true}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TechnologyCard
              title={<TranslateSolution fr="Panneaux monocristallins" en="Monocrystalline Panels" />}
              description={
                <TranslateSolution
                  fr="Haute efficacité et performance optimale, idéals pour les espaces limités nécessitant une production maximale."
                  en="High efficiency and optimal performance, ideal for limited spaces requiring maximum production."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
            />
            <TechnologyCard
              title={<TranslateSolution fr="Panneaux polycristallins" en="Polycrystalline Panels" />}
              description={
                <TranslateSolution
                  fr="Excellent rapport qualité-prix, adaptés aux grandes installations où l'espace n'est pas une contrainte."
                  en="Excellent value for money, suitable for large installations where space is not a constraint."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
            />
            <TechnologyCard
              title={<TranslateSolution fr="Panneaux bifaciaux" en="Bifacial Panels" />}
              description={
                <TranslateSolution
                  fr="Captent la lumière des deux côtés, augmentant la production jusqu'à 30% dans les conditions optimales."
                  en="Capture light from both sides, increasing production by up to 30% in optimal conditions."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
            />
            <TechnologyCard
              title={<TranslateSolution fr="Systèmes avec optimiseurs" en="Systems with Optimizers" />}
              description={
                <TranslateSolution
                  fr="Optimisation au niveau de chaque panneau, réduisant l'impact des ombrages et maximisant la production."
                  en="Optimization at the level of each panel, reducing the impact of shading and maximizing production."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
            />
            <TechnologyCard
              title={<TranslateSolution fr="Micro-onduleurs" en="Microinverters" />}
              description={
                <TranslateSolution
                  fr="Conversion DC/AC au niveau de chaque panneau, offrant une meilleure fiabilité et facilité de maintenance."
                  en="DC/AC conversion at the level of each panel, offering better reliability and ease of maintenance."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
            />
            <TechnologyCard
              title={<TranslateSolution fr="Systèmes de suivi solaire" en="Solar Tracking Systems" />}
              description={
                <TranslateSolution
                  fr="Structures mobiles suivant la course du soleil, augmentant la production jusqu'à 40% par rapport aux installations fixes."
                  en="Mobile structures following the path of the sun, increasing production by up to 40% compared to fixed installations."
                />
              }
              imageSrc="/placeholder.svg?height=300&width=500"
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
                fr="Nos solutions photovoltaïques s'adaptent à tous les types de projets et d'environnements."
                en="Our photovoltaic solutions adapt to all types of projects and environments."
              />
            }
            centered={true}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ApplicationCard
              title={<TranslateSolution fr="Installations sur toiture" en="Rooftop Installations" />}
              description={
                <TranslateSolution
                  fr="Utilisation optimale de l'espace disponible sur les toits plats ou inclinés, sans impact sur l'utilisation du bâtiment."
                  en="Optimal use of available space on flat or sloped roofs, without impact on building use."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Intégration esthétique au bâtiment"
                  en="Aesthetic integration with the building"
                />,
                <TranslateSolution
                  key="2"
                  fr="Installation rapide et non invasive"
                  en="Quick and non-invasive installation"
                />,
                <TranslateSolution
                  key="3"
                  fr="Protection supplémentaire de la toiture"
                  en="Additional roof protection"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <ApplicationCard
              title={<TranslateSolution fr="Centrales au sol" en="Ground-mounted Systems" />}
              description={
                <TranslateSolution
                  fr="Installations à grande échelle sur terrains disponibles, idéales pour les projets industriels ou communautaires."
                  en="Large-scale installations on available land, ideal for industrial or community projects."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Optimisation de l'orientation et de l'inclinaison"
                  en="Optimization of orientation and inclination"
                />,
                <TranslateSolution
                  key="2"
                  fr="Possibilité d'intégrer des systèmes de suivi solaire"
                  en="Possibility of integrating solar tracking systems"
                />,
                <TranslateSolution
                  key="3"
                  fr="Compatibilité avec l'agrivoltaïque"
                  en="Compatibility with agrivoltaics"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <ApplicationCard
              title={<TranslateSolution fr="Ombrières solaires" en="Solar Canopies" />}
              description={
                <TranslateSolution
                  fr="Structures combinant production d'énergie et ombrage pour parkings, espaces publics ou zones de stockage."
                  en="Structures combining energy production and shading for parking lots, public spaces, or storage areas."
                />
              }
              features={[
                <TranslateSolution
                  key="1"
                  fr="Double fonction : énergie et protection"
                  en="Dual function: energy and protection"
                />,
                <TranslateSolution
                  key="2"
                  fr="Valorisation d'espaces sous-utilisés"
                  en="Valorization of underused spaces"
                />,
                <TranslateSolution
                  key="3"
                  fr="Possibilité d'intégrer des bornes de recharge pour véhicules électriques"
                  en="Possibility of integrating charging stations for electric vehicles"
                />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
            />
            <ApplicationCard
              title={<TranslateSolution fr="Systèmes autonomes" en="Off-grid Systems" />}
              description={
                <TranslateSolution
                  fr="Solutions complètes avec stockage pour sites isolés sans accès au réseau électrique ou nécessitant une indépendance énergétique."
                  en="Complete solutions with storage for isolated sites without access to the power grid or requiring energy independence."
                />
              }
              features={[
                <TranslateSolution key="1" fr="Autonomie énergétique complète" en="Complete energy autonomy" />,
                <TranslateSolution
                  key="2"
                  fr="Systèmes de stockage adaptés aux besoins"
                  en="Storage systems adapted to needs"
                />,
                <TranslateSolution key="3" fr="Gestion intelligente de l'énergie" en="Intelligent energy management" />,
              ]}
              imageSrc="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-yellow-600 to-yellow-500 py-16 text-white">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <TranslateSolution fr="Prêt à passer à l'énergie solaire ?" en="Ready to switch to solar energy?" />
            </h2>
            <p className="mt-4 text-lg">
              <TranslateSolution
                fr="Contactez nos experts dès aujourd'hui pour discuter de votre projet photovoltaïque et découvrir la solution la plus adaptée à vos besoins."
                en="Contact our experts today to discuss your photovoltaic project and discover the solution best suited to your needs."
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

function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: {
  number: string
  title: React.ReactNode
  description: React.ReactNode
  isLast?: boolean
}) {
  return (
    <div className="relative pl-10 md:grid md:grid-cols-5 md:gap-10 md:pl-0">
      <div className="md:col-span-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white">{number}</div>
      </div>
      <div className="md:col-span-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
        {!isLast && <div className="mt-4 md:hidden"></div>}
      </div>
    </div>
  )
}

function TechnologyCard({
  title,
  description,
  imageSrc,
}: {
  title: React.ReactNode
  description: React.ReactNode
  imageSrc: string
}) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={typeof title === "string" ? title : "Technologie photovoltaïque"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

function ApplicationCard({
  title,
  description,
  features,
  imageSrc,
}: {
  title: React.ReactNode
  description: React.ReactNode
  features: React.ReactNode[]
  imageSrc: string
}) {
  return (
    <div className="grid gap-6 rounded-lg border bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800 md:grid-cols-2">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 mt-1 h-5 w-5 text-yellow-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-[200px] overflow-hidden rounded-lg sm:h-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={typeof title === "string" ? title : "Application photovoltaïque"}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
