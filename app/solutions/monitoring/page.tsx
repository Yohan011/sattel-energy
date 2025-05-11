import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { BarChart, Bell, LineChart, Smartphone, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { Translate } from "@/components/translate"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Solutions de monitoring | Sattel Energy",
  description:
    "Nos systèmes de monitoring vous permettent de suivre en temps réel la performance de votre installation solaire et d'optimiser sa production.",
}

function BenefitCard({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: React.ReactNode; description: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function FeatureSection({
  title,
  description,
  features,
  imageSrc,
}: { title: React.ReactNode; description: React.ReactNode; features: React.ReactNode[]; imageSrc: string }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">{title}</h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-lg">{description}</p>
        </div>
        <ul className="list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[500px]">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>
    </div>
  )
}

export default function MonitoringSolutionsPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-yellow-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <Translate text="Solutions de monitoring" textEn="Monitoring Solutions" />
                </h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                  <Translate
                    text="Nos systèmes de monitoring vous permettent de suivre en temps réel la performance de votre installation solaire et d'optimiser sa production."
                    textEn="Our monitoring systems allow you to track the performance of your solar installation in real-time and optimize its production."
                  />
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    <Translate text="Demander un devis" textEn="Request a quote" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/products/monitoring">
                    <Translate text="Voir nos produits" textEn="View our products" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[500px]">
              <Image
                src="/assets/images/solutions/monitoring-hero.jpg"
                alt="Solutions de monitoring"
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
            title={<Translate text="Avantages du monitoring" textEn="Benefits of Monitoring" />}
            description={
              <Translate
                text="Découvrez comment nos solutions de monitoring peuvent optimiser la performance et la rentabilité de votre installation solaire."
                textEn="Discover how our monitoring solutions can optimize the performance and profitability of your solar installation."
              />
            }
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              icon={<LineChart className="h-10 w-10 text-yellow-500" />}
              title={<Translate text="Optimisation des performances" textEn="Performance Optimization" />}
              description={
                <Translate
                  text="Identifiez rapidement les problèmes de performance et optimisez le rendement de votre installation solaire."
                  textEn="Quickly identify performance issues and optimize the yield of your solar installation."
                />
              }
            />
            <BenefitCard
              icon={<Bell className="h-10 w-10 text-yellow-500" />}
              title={<Translate text="Alertes en temps réel" textEn="Real-time Alerts" />}
              description={
                <Translate
                  text="Recevez des notifications instantanées en cas d'anomalie ou de baisse de production, permettant une intervention rapide."
                  textEn="Receive instant notifications in case of anomaly or production decrease, allowing for quick intervention."
                />
              }
            />
            <BenefitCard
              icon={<Smartphone className="h-10 w-10 text-yellow-500" />}
              title={<Translate text="Accès à distance" textEn="Remote Access" />}
              description={
                <Translate
                  text="Suivez les performances de votre installation depuis n'importe où via notre application mobile ou notre portail web."
                  textEn="Track the performance of your installation from anywhere via our mobile application or web portal."
                />
              }
            />
            <BenefitCard
              icon={<BarChart className="h-10 w-10 text-yellow-500" />}
              title={<Translate text="Rapports détaillés" textEn="Detailed Reports" />}
              description={
                <Translate
                  text="Accédez à des analyses approfondies et des rapports personnalisés sur la production, la consommation et les économies réalisées."
                  textEn="Access in-depth analyses and customized reports on production, consumption, and savings achieved."
                />
              }
            />
            <BenefitCard
              icon={<Wrench className="h-10 w-10 text-yellow-500" />}
              title={<Translate text="Maintenance préventive" textEn="Preventive Maintenance" />}
              description={
                <Translate
                  text="Anticipez les besoins de maintenance grâce à la détection précoce des problèmes potentiels, prolongeant la durée de vie de votre système."
                  textEn="Anticipate maintenance needs through early detection of potential problems, extending the life of your system."
                />
              }
            />
            <BenefitCard
              icon={<LineChart className="h-10 w-10 text-yellow-500" />}
              title={<Translate text="Optimisation de la consommation" textEn="Consumption Optimization" />}
              description={
                <Translate
                  text="Analysez vos habitudes de consommation et adaptez-les pour maximiser l'utilisation de l'énergie solaire produite."
                  textEn="Analyze your consumption habits and adapt them to maximize the use of solar energy produced."
                />
              }
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container px-4">
          <SectionHeading
            title={<Translate text="Fonctionnalités clés" textEn="Key Features" />}
            description={
              <Translate
                text="Nos solutions de monitoring offrent une gamme complète de fonctionnalités pour un suivi optimal de votre installation solaire."
                textEn="Our monitoring solutions offer a complete range of features for optimal tracking of your solar installation."
              />
            }
            centered
          />
          <div className="mt-12 space-y-16">
            <FeatureSection
              title={<Translate text="Suivi en temps réel" textEn="Real-time Tracking" />}
              description={
                <Translate
                  text="Notre plateforme de monitoring vous permet de suivre en temps réel la production d'énergie de votre installation solaire, ainsi que votre consommation et les flux d'énergie entre les différents composants du système."
                  textEn="Our monitoring platform allows you to track in real-time the energy production of your solar installation, as well as your consumption and energy flows between the different components of the system."
                />
              }
              features={[
                <Translate
                  key="1"
                  text="Visualisation instantanée de la production solaire"
                  textEn="Instant visualization of solar production"
                />,
                <Translate
                  key="2"
                  text="Suivi de la consommation par appareil (avec compteurs intelligents)"
                  textEn="Tracking of consumption by device (with smart meters)"
                />,
                <Translate
                  key="3"
                  text="Monitoring des flux d'énergie entre panneaux, batteries et réseau"
                  textEn="Monitoring of energy flows between panels, batteries, and grid"
                />,
                <Translate
                  key="4"
                  text="Mise à jour des données toutes les 5 secondes"
                  textEn="Data update every 5 seconds"
                />,
              ]}
              imageSrc="/assets/images/solutions/real-time-monitoring.jpg"
            />
            <FeatureSection
              title={<Translate text="Alertes et notifications" textEn="Alerts and Notifications" />}
              description={
                <Translate
                  text="Soyez informé en temps réel des événements importants liés à votre installation solaire, tels que les pannes, les baisses de production ou les dépassements de seuils."
                  textEn="Be informed in real-time of important events related to your solar installation, such as failures, production drops, or threshold exceedances."
                />
              }
              features={[
                <Translate
                  key="1"
                  text="Alertes personnalisables par e-mail et SMS"
                  textEn="Customizable alerts by email and SMS"
                />,
                <Translate
                  key="2"
                  text="Notifications en cas de panne ou de dysfonctionnement"
                  textEn="Notifications in case of failure or malfunction"
                />,
                <Translate
                  key="3"
                  text="Suivi des seuils de production et de consommation"
                  textEn="Tracking of production and consumption thresholds"
                />,
                <Translate
                  key="4"
                  text="Historique des alertes et des événements"
                  textEn="History of alerts and events"
                />,
              ]}
              imageSrc="/assets/images/solutions/alerts-notifications.jpg"
            />
            <FeatureSection
              title={<Translate text="Analyse et rapports" textEn="Analysis and Reports" />}
              description={
                <Translate
                  text="Accédez à des rapports détaillés et des analyses approfondies sur la performance de votre installation solaire, vous permettant d'identifier les axes d'amélioration et d'optimiser votre production."
                  textEn="Access detailed reports and in-depth analyses on the performance of your solar installation, allowing you to identify areas for improvement and optimize your production."
                />
              }
              features={[
                <Translate
                  key="1"
                  text="Rapports de production quotidiens, hebdomadaires et mensuels"
                  textEn="Daily, weekly, and monthly production reports"
                />,
                <Translate
                  key="2"
                  text="Analyse de la consommation et des économies réalisées"
                  textEn="Analysis of consumption and savings achieved"
                />,
                <Translate
                  key="3"
                  text="Comparaison des performances par rapport aux données historiques"
                  textEn="Comparison of performance against historical data"
                />,
                <Translate key="4" text="Exportation des données au format CSV" textEn="Data export in CSV format" />,
              ]}
              imageSrc="/assets/images/solutions/analysis-reports.jpg"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
