import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Building,
  Home,
  Factory,
  Leaf,
  CheckCircle,
  Battery,
  SunMedium,
  LineChart,
  ShieldCheck,
  Wrench,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TranslateSolution } from "@/components/solutions/translate-solution"

export const metadata: Metadata = {
  title: "Détails des Solutions | Sattel Energy",
  description:
    "Découvrez nos solutions énergétiques détaillées par secteur et par technologie pour tous vos besoins en énergie solaire.",
}

export default function SolutionsDetailsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-900 to-blue-950 py-20 text-white">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              <TranslateSolution fr="Solutions détaillées" en="Detailed Solutions" />
            </h1>
            <p className="mt-4 text-lg text-blue-100 md:text-xl">
              <TranslateSolution
                fr="Découvrez nos solutions énergétiques complètes adaptées à chaque secteur et basées sur les technologies les plus avancées."
                en="Discover our comprehensive energy solutions adapted to each sector and based on the most advanced technologies."
              />
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-gray-950"></div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4">
          <Tabs defaultValue="sectors" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="sectors">
                  <TranslateSolution fr="Solutions par Secteur" en="Solutions by Sector" />
                </TabsTrigger>
                <TabsTrigger value="technologies">
                  <TranslateSolution fr="Solutions par Technologie" en="Solutions by Technology" />
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Solutions by Sector */}
            <TabsContent value="sectors" className="space-y-16">
              {/* Client References */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Références Clients" en="Client References" />
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  <ClientReferenceCard
                    icon={<Home className="h-10 w-10" />}
                    title={<TranslateSolution fr="Résidentiel" en="Residential" />}
                    description={
                      <TranslateSolution
                        fr="SATTEL a équipé de nombreux particuliers en RDC, notamment des villas à Kinshasa et des résidences en provinces."
                        en="SATTEL has equipped many individuals in DRC, including villas in Kinshasa and residences in provinces."
                      />
                    }
                  />
                  <ClientReferenceCard
                    icon={<Building className="h-10 w-10" />}
                    title={<TranslateSolution fr="Commercial" en="Commercial" />}
                    description={
                      <TranslateSolution
                        fr="Installation solaire pour des agences bancaires (Equity BCDC), hôtels et restaurants."
                        en="Solar installation for bank branches (Equity BCDC), hotels and restaurants."
                      />
                    }
                  />
                  <ClientReferenceCard
                    icon={<Factory className="h-10 w-10" />}
                    title={<TranslateSolution fr="Industriel" en="Industrial" />}
                    description={
                      <TranslateSolution
                        fr="Solutions pour des usines agroalimentaires et centres logistiques (Kimpese, Luozi)."
                        en="Solutions for food processing plants and logistics centers (Kimpese, Luozi)."
                      />
                    }
                  />
                  <ClientReferenceCard
                    icon={<Leaf className="h-10 w-10" />}
                    title={<TranslateSolution fr="Agricole" en="Agricultural" />}
                    description={
                      <TranslateSolution
                        fr="Systèmes pour des fermes de grande taille et stations de pompage agricole (ex : projets pilotes à Luozi)."
                        en="Systems for large farms and agricultural pumping stations (e.g., pilot projects in Luozi)."
                      />
                    }
                  />
                </div>
              </div>

              {/* Specific Products */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Produits Spécifiques" en="Specific Products" />
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <ProductCard
                    icon={<Home className="h-8 w-8 text-blue-600" />}
                    title={<TranslateSolution fr="Résidentiel" en="Residential" />}
                    products={[
                      <TranslateSolution key="1" fr="Kits solaires autonomes" en="Autonomous solar kits" />,
                      <TranslateSolution key="2" fr="Systèmes hybrides" en="Hybrid systems" />,
                      <TranslateSolution key="3" fr="Petits onduleurs résidentiels" en="Small residential inverters" />,
                    ]}
                    sizes={[<TranslateSolution key="1" fr="Petite résidence (2-5 kW)" en="Small residence (2-5 kW)" />]}
                  />
                  <ProductCard
                    icon={<Building className="h-8 w-8 text-blue-600" />}
                    title={<TranslateSolution fr="Commercial" en="Commercial" />}
                    products={[
                      <TranslateSolution
                        key="1"
                        fr="Centrales solaires de 50 à 200 kW"
                        en="Solar power plants from 50 to 200 kW"
                      />,
                      <TranslateSolution key="2" fr="Stockage avancé" en="Advanced storage" />,
                    ]}
                    sizes={[
                      <TranslateSolution
                        key="1"
                        fr="PME et commerces (5-100 kW)"
                        en="SMEs and businesses (5-100 kW)"
                      />,
                    ]}
                  />
                  <ProductCard
                    icon={<Factory className="h-8 w-8 text-blue-600" />}
                    title={<TranslateSolution fr="Industriel" en="Industrial" />}
                    products={[
                      <TranslateSolution
                        key="1"
                        fr="Centrales photovoltaïques de 200 kW à 1 MW"
                        en="Photovoltaic power plants from 200 kW to 1 MW"
                      />,
                      <TranslateSolution key="2" fr="Batteries haute capacité" en="High-capacity batteries" />,
                      <TranslateSolution
                        key="3"
                        fr="Systèmes de monitoring avancés"
                        en="Advanced monitoring systems"
                      />,
                    ]}
                    sizes={[
                      <TranslateSolution key="1" fr="Grandes industries (>100 kW)" en="Large industries (>100 kW)" />,
                    ]}
                  />
                  <ProductCard
                    icon={<Leaf className="h-8 w-8 text-blue-600" />}
                    title={<TranslateSolution fr="Agricole" en="Agricultural" />}
                    products={[
                      <TranslateSolution
                        key="1"
                        fr="Panneaux renforcés anti-poussière"
                        en="Dust-resistant reinforced panels"
                      />,
                      <TranslateSolution key="2" fr="Pompes solaires" en="Solar pumps" />,
                      <TranslateSolution key="3" fr="Mini-grid ruraux" en="Rural mini-grids" />,
                    ]}
                    sizes={[<TranslateSolution key="1" fr="Fermes (>100 kW)" en="Farms (>100 kW)" />]}
                  />
                </div>
              </div>

              {/* Client Benefits */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Avantages pour le Client" en="Client Benefits" />
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <BenefitCard
                    icon={<LineChart className="h-10 w-10 text-green-500" />}
                    title={<TranslateSolution fr="Économies significatives" en="Significant savings" />}
                    description={
                      <TranslateSolution
                        fr="Jusqu'à 70% d'économies sur les coûts énergétiques."
                        en="Up to 70% savings on energy costs."
                      />
                    }
                  />
                  <BenefitCard
                    icon={<Battery className="h-10 w-10 text-blue-500" />}
                    title={<TranslateSolution fr="Autonomie énergétique" en="Energy autonomy" />}
                    description={
                      <TranslateSolution
                        fr="Fonctionnement même sans groupe électrogène."
                        en="Operation even without a generator."
                      />
                    }
                  />
                  <BenefitCard
                    icon={<Leaf className="h-10 w-10 text-green-600" />}
                    title={<TranslateSolution fr="Impact environnemental" en="Environmental impact" />}
                    description={
                      <TranslateSolution
                        fr="Réduction de l'empreinte carbone et contribution aux objectifs RSE."
                        en="Carbon footprint reduction and contribution to CSR objectives."
                      />
                    }
                  />
                  <BenefitCard
                    icon={<ShieldCheck className="h-10 w-10 text-blue-600" />}
                    title={<TranslateSolution fr="Fiabilité d'alimentation" en="Power reliability" />}
                    description={
                      <TranslateSolution
                        fr="Opération continue sans coupures."
                        en="Continuous operation without outages."
                      />
                    }
                  />
                </div>
              </div>

              {/* Turnkey Service */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Service Clé en Main" en="Turnkey Service" />
                </h2>
                <div className="mx-auto max-w-3xl rounded-lg bg-blue-50 p-8 dark:bg-blue-950">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                      <Wrench className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-xl font-bold">
                    <TranslateSolution fr="SATTEL offre un service complet" en="SATTEL offers a complete service" />
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <ServiceItem text={<TranslateSolution fr="Étude de faisabilité" en="Feasibility study" />} />
                    <ServiceItem text={<TranslateSolution fr="Conception personnalisée" en="Custom design" />} />
                    <ServiceItem text={<TranslateSolution fr="Installation complète" en="Complete installation" />} />
                    <ServiceItem text={<TranslateSolution fr="Formation du client" en="Client training" />} />
                    <ServiceItem text={<TranslateSolution fr="Maintenance préventive" en="Preventive maintenance" />} />
                    <ServiceItem text={<TranslateSolution fr="Maintenance curative" en="Curative maintenance" />} />
                  </div>
                </div>
              </div>

              {/* Certifications and Standards */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Certifications et Normes" en="Certifications and Standards" />
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <CertificationCard
                    icon={<Award className="h-10 w-10 text-yellow-500" />}
                    title={<TranslateSolution fr="Normes internationales" en="International standards" />}
                    standards={[
                      <TranslateSolution
                        key="1"
                        fr="IEC (Commission Électrotechnique Internationale)"
                        en="IEC (International Electrotechnical Commission)"
                      />,
                      <TranslateSolution
                        key="2"
                        fr="ISO (Organisation Internationale de Normalisation)"
                        en="ISO (International Organization for Standardization)"
                      />,
                    ]}
                  />
                  <CertificationCard
                    icon={<Leaf className="h-10 w-10 text-green-500" />}
                    title={<TranslateSolution fr="Agricole" en="Agricultural" />}
                    standards={[
                      <TranslateSolution
                        key="1"
                        fr="Équipements IP65 anti-poussière et humidité"
                        en="IP65 dust and moisture resistant equipment"
                      />,
                    ]}
                  />
                  <CertificationCard
                    icon={<Factory className="h-10 w-10 text-blue-500" />}
                    title={<TranslateSolution fr="Industriel" en="Industrial" />}
                    standards={[
                      <TranslateSolution
                        key="1"
                        fr="Certifications de sécurité électrique"
                        en="Electrical safety certifications"
                      />,
                      <TranslateSolution key="2" fr="Qualité de stockage" en="Storage quality" />,
                    ]}
                  />
                  <CertificationCard
                    icon={<Building className="h-10 w-10 text-blue-600" />}
                    title={<TranslateSolution fr="Bancaire et Commercial" en="Banking and Commercial" />}
                    standards={[
                      <TranslateSolution
                        key="1"
                        fr="Normes de continuité électrique critique"
                        en="Critical electrical continuity standards"
                      />,
                    ]}
                  />
                </div>
              </div>

              {/* Before/After */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Avant/Après Intervention SATTEL" en="Before/After SATTEL Intervention" />
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <div className="overflow-hidden rounded-lg">
                    <div className="relative h-[300px]">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Avant intervention SATTEL"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                        <h3 className="text-xl font-bold">
                          <TranslateSolution fr="AVANT" en="BEFORE" />
                        </h3>
                        <p className="text-sm">
                          <TranslateSolution
                            fr="Installation électrique non optimisée et dépendante de sources d'énergie non renouvelables."
                            en="Non-optimized electrical installation dependent on non-renewable energy sources."
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-lg">
                    <div className="relative h-[300px]">
                      <Image
                        src="/placeholder.svg?height=300&width=500"
                        alt="Après intervention SATTEL"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                        <h3 className="text-xl font-bold">
                          <TranslateSolution fr="APRÈS" en="AFTER" />
                        </h3>
                        <p className="text-sm">
                          <TranslateSolution
                            fr="Installation solaire moderne, efficace et respectueuse de l'environnement."
                            en="Modern, efficient and environmentally friendly solar installation."
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Solutions by Technology */}
            <TabsContent value="technologies" className="space-y-16">
              {/* Products and Brands */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Produits et Marques Proposés" en="Products and Brands Offered" />
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                  <TechnologyCard
                    icon={<SunMedium className="h-10 w-10 text-yellow-500" />}
                    title={<TranslateSolution fr="Photovoltaïque" en="Photovoltaic" />}
                    brands={["JA Solar", "Jinko Solar", "Longi"]}
                    specs={[
                      <TranslateSolution
                        key="1"
                        fr="Puissance de 480 Wc à 650 Wc par panneau"
                        en="Power from 480 Wp to 650 Wp per panel"
                      />,
                      <TranslateSolution key="2" fr="Rendement >21%" en="Efficiency >21%" />,
                    ]}
                    performance={
                      <TranslateSolution
                        fr="Rendement moyen de 20 à 22% même en climat chaud"
                        en="Average efficiency of 20 to 22% even in hot climates"
                      />
                    }
                    warranty={
                      <TranslateSolution fr="Garantie performance de 25 ans" en="25-year performance warranty" />
                    }
                  />
                  <TechnologyCard
                    icon={<Battery className="h-10 w-10 text-green-500" />}
                    title={<TranslateSolution fr="Stockage" en="Storage" />}
                    brands={["WEIDA", "BYD", "Pylontech", "Huawei Luna"]}
                    specs={[
                      <TranslateSolution
                        key="1"
                        fr="Capacité modulable de 5 kWh à 250 kWh"
                        en="Scalable capacity from 5 kWh to 250 kWh"
                      />,
                      <TranslateSolution key="2" fr="Durée de vie >6000 cycles" en="Lifespan >6000 cycles" />,
                    ]}
                    performance={
                      <TranslateSolution
                        fr="Profondeur de décharge jusqu'à 90%, durée de vie de 10 à 15 ans"
                        en="Depth of discharge up to 90%, lifespan of 10 to 15 years"
                      />
                    }
                    warranty={<TranslateSolution fr="Garantie de 10 ans" en="10-year warranty" />}
                  />
                  <TechnologyCard
                    icon={<LineChart className="h-10 w-10 text-blue-500" />}
                    title={<TranslateSolution fr="Monitoring" en="Monitoring" />}
                    brands={["SMA Sunny Portal", "Huawei FusionSolar"]}
                    specs={[
                      <TranslateSolution key="1" fr="Applications mobiles et web" en="Mobile and web applications" />,
                      <TranslateSolution key="2" fr="Alertes automatiques" en="Automatic alerts" />,
                      <TranslateSolution key="3" fr="Rapports personnalisés" en="Customized reports" />,
                    ]}
                    performance={
                      <TranslateSolution
                        fr="Monitoring accessible partout via Internet (PC, smartphone, tablette)"
                        en="Monitoring accessible everywhere via Internet (PC, smartphone, tablet)"
                      />
                    }
                    warranty={<TranslateSolution fr="Garantie de 5 ans, extensible" en="5-year warranty, extendable" />}
                  />
                </div>
              </div>

              {/* Competitive Advantages */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Avantages Concurrentiels" en="Competitive Advantages" />
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <AdvantageCard
                    title={<TranslateSolution fr="Technologies Tier 1" en="Tier 1 Technologies" />}
                    description={
                      <TranslateSolution
                        fr="Utilisation de technologies Tier 1 reconnues mondialement."
                        en="Use of globally recognized Tier 1 technologies."
                      />
                    }
                  />
                  <AdvantageCard
                    title={
                      <TranslateSolution fr="Durabilité sous climat tropical" en="Durability in tropical climate" />
                    }
                    description={
                      <TranslateSolution
                        fr="Excellente durabilité sous climat tropical (tests de chaleur, humidité, poussière)."
                        en="Excellent durability in tropical climate (heat, humidity, dust tests)."
                      />
                    }
                  />
                  <AdvantageCard
                    title={<TranslateSolution fr="Support local" en="Local support" />}
                    description={
                      <TranslateSolution
                        fr="Longue garantie constructeur et support local de SATTEL."
                        en="Long manufacturer warranty and local support from SATTEL."
                      />
                    }
                  />
                </div>
              </div>

              {/* Installation and Maintenance */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution
                    fr="Services d'Installation et de Maintenance"
                    en="Installation and Maintenance Services"
                  />
                </h2>
                <div className="mx-auto max-w-3xl rounded-lg bg-blue-50 p-8 dark:bg-blue-950">
                  <div className="mb-6 flex justify-center">
                    <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900">
                      <Wrench className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="mb-4 text-center text-xl font-bold">
                    <TranslateSolution fr="SATTEL assure" en="SATTEL ensures" />
                  </h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <ServiceItem text={<TranslateSolution fr="Installation complète" en="Complete installation" />} />
                    <ServiceItem text={<TranslateSolution fr="Monitoring à distance" en="Remote monitoring" />} />
                    <ServiceItem
                      text={
                        <TranslateSolution
                          fr="Maintenance annuelle ou semestrielle selon le contrat"
                          en="Annual or semi-annual maintenance according to the contract"
                        />
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Compatibility */}
              <div>
                <h2 className="mb-8 text-center text-3xl font-bold">
                  <TranslateSolution fr="Compatibilité et Accessibilité" en="Compatibility and Accessibility" />
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <CompatibilityCard
                    title={<TranslateSolution fr="Batteries compatibles" en="Compatible batteries" />}
                    description={
                      <TranslateSolution
                        fr="Batteries compatibles avec différents onduleurs hybrides."
                        en="Batteries compatible with different hybrid inverters."
                      />
                    }
                  />
                  <CompatibilityCard
                    title={<TranslateSolution fr="Monitoring accessible" en="Accessible monitoring" />}
                    description={
                      <TranslateSolution
                        fr="Monitoring accessible partout via Internet (PC, smartphone, tablette)."
                        en="Monitoring accessible everywhere via Internet (PC, smartphone, tablet)."
                      />
                    }
                  />
                  <CompatibilityCard
                    title={<TranslateSolution fr="Intégration avec l'existant" en="Integration with existing" />}
                    description={
                      <TranslateSolution
                        fr="Possibilité d'intégration avec des groupes électrogènes existants."
                        en="Possibility of integration with existing generators."
                      />
                    }
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
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
                fr="Contactez nos experts dès aujourd'hui pour discuter de votre projet et découvrir la solution la plus adaptée à vos besoins."
                en="Contact our experts today to discuss your project and discover the solution best suited to your needs."
              />
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
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

// Component for client references
function ClientReferenceCard({
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
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

// Component for product cards
function ProductCard({
  icon,
  title,
  products,
  sizes,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  products: React.ReactNode[]
  sizes: React.ReactNode[]
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        {icon}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            <TranslateSolution fr="Produits" en="Products" />
          </h4>
          <ul className="space-y-1">
            {products.map((product, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{product}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            <TranslateSolution fr="Tailles" en="Sizes" />
          </h4>
          <ul className="space-y-1">
            {sizes.map((size, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-500" />
                <span>{size}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for benefit cards
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

// Component for service items
function ServiceItem({ text }: { text: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <CheckCircle className="h-5 w-5 text-green-500" />
      <span>{text}</span>
    </div>
  )
}

// Component for certification cards
function CertificationCard({
  icon,
  title,
  standards,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  standards: React.ReactNode[]
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {standards.map((standard, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="mr-2 mt-1 h-4 w-4 text-green-500" />
              <span>{standard}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

// Component for technology cards
function TechnologyCard({
  icon,
  title,
  brands,
  specs,
  performance,
  warranty,
}: {
  icon: React.ReactNode
  title: React.ReactNode
  brands: string[]
  specs: React.ReactNode[]
  performance: React.ReactNode
  warranty: React.ReactNode
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            <TranslateSolution fr="Marques" en="Brands" />
          </h4>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand, index) => (
              <span
                key={index}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            <TranslateSolution fr="Caractéristiques" en="Specifications" />
          </h4>
          <ul className="space-y-1">
            {specs.map((spec, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            <TranslateSolution fr="Performance" en="Performance" />
          </h4>
          <p className="text-gray-600 dark:text-gray-400">{performance}</p>
        </div>
        <div>
          <h4 className="mb-2 font-medium text-gray-700 dark:text-gray-300">
            <TranslateSolution fr="Garantie" en="Warranty" />
          </h4>
          <p className="text-gray-600 dark:text-gray-400">{warranty}</p>
        </div>
      </CardContent>
    </Card>
  )
}

// Component for advantage cards
function AdvantageCard({
  title,
  description,
}: {
  title: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}

// Component for compatibility cards
function CompatibilityCard({
  title,
  description,
}: {
  title: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}
