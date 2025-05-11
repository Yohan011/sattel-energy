import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Battery,
  Power,
  Users,
  Settings,
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Sun,
  Home,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Solutions Résidentielles | Sattel Energy",
  description: "Solutions d'énergie solaire pour les foyers dans les régions mal desservies ou éloignées",
}

export default function ResidentialSolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-blue-950 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/assets/images/solutions/residential.png" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-blue-800/50 rounded-full mb-6">
              <Home className="h-8 w-8 text-yellow-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Solutions Résidentielles</h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Des solutions photovoltaïques sur mesure pour les foyers dans les régions mal desservies ou éloignées
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-medium" asChild>
                <Link href="#contact" className="flex items-center">
                  Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="#solutions">Découvrir nos solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-950">Énergie Solaire pour Tous</h2>
            <p className="text-lg text-gray-700 mb-8">
              Chez Sattel Energy, nous proposons une gamme complète de solutions solaires adaptées aux besoins des
              foyers, notamment dans les zones non desservies ou faiblement desservies par le réseau électrique. Nos
              installations garantissent autonomie, fiabilité et performance, avec un service clé en main.
            </p>

            <div className="flex justify-center">
              <div className="h-1 w-20 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-blue-950">Nos Solutions Résidentielles</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Des solutions adaptées à chaque besoin, de l'autonomie complète à l'optimisation de votre consommation
              énergétique.
            </p>
          </div>

          {/* Off-Grid Solar Kits */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-xl h-[400px]">
              <Image
                src="/assets/images/products/kits.jpg"
                alt="Kit solaire hors réseau"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-yellow-500">
                    <Battery className="h-6 w-6 text-blue-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Kits Solaires Hors Réseau</h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">Kits Solaires Hors Réseau (Off-Grid)</h3>
              <p className="text-gray-700 mb-6">
                Nos systèmes autonomes sont conçus pour les foyers sans accès au réseau électrique. Ils offrent une
                indépendance énergétique totale et fiable, adaptée aux besoins essentiels de votre foyer.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Composants de haute qualité</h4>
                    <p className="text-gray-600">
                      Panneaux solaires photovoltaïques, batteries lithium-ion, onduleurs et régulateurs de charge
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Applications</h4>
                    <p className="text-gray-600">
                      Alimentation d'éclairage, réfrigérateurs, téléphones, ordinateurs et autres appareils essentiels
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Idéal pour</h4>
                    <p className="text-gray-600">
                      Zones rurales, régions isolées et tout foyer souhaitant une indépendance énergétique complète
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Backup Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">Solutions de Secours pour Réseau Instable</h3>
              <p className="text-gray-700 mb-6">
                Nos systèmes hybrides sont conçus pour compléter un réseau électrique peu fiable, en basculant
                automatiquement vers l'énergie solaire pendant les coupures de courant, assurant ainsi une alimentation
                continue.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Fonctionnement intelligent</h4>
                    <p className="text-gray-600">
                      Combinaison réseau/solaire avec bascule automatique lors des coupures
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Avantages</h4>
                    <p className="text-gray-600">
                      Sécurité énergétique 24h/24, protection des appareils sensibles, réduction des factures
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Idéal pour</h4>
                    <p className="text-gray-600">
                      Zones urbaines avec instabilité du réseau et foyers nécessitant une alimentation ininterrompue
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl h-[400px] order-1 lg:order-2">
              <Image
                src="/assets/images/products/batteries.jpg"
                alt="Système de secours"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-yellow-500">
                    <Power className="h-6 w-6 text-blue-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Solutions de Secours</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Microgrids */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-xl h-[400px]">
              <Image
                src="/assets/images/projects/luozi.jpg"
                alt="Micro-réseau résidentiel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-yellow-500">
                    <Users className="h-6 w-6 text-blue-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Micro-Réseaux Résidentiels</h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">Micro-Réseaux Résidentiels</h3>
              <p className="text-gray-700 mb-6">
                Nos micro-réseaux solaires jusqu'à 100 kVA peuvent alimenter plusieurs foyers ou communautés entières,
                offrant une solution collective économique et efficace pour l'électrification rurale.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Applications</h4>
                    <p className="text-gray-600">
                      Communautés rurales, groupes de maisons, quartiers entiers et petits villages
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Avantages économiques</h4>
                    <p className="text-gray-600">
                      Économie d'échelle, partage des coûts, distribution centralisée de l'énergie
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Gestion intelligente</h4>
                    <p className="text-gray-600">
                      Systèmes de monitoring, répartition équitable, maintenance centralisée
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">Conception et Installation Sur Mesure</h3>
              <p className="text-gray-700 mb-6">
                Notre service complet comprend l'évaluation de vos besoins énergétiques, la conception personnalisée de
                votre système et l'installation professionnelle par nos techniciens qualifiés.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Processus complet</h4>
                    <p className="text-gray-600">
                      Étude de faisabilité, dimensionnement personnalisé, installation professionnelle
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Adaptation précise</h4>
                    <p className="text-gray-600">
                      Solutions alignées avec votre consommation réelle et votre budget disponible
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-950">Expertise technique</h4>
                    <p className="text-gray-600">
                      Équipe d'ingénieurs et techniciens spécialisés dans l'énergie solaire
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl h-[400px] order-1 lg:order-2">
              <Image
                src="/assets/images/products/panels.jpg"
                alt="Conception sur mesure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent flex items-end p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-yellow-500">
                    <Settings className="h-6 w-6 text-blue-950" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Conception Sur Mesure</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Warranty and Support */}
          <div className="bg-blue-950 text-white rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src="/assets/images/products/monitoring.jpg"
                  alt="Service après-vente"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/40"></div>
              </div>

              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-yellow-500/20">
                    <Shield className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Garantie et Service Après-Vente</h3>
                </div>

                <p className="text-blue-100 mb-8">
                  Nous nous engageons à assurer la fiabilité et la performance de votre installation solaire sur le long
                  terme, avec une garantie complète et un support technique local.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-900/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-3">Garantie Mondiale</h4>
                    <p className="text-blue-100">
                      Garantie de 12 mois sur toutes les pièces et la main d'œuvre, applicable partout dans le monde
                    </p>
                  </div>

                  <div className="bg-blue-900/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-3">Support Technique Local</h4>
                    <p className="text-blue-100">
                      Maintenance assurée par nos équipes techniques locales ou nos partenaires agréés
                    </p>
                  </div>

                  <div className="bg-blue-900/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-3">Fiabilité à Long Terme</h4>
                    <p className="text-blue-100">
                      Suivi régulier et maintenance préventive pour assurer la durabilité de votre système
                    </p>
                  </div>

                  <div className="bg-blue-900/50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-400 mb-3">Formation Utilisateur</h4>
                    <p className="text-blue-100">
                      Formation complète sur l'utilisation et l'entretien de base de votre installation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 md:p-12 relative">
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
              <Sun className="h-12 w-12 text-yellow-500" />
            </div>

            <blockquote className="text-xl md:text-2xl text-blue-950 font-medium mb-6 relative">
              <span className="text-5xl text-yellow-500 absolute -top-6 -left-2">"</span>
              Depuis l'installation de notre système solaire par Sattel Energy, notre famille a enfin un accès fiable à
              l'électricité. Les enfants peuvent étudier le soir et nous pouvons conserver nos aliments au frais. C'est
              un véritable changement de vie pour nous.
              <span className="text-5xl text-yellow-500 absolute -bottom-10 right-0">"</span>
            </blockquote>

            <div className="flex items-center">
              <div className="ml-4">
                <p className="font-semibold text-blue-950">Famille Mutombo</p>
                <p className="text-gray-600">Kinshasa, RD Congo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-blue-950">Contactez-nous</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Prêt à passer à l'énergie solaire ? Nos experts sont disponibles pour vous accompagner dans votre projet
                et vous proposer une solution adaptée à vos besoins.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                      Type de projet
                    </label>
                    <select
                      id="project"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Sélectionnez une option</option>
                      <option value="off-grid">Kit solaire hors réseau</option>
                      <option value="backup">Système de secours</option>
                      <option value="microgrid">Micro-réseau résidentiel</option>
                      <option value="custom">Installation sur mesure</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <Button className="w-full bg-blue-950 hover:bg-blue-900">Envoyer ma demande</Button>
                  </div>
                </form>
              </div>

              <div className="bg-blue-950 text-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6">Nos coordonnées</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-yellow-400">RD Congo</p>
                      <p className="text-blue-100">+243 992 190 518</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-yellow-400">Email</p>
                      <p className="text-blue-100">info@sattelenergy.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-yellow-400">Siège social</p>
                      <p className="text-blue-100">Kinshasa, RD Congo</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
