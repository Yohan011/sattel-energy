import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Globe, Handshake, Building, Zap, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ScrollAnimation from "@/components/scroll-animation-provider"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"

export default function PartnersPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-yellow-400/20 to-transparent">
        <div className="container">
          <div className="flex flex-col items-center">
            <Link
              href="/about"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à la page À propos
            </Link>

            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-3 bg-yellow-400/20 rounded-full mb-4">
                  <Handshake className="h-8 w-8 text-yellow-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Partenaires</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  SATTEL Energy s'appuie sur un réseau de partenaires stratégiques pour offrir des solutions d'énergie
                  solaire de haute qualité et maximiser notre impact en Afrique.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right">
              <div>
                <SectionHeading
                  title="Partenariats stratégiques"
                  description="Chez SATTEL Energy, nous croyons fermement que des partenariats solides sont essentiels pour atteindre notre mission d'électrification durable en Afrique."
                />
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Nos partenariats stratégiques nous permettent de:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Garantir la qualité et la fiabilité de nos installations solaires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Accéder aux technologies les plus avancées et adaptées au marché africain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Financer des projets d'envergure pour maximiser notre impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 shrink-0 mt-0.5" />
                    <span>Développer des solutions innovantes adaptées aux besoins locaux</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner1.png"
                    alt="Huawei Solar"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner2.png"
                    alt="BYD Battery"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner3.png"
                    alt="JA Solar"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner4.png"
                    alt="Canadian Solar"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner5.png"
                    alt="WEIDA"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner6.png"
                    alt="KWEIT"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner7.png"
                    alt="Equity BCDC"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner8.png"
                    alt="IFC"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24 hover:shadow-md transition-all">
                  <Image
                    src="/assets/images/partner9.png"
                    alt="Proparco"
                    width={100}
                    height={50}
                    className="max-h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partners Tabs */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Nos partenaires stratégiques"
              description="SATTEL Energy collabore avec des partenaires de premier plan pour garantir l'excellence de nos solutions énergétiques."
              centered
            />
          </ScrollAnimation>

          <ScrollAnimation>
            <Tabs defaultValue="financial" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="financial" className="text-base py-3">
                  <Building className="mr-2 h-4 w-4" />
                  Partenaires bancaires et institutionnels
                </TabsTrigger>
                <TabsTrigger value="technical" className="text-base py-3">
                  <Zap className="mr-2 h-4 w-4" />
                  Partenaires techniques et fournisseurs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="financial" className="mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Building className="mr-2 h-5 w-5 text-yellow-500" />
                    Partenaires bancaires et institutionnels
                  </h3>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[250px]">Partenaire</TableHead>
                          <TableHead>Type de partenariat</TableHead>
                          <TableHead>Détail</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Equity BCDC</TableCell>
                          <TableCell>Client institutionnel stratégique</TableCell>
                          <TableCell>
                            Déploiement de solutions solaires hybrides dans plus de 100 agences à travers la RDC.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">IFC (International Finance Corporation)</TableCell>
                          <TableCell>Partenaire de discussion stratégique</TableCell>
                          <TableCell>
                            Collaboration pour soutenir le financement de projets d'électrification rurale à grande
                            échelle (projet Luozi et futurs projets).
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Proparco (filiale AFD)</TableCell>
                          <TableCell>Prospection pour financement</TableCell>
                          <TableCell>
                            Discussions avancées pour soutenir les projets solaires de grande capacité portés par SATTEL
                            Energy en RDC et dans la région.
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner7.png"
                            alt="Equity BCDC"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>Equity BCDC</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">Client institutionnel stratégique</div>
                            <div>
                              Déploiement de solutions solaires hybrides dans plus de 100 agences à travers la RDC.
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">Partenariat depuis 2019</div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner8.png"
                            alt="IFC"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>IFC</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">Partenaire de discussion stratégique</div>
                            <div>
                              Collaboration pour soutenir le financement de projets d'électrification rurale à grande
                              échelle (projet Luozi et futurs projets).
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">Discussions en cours</div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner9.png"
                            alt="Proparco"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>Proparco</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">Prospection pour financement</div>
                            <div>
                              Discussions avancées pour soutenir les projets solaires de grande capacité portés par
                              SATTEL Energy en RDC et dans la région.
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">
                              Filiale de l'Agence Française de Développement
                            </div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="technical" className="mt-0">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Zap className="mr-2 h-5 w-5 text-yellow-500" />
                    Partenaires techniques et fournisseurs stratégiques
                  </h3>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[250px]">Partenaire</TableHead>
                          <TableHead>Type de partenariat</TableHead>
                          <TableHead>Détail</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Huawei Solar</TableCell>
                          <TableCell>Fournisseur technologique</TableCell>
                          <TableCell>
                            Fourniture d'onduleurs hybrides et solutions de supervision intelligente via la plateforme
                            Huawei FusionSolar.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">BYD Battery</TableCell>
                          <TableCell>Fournisseur de batteries lithium</TableCell>
                          <TableCell>
                            Partenaire privilégié pour batteries lithium LiFePO₄ haute capacité, utilisées sur projets
                            résidentiels et industriels.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">JA Solar</TableCell>
                          <TableCell>Fournisseur de panneaux photovoltaïques</TableCell>
                          <TableCell>
                            Partenaire majeur pour modules solaires à haute efficacité ({">"}540 Wc), pour installations
                            solaires hybrides et raccordées au réseau.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Canadian Solar</TableCell>
                          <TableCell>Fournisseur de panneaux photovoltaïques</TableCell>
                          <TableCell>
                            Fournisseur premium pour modules solaires haut de gamme, utilisés sur des projets
                            résidentiels et commerciaux spécifiques.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">WEIDA</TableCell>
                          <TableCell>Fournisseur de matériels solaires</TableCell>
                          <TableCell>
                            Partenaire sur les équipements photovoltaïques complémentaires : structures de montage,
                            armoires électriques, câblage solaire renforcé.
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">KWEIT</TableCell>
                          <TableCell>Fournisseur de groupes électrogènes et matériels de secours</TableCell>
                          <TableCell>
                            Appui sur la fourniture de groupes électrogènes professionnels, utilisés en backup pour des
                            projets hybrides à haute criticité.
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mt-10">
                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner1.png"
                            alt="Huawei Solar"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>Huawei Solar</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">Fournisseur technologique</div>
                            <div>
                              Fourniture d'onduleurs hybrides et solutions de supervision intelligente via la plateforme
                              Huawei FusionSolar.
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">
                              Leader mondial des solutions d'onduleurs solaires
                            </div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner2.png"
                            alt="BYD Battery"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>BYD Battery</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">Fournisseur de batteries lithium</div>
                            <div>
                              Partenaire privilégié pour batteries lithium LiFePO₄ haute capacité, utilisées sur projets
                              résidentiels et industriels.
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">
                              Technologie de pointe en stockage d'énergie
                            </div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner3.png"
                            alt="JA Solar"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>JA Solar</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">Fournisseur de panneaux photovoltaïques</div>
                            <div>
                              Partenaire majeur pour modules solaires à haute efficacité ({">"}540 Wc), pour
                              installations solaires hybrides et raccordées au réseau.
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">Modules solaires de haute performance</div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner4.png"
                            alt="Canadian Solar"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>Canadian Solar</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">Fournisseur de panneaux photovoltaïques</div>
                            <div>
                              Fournisseur premium pour modules solaires haut de gamme, utilisés sur des projets
                              résidentiels et commerciaux spécifiques.
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">
                              Solutions solaires de qualité supérieure
                            </div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner5.png"
                            alt="WEIDA"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>WEIDA</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">Fournisseur de matériels solaires</div>
                            <div>
                              Partenaire sur les équipements photovoltaïques complémentaires : structures de montage,
                              armoires électriques, câblage solaire renforcé.
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">
                              Composants essentiels pour installations solaires
                            </div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-yellow-200 dark:border-yellow-900/30">
                      <CardHeader className="pb-2">
                        <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                          <Image
                            src="/assets/images/partner6.png"
                            alt="KWEIT"
                            width={40}
                            height={40}
                            className="rounded-full object-contain"
                          />
                        </div>
                        <CardTitle>KWEIT</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm space-y-4">
                          <div>
                            <div className="mb-2 font-medium">
                              Fournisseur de groupes électrogènes et matériels de secours
                            </div>
                            <div>
                              Appui sur la fourniture de groupes électrogènes professionnels, utilisés en backup pour
                              des projets hybrides à haute criticité.
                            </div>
                          </div>
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-xs text-muted-foreground">Solutions de secours fiables</div>
                          </div>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollAnimation>
        </div>
      </section>

      {/* Benefits of Partnerships */}
      <section className="py-12 md:py-16">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="L'avantage de nos partenariats"
              description="Nos partenariats stratégiques nous permettent d'offrir des solutions d'énergie solaire de qualité supérieure, adaptées aux besoins spécifiques du marché africain."
              centered
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Qualité garantie</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nos partenariats avec des fournisseurs de premier plan garantissent la qualité et la fiabilité de tous
                  nos composants.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Technologie de pointe</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Accès aux dernières innovations technologiques en matière d'énergie solaire, adaptées aux conditions
                  africaines.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Portée internationale</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nos partenariats internationaux nous permettent d'accéder à un réseau mondial d'expertise et de
                  ressources.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Financement stratégique</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nos partenaires financiers nous aident à développer des projets d'envergure pour maximiser notre
                  impact en Afrique.
                </p>
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
              <h2 className="text-3xl font-bold mb-6 text-black">Intéressé par un partenariat?</h2>
              <p className="text-black/80 mb-8 text-lg">
                SATTEL Energy est toujours à la recherche de nouveaux partenaires stratégiques pour renforcer notre
                impact et développer des solutions innovantes.
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-black text-white hover:bg-black/80" asChild>
                  <Link href="/contact">Contactez-nous</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10" asChild>
                  <Link href="/about">En savoir plus sur SATTEL Energy</Link>
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
