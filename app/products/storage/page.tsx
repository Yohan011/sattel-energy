"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { ProductCard } from "@/components/product-card"
import ScrollAnimation from "@/components/scroll-animation-provider"
import { Database } from "lucide-react"

export default function StoragePage() {
  const { language } = useLanguage()

  return (
    <main className="flex-1">
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900 py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Database className="h-12 w-12 text-yellow-500" />
              </div>
              <h1 className="text-4xl font-bold mb-6">
                {language === "fr" ? "Systèmes de Stockage" : "Storage Systems"}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {language === "fr"
                  ? "Découvrez notre gamme de systèmes de stockage d'énergie complets pour assurer l'autonomie énergétique de votre maison ou entreprise."
                  : "Discover our range of complete energy storage systems to ensure energy autonomy for your home or business."}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <ProductCard
                title="M3 2000"
                description={
                  language === "fr"
                    ? "Système de stockage complet très pratique pour petits équipements : lampes, téléphones, laptops."
                    : "Complete storage system very practical for small equipment: lamps, phones, laptops."
                }
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/products/storage/m3-2000"
                category={language === "fr" ? "Système de stockage" : "Storage System"}
              />
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <ProductCard
                title="M3 3000"
                description={
                  language === "fr"
                    ? "Système de stockage complet idéal pour maison/villa moyenne : TV, frigo, PC, internet, lumières."
                    : "Complete storage system ideal for medium house/villa: TV, fridge, PC, internet, lights."
                }
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/products/storage/m3-3000"
                category={language === "fr" ? "Système de stockage" : "Storage System"}
              />
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <ProductCard
                title="M3 5000-1"
                description={
                  language === "fr"
                    ? "Système de stockage complet un peu plus puissant que M3 150 ; parfait pour petits besoins."
                    : "Complete storage system a bit more powerful than M3 150; perfect for small needs."
                }
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/products/storage/m3-5000-1"
                category={language === "fr" ? "Système de stockage" : "Storage System"}
              />
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.4}>
              <ProductCard
                title="M3 5000-2"
                description={
                  language === "fr"
                    ? "Système de stockage complet qui convient à une villa avec plusieurs équipements (machine à laver, congélateur...)."
                    : "Complete storage system suitable for a villa with several appliances (washing machine, freezer...)."
                }
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/products/storage/m3-5000-2"
                category={language === "fr" ? "Système de stockage" : "Storage System"}
              />
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.5}>
              <ProductCard
                title="M3-10 KVA"
                description={
                  language === "fr"
                    ? "Système de stockage complet avec très grosse capacité ; pour maisons équipées de climatiseurs, pompes à eau, etc."
                    : "Complete storage system with very large capacity; for houses equipped with air conditioners, water pumps, etc."
                }
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/products/storage/m3-10kva"
                category={language === "fr" ? "Système de stockage" : "Storage System"}
              />
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.6}>
              <ProductCard
                title="M3-15 kVa"
                description={
                  language === "fr"
                    ? "Station d'énergie nouvelle qui remplace l'ancien 'M3 1000 (old version)', adaptée aux besoins modernes."
                    : "New energy station that replaces the old 'M3 1000 (old version)', adapted to modern needs."
                }
                imageSrc="/placeholder.svg?height=400&width=600"
                href="/products/storage/m3-15kva"
                category={language === "fr" ? "Station d'énergie" : "Energy Station"}
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === "fr" ? "Avantages de nos systèmes de stockage" : "Benefits of Our Storage Systems"}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {language === "fr"
                  ? "Nos systèmes de stockage d'énergie offrent une solution complète pour votre indépendance énergétique."
                  : "Our energy storage systems offer a complete solution for your energy independence."}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {language === "fr" ? "Solution complète" : "Complete Solution"}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "fr"
                    ? "Systèmes intégrés incluant batterie, onduleur et contrôleur pour une installation facile."
                    : "Integrated systems including battery, inverter, and controller for easy installation."}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{language === "fr" ? "Fiabilité" : "Reliability"}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "fr"
                    ? "Conçus pour fonctionner dans des conditions difficiles avec une maintenance minimale."
                    : "Designed to operate in challenging conditions with minimal maintenance."}
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 rounded-full bg-blue-400/20 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">{language === "fr" ? "Évolutivité" : "Scalability"}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {language === "fr"
                    ? "Possibilité d'augmenter la capacité de stockage en ajoutant des batteries supplémentaires."
                    : "Ability to increase storage capacity by adding additional batteries."}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
