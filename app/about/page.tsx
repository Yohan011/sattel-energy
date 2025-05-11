import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Globe, LightbulbIcon, Users, Zap, ExternalLink } from 'lucide-react'
import ScrollAnimation from "@/components/scroll-animation-provider"
import Link from "next/link"
import GlobeVisualization from "@/components/globe-visualization"
import ImpactCounter from "@/components/impact-counter"

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/about-hero.jpg"
            alt="Solar panels"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de Sattel Energy</h1>
              <p className="text-xl mb-8">
                Nous sommes dédiés à transformer l'accès à l'énergie en Afrique grâce à des solutions solaires
                innovantes et durables.
              </p>
              <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" asChild>
                <Link href="/about/mission">Découvrir notre mission</Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Chez Sattel Energy, notre mission est de fournir des solutions d'énergie solaire fiables, abordables
                  et durables pour améliorer la qualité de vie des communautés africaines. Nous croyons que l'accès à
                  l'énergie propre est un droit fondamental et un catalyseur essentiel du développement économique et
                  social.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous nous engageons à réduire la dépendance aux combustibles fossiles, à minimiser l'empreinte carbone
                  et à promouvoir un avenir énergétique plus propre et plus durable pour les générations futures.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Nos valeurs fondamentales</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-yellow-500 shrink-0 mt-0.5" />
                      <span>Innovation constante dans nos solutions énergétiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-yellow-500 shrink-0 mt-0.5" />
                      <span>Engagement envers la durabilité environnementale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-yellow-500 shrink-0 mt-0.5" />
                      <span>Excellence dans la qualité et le service client</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-yellow-500 shrink-0 mt-0.5" />
                      <span>Responsabilité sociale et impact communautaire</span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" className="relative">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                <Image src="/assets/images/mission.jpg" alt="Sattel Energy mission" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-yellow-400/20 rounded-lg"></div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Notre Vision</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Nous envisageons un avenir où chaque foyer et entreprise en Afrique a accès à une énergie propre, fiable
                et abordable. Notre vision est de devenir le leader des solutions d'énergie solaire en Afrique, en
                contribuant significativement à la transition énergétique du continent.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                    <LightbulbIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle>Innovation Technologique</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Nous investissons continuellement dans la recherche et le développement pour offrir des solutions
                    solaires de pointe adaptées aux besoins spécifiques du marché africain.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Impact Environnemental</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Chaque installation solaire que nous réalisons contribue à réduire les émissions de CO2 et à
                    préserver l'environnement pour les générations futures.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Développement Communautaire</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Nous créons des opportunités économiques locales et améliorons la qualité de vie dans les
                    communautés où nous opérons grâce à l'accès à l'énergie propre.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Impact with Globe Visualization */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Notre Impact</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Depuis notre création, nous avons réalisé des projets significatifs qui ont transformé l'accès à
                l'énergie dans plusieurs régions d'Afrique.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="mb-2">Projets réalisés</h3>
                <ImpactCounter end={30} prefix="+" />
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Projets livrés depuis la création de SATTEL Energy, incluant l'électrification de villages, solutions
                  pour banques, résidences privées et sites industriels.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="mb-2">Capacité installée</h3>
                <ImpactCounter end={7.5} suffix=" MWp" decimals={1} />
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Mégawatt-crête installés, des micro-centrales villageoises (10-150 kWp) aux projets bancaires (50-150
                  kWp) et villas privées (10-25 kWp).
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="mb-2">Présence géographique</h3>
                <ImpactCounter end={2} suffix=" pays" />
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Présence active en République Démocratique du Congo (siège et projets principaux) et République du
                  Congo (projets pilotes), avec expansion prévue vers 3 pays supplémentaires d'ici 2026.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <div className="h-[500px] rounded-xl overflow-hidden shadow-xl">
            <GlobeVisualization />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation direction="right">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Projets phares</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Électrification de villages et villes rurales (ex: projet Luozi en cours)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Solutions énergétiques pour banques (Equity BCDC Kinshasa et provinces)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>
                      Électrification de résidences privées haut de gamme (Gombe, Mont-Fleury, Binza, Kintambo)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Solutions solaires pour sites agricoles et industriels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Éclairage public solaire (exemple: Boende)</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Projet majeur en cours</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Luozi</h4>
                      <p className="text-gray-600 dark:text-gray-300">6 MWp attendus d'ici 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Notre projet le plus ambitieux à ce jour, visant à électrifier la région de Luozi avec une centrale
                    solaire de grande envergure, apportant l'électricité à des milliers de foyers et entreprises
                    locales.
                  </p>
                  <div className="mt-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/projects/luozi">En savoir plus</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nos Partenaires</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Nous collaborons avec des organisations de premier plan pour fournir des solutions énergétiques de
                qualité et maximiser notre impact.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-all">
                <Image
                  src="/assets/images/partner1.png"
                  alt="Huawei Solar"
                  width={150}
                  height={80}
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-all">
                <Image
                  src="/assets/images/partner2.png"
                  alt="BYD Battery"
                  width={150}
                  height={80}
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-all">
                <Image
                  src="/assets/images/partner3.png"
                  alt="JA Solar"
                  width={150}
                  height={80}
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-all">
                <Image
                  src="/assets/images/partner4.png"
                  alt="Canadian Solar"
                  width={150}
                  height={80}
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.5}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-all">
                <Image
                  src="/assets/images/partner5.png"
                  alt="WEIDA"
                  width={150}
                  height={80}
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={0.6}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-center justify-center h-32 hover:shadow-md transition-all">
                <Image
                  src="/assets/images/partner6.png"
                  alt="KWEIT"
                  width={150}
                  height={80}
                  className="max-h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={0.7}>
            <div className="mt-10 flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/about/partners">
                  En savoir plus sur nos partenaires
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-yellow-400">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-black">Rejoignez-nous dans notre mission</h2>
              <p className="text-black/80 mb-8 text-lg">
                Ensemble, nous pouvons transformer l'accès à l'énergie en Afrique et construire un avenir plus durable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-black text-white hover:bg-black/80" asChild>
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10" asChild>
                  <Link href="/projects/gallery">Découvrir nos projets</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
