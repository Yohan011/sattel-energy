"use client"

import Image from "next/image"
import { ChevronRight, Sun, Zap, Shield, Globe } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard } from "@/components/product-card"
import { SolutionCard } from "@/components/solution-card"
import { NewsCard } from "@/components/news-card"
import { useLanguage } from "@/lib/i18n/language-context"
import { Translate } from "@/components/translate"
import ScrollAnimation from "@/components/scroll-animation-provider"
import ImpactCounter from "@/components/impact-counter"

export default function Home() {
  const { language } = useLanguage()

  // Function to handle opening the quote form
  const openQuoteForm = () => {
    const event = new CustomEvent("open-quote-form")
    window.dispatchEvent(event)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg.jpg"
              alt="Solar panels"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container relative z-10 py-24 md:py-32 lg:py-40"
          >
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl"
                  >
                    <Translate text="home.hero.title" />
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="max-w-[600px] text-white/90 md:text-xl"
                  >
                    <Translate text="home.hero.subtitle" />
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-2 min-[400px]:flex-row"
                >
                  <Link
                    href="/solutions"
                    className="inline-block px-6 py-3 text-black bg-yellow-400 rounded-md hover:bg-yellow-500 transition-colors"
                  >
                    <Translate text="home.hero.cta1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-3 text-white border border-white rounded-md hover:bg-white/10 transition-colors"
                  >
                    {language === "fr" ? "Contacter nous" : "Contact us"}
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>

        {/* Key Figures Section */}
        <section className="py-12 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="container">
            <ScrollAnimation>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Nos Chiffres Clés</h2>
                <p className="mt-2 text-white/80">L'impact de SATTEL Energy en chiffres</p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimation direction="up" delay={0.1}>
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                    <Zap className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-3">Projets Réalisés</h3>
                  <div className="text-4xl font-bold mb-2">
                    <ImpactCounter end={30} prefix="+" />
                  </div>
                  <p className="text-white/70">projets livrés depuis notre création</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.2}>
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                    <Sun className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-3">Capacité Installée</h3>
                  <div className="text-4xl font-bold mb-2">
                    <ImpactCounter end={7.5} suffix=" MWp" decimals={1} />
                  </div>
                  <p className="text-white/70">de puissance solaire déployée</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation direction="up" delay={0.3}>
                <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                  <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                    <Globe className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-medium mb-3">Présence Géographique</h3>
                  <div className="text-4xl font-bold mb-2">
                    <ImpactCounter end={2} suffix=" pays" />
                  </div>
                  <p className="text-white/70">avec expansion prévue à 5 pays d'ici 2026</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center text-center md:max-w-[800px] md:mx-auto">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  <Translate text="home.solutions.title" />
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  <Translate text="home.solutions.subtitle" />
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Tabs defaultValue="residential" className="mt-12">
                <div className="flex justify-center">
                  <TabsList className="grid w-full max-w-[600px] grid-cols-3">
                    <TabsTrigger value="residential">
                      <Translate text="solutions.residential" />
                    </TabsTrigger>
                    <TabsTrigger value="commercial">
                      <Translate text="solutions.commercial" />
                    </TabsTrigger>
                    <TabsTrigger value="industrial">
                      <Translate text="solutions.industrial" />
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="residential" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ScrollAnimation direction="up" delay={0.1}>
                      <SolutionCard
                        title="Systèmes résidentiels"
                        description="Solutions complètes pour les maisons individuelles avec optimisation de l'autoconsommation."
                        icon="Home"
                        href="/solutions/residential"
                      />
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.2}>
                      <SolutionCard
                        title="Stockage d'énergie"
                        description="Batteries de stockage pour maximiser votre indépendance énergétique."
                        icon="Battery"
                        href="/solutions/storage"
                      />
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.3}>
                      <SolutionCard
                        title="Monitoring intelligent"
                        description="Suivez votre production et votre consommation en temps réel."
                        icon="LineChart"
                        href="/solutions/monitoring"
                      />
                    </ScrollAnimation>
                  </div>
                </TabsContent>
                <TabsContent value="commercial" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ScrollAnimation direction="up" delay={0.1}>
                      <SolutionCard
                        title="Toitures commerciales"
                        description="Optimisez vos espaces de toiture pour générer de l'électricité verte."
                        icon="Building"
                        href="/solutions/commercial-rooftop"
                      />
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.2}>
                      <SolutionCard
                        title="Ombrières de parking"
                        description="Doubles fonctionnalités : ombre et production d'énergie."
                        icon="ParkingSquare"
                        href="/solutions/carport"
                      />
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.3}>
                      <SolutionCard
                        title="Solutions clé en main"
                        description="De l'étude à la maintenance, nous gérons l'ensemble du projet."
                        icon="Key"
                        href="/solutions/turnkey"
                      />
                    </ScrollAnimation>
                  </div>
                </TabsContent>
                <TabsContent value="industrial" className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <ScrollAnimation direction="up" delay={0.1}>
                      <SolutionCard
                        title="Centrales au sol"
                        description="Solutions à grande échelle pour une production maximale."
                        icon="Factory"
                        href="/solutions/ground-mounted"
                      />
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.2}>
                      <SolutionCard
                        title="Micro-réseaux"
                        description="Systèmes autonomes pour sites isolés ou sécurisation d'alimentation."
                        icon="Network"
                        href="/solutions/microgrids"
                      />
                    </ScrollAnimation>
                    <ScrollAnimation direction="up" delay={0.3}>
                      <SolutionCard
                        title="Intégration industrielle"
                        description="Solutions sur mesure pour les processus industriels énergivores."
                        icon="Cog"
                        href="/solutions/industrial"
                      />
                    </ScrollAnimation>
                  </div>
                </TabsContent>
              </Tabs>
            </ScrollAnimation>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center text-center md:max-w-[800px] md:mx-auto">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  <Translate text="home.products.title" />
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  <Translate text="home.products.subtitle" />
                </p>
              </div>
            </ScrollAnimation>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ScrollAnimation direction="up" delay={0.1}>
                <ProductCard
                  title="Panneaux solaires haute performance"
                  description="Panneaux photovoltaïques de dernière génération avec rendement optimisé."
                  imageSrc="/assets/images/products/structures.jpg"
                  href="/products"
                  category="Panneaux"
                />
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.2}>
                <ProductCard
                  title="Onduleurs intelligents"
                  description="Conversion DC/AC avec monitoring intégré et optimisation de la production."
                  imageSrc="/assets/images/products/onduleurs.jpg"
                  href="/products"
                  category="Onduleurs"
                />
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.3}>
                <ProductCard
                  title="Systèmes de stockage"
                  description="Batteries lithium-ion pour stocker votre énergie et l'utiliser quand vous en avez besoin."
                  imageSrc="/assets/images/products/batteries.jpg"
                  href="/products"
                  category="Stockage"
                />
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.4}>
              <div className="mt-10 flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative overflow-hidden border-2 border-yellow-400 bg-transparent px-8 py-6 text-base font-medium text-primary transition-all hover:bg-yellow-400/10 hover:text-yellow-600 hover:shadow-lg"
                  asChild
                >
                  <Link href="/products" className="flex items-center gap-2">
                    <span className="relative z-10">
                      <Translate text="home.products.cta" />
                    </span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                      <ChevronRight className="h-5 w-5" />
                    </span>
                    <span className="absolute inset-0 z-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  </Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2">
              <ScrollAnimation direction="right">
                <div className="flex flex-col justify-center space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                      <Translate text="home.about.title" />
                    </h2>
                    <p className="mt-4 text-muted-foreground md:text-lg">
                      <Translate text="home.about.subtitle" />
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                        <Sun className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          <Translate text="home.about.innovation" />
                        </h3>
                        <p className="text-muted-foreground">
                          {language === "fr"
                            ? "Nous intégrons les dernières technologies pour maximiser l'efficacité de vos installations."
                            : "We integrate the latest technologies to maximize the efficiency of your installations."}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-400/20">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          <Translate text="home.about.sustainability" />
                        </h3>
                        <p className="text-muted-foreground">
                          {language === "fr"
                            ? "Notre mission est d'accélérer la transition vers un avenir énergétique plus propre et plus durable."
                            : "Our mission is to accelerate the transition to a cleaner and more sustainable energy future."}
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400/20">
                        <Zap className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          <Translate text="home.about.expertise" />
                        </h3>
                        <p className="text-muted-foreground">
                          {language === "fr"
                            ? "Notre équipe d'ingénieurs qualifiés conçoit des solutions adaptées à vos besoins spécifiques."
                            : "Our team of qualified engineers designs solutions tailored to your specific needs."}
                        </p>
                      </div>
                    </li>
                  </ul>
                  <div>
                    <Button className="mt-4" asChild>
                      <Link href="/about">
                        <Translate text="home.about.cta" />
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation direction="left" className="relative order-first md:order-last">
                <div className="relative h-[300px] md:h-full overflow-hidden rounded-xl">
                  <Image src="/images/about-image.png" alt="Sattel Energy team" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 right-24 top-24 -z-10 rounded-xl bg-yellow-400/20" />
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <ScrollAnimation>
              <div className="flex flex-col items-center justify-center text-center md:max-w-[800px] md:mx-auto">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  <Translate text="home.news.title" />
                </h2>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  <Translate text="home.news.subtitle" />
                </p>
              </div>
            </ScrollAnimation>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <ScrollAnimation direction="up" delay={0.1}>
                <NewsCard
                  title="Lancement de notre nouvelle gamme de panneaux solaires"
                  description="Découvrez notre nouvelle génération de panneaux solaires avec un rendement amélioré de 25%."
                  date="15 avril 2023"
                  category="Produits"
                  href="/news/new-panels"
                />
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.2}>
                <NewsCard
                  title="Sattel Energy au salon des énergies renouvelables"
                  description="Retrouvez-nous au salon des énergies renouvelables du 10 au 12 juin 2023 à Paris."
                  date="2 mai 2023"
                  category="Événements"
                  href="/news/renewable-energy-fair"
                />
              </ScrollAnimation>
              <ScrollAnimation direction="up" delay={0.3}>
                <NewsCard
                  title="Nouveau partenariat stratégique"
                  description="Sattel Energy s'associe à un leader européen du stockage d'énergie pour proposer des solutions intégrées."
                  date="20 mai 2023"
                  category="Entreprise"
                  href="/news/strategic-partnership"
                />
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.4}>
              <div className="mt-10 flex justify-center">
                <Button variant="outline" size="lg">
                  <Translate text="home.news.cta" />
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <Image src="/images/cta-bg.jpg" alt="Solar installation" fill className="object-cover brightness-[0.4]" />
          </div>
          <ScrollAnimation className="container relative z-10">
            <div className="mx-auto max-w-[800px] text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                <Translate text="home.cta.title" />
              </h2>
              <p className="mt-4 text-white/90 md:text-lg">
                <Translate text="home.cta.subtitle" />
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" onClick={openQuoteForm}>
                  {language === "fr" ? "Demander un devis" : "Request a quote"}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                  <Link href="/contact">{language === "fr" ? "Contacter nous" : "Contact us"}</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </section>
      </main>
    </div>
  )
}
