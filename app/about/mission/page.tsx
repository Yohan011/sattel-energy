import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Globe,
  LightbulbIcon,
  Users,
  Zap,
  Target,
  Award,
  Leaf,
  Star,
  Shield,
  MapPin,
  Rocket,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation-provider"
import Link from "next/link"

export default function MissionPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/mission.jpg"
            alt="Mission Sattel Energy"
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
        </div>
        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mission & Vision</h1>
              <p className="text-xl mb-8">
                Découvrez notre mission, nos valeurs et nos objectifs pour transformer l'accès à l'énergie en Afrique.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Missions Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Globe className="h-8 w-8 text-yellow-500" />
                Missions de SATTEL Energy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Notre engagement pour un avenir énergétique durable en Afrique.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <Card className="bg-white dark:bg-gray-800 h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-yellow-600" />
                  </div>
                  <CardTitle>Électrifier durablement l'Afrique</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Apporter des solutions solaires innovantes, accessibles et fiables aux particuliers, entreprises et
                    collectivités.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <Card className="bg-white dark:bg-gray-800 h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Réduire la dépendance aux énergies fossiles</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Proposer des alternatives propres, performantes et respectueuses de l'environnement.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <Card className="bg-white dark:bg-gray-800 h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Améliorer la qualité de vie</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Améliorer la qualité de vie des communautés rurales et urbaines par l'accès à une énergie fiable,
                    abordable et durable.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <Card className="bg-white dark:bg-gray-800 h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center mb-4">
                    <LightbulbIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle>Accompagner la transition énergétique</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Offrir des solutions solaires sur mesure, adaptées aux besoins réels et locaux de nos partenaires.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.5}>
              <Card className="bg-white dark:bg-gray-800 h-full hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Former et autonomiser</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Former et autonomiser les compétences locales pour installer, exploiter et maintenir les
                    infrastructures d'énergie solaire.
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Star className="h-8 w-8 text-yellow-500" />
                Valeurs fondamentales de SATTEL Energy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Les principes qui guident nos actions et nos décisions au quotidien.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <LightbulbIcon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous croyons en la recherche permanente de solutions technologiques adaptées à l'Afrique.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Engagement</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous sommes totalement dédiés à la réussite des projets que nous portons pour nos clients et
                  partenaires.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Durabilité</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous privilégions des solutions à long terme, qui minimisent l'impact environnemental et maximisent
                  les bénéfices pour les générations futures.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous visons la qualité absolue dans nos produits, services et dans la relation client.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.5}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-red-400/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Intégrité</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous opérons avec transparence, honnêteté et responsabilité envers toutes les parties prenantes.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.6}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proximité</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous construisons des solutions proches des besoins réels des populations et des entreprises locales.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Objectifs 2025 Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Target className="h-8 w-8 text-yellow-500" />
                Objectifs Stratégiques 2025
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Nos ambitions à court terme pour accélérer notre impact.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScrollAnimation direction="left">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-full">
                <div className="w-14 h-14 rounded-full bg-yellow-400/20 flex items-center justify-center mb-6">
                  <Zap className="h-7 w-7 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Croissance et expansion commerciale</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        Multiplier par 2 le chiffre d'affaires par rapport à 2024, porté par :
                      </p>
                      <ul className="ml-6 mt-2 space-y-2 list-disc text-gray-600 dark:text-gray-300">
                        <li>Le déploiement massif des solutions solaires pour les agences Equity BCDC.</li>
                        <li>Le développement des ventes résidentielles (solutions pour maisons et villas).</li>
                        <li>L'électrification rurale à grande échelle (Luozi, Kwilu...).</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Renforcer la présence sur de nouveaux marchés :</p>
                      <ul className="ml-6 mt-2 space-y-2 list-disc text-gray-600 dark:text-gray-300">
                        <li>Provinces du Kasaï, Kwango, Haut-Katanga, Sud-Kivu.</li>
                        <li>Ouverture d'une nouvelle antenne régionale (Luozi).</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Consolider la clientèle privée haut de gamme :</p>
                      <ul className="ml-6 mt-2 space-y-2 list-disc text-gray-600 dark:text-gray-300">
                        <li>Doubler le nombre de villas électrifiées avec des solutions Premium ({">="} 15 kWc).</li>
                        <li>Développer l'offre sur-mesure pour les hôtels, hôpitaux privés, grandes résidences.</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2} className="lg:col-span-2">
              <div className="relative h-full">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md h-full">
                  <div className="w-14 h-14 rounded-full bg-blue-400/20 flex items-center justify-center mb-6">
                    <Rocket className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Objectif à long terme - Horizon 2030</h3>
                  <div className="mb-8">
                    <p className="text-lg font-medium mb-4">
                      Devenir d'ici 2030 le leader de l'électrification solaire décentralisée en Afrique francophone, en
                      apportant l'énergie propre à plus de 10 millions de personnes, tout en étant une référence
                      d'innovation, de qualité et de respect environnemental.
                    </p>
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-4">
                      <p className="text-center font-semibold text-lg">
                        « SATTEL Energy : Allumer aujourd'hui l'Afrique de demain. »
                      </p>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">Concrètement :</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>Construire plus de 200 MW de capacité solaire installée cumulée d'ici 2030.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>Étendre ses activités dans au moins 8 pays africains.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>Développer des solutions solaires + stockage totalement autonomes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>Devenir un acteur majeur de la formation en métiers de l'énergie solaire.</span>
                    </li>
                    <li className="flex items-start gap-3 md:col-span-2">
                      <CheckCircle className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                      <span>
                        Promouvoir des projets à impact social : électrification de villages, écoles, centres de santé,
                        marchés ruraux.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimation>
          </div>
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
