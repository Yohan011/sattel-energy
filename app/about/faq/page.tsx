"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  HelpCircle,
  CheckCircle,
  AlertCircle,
  Settings,
  PenToolIcon as Tool,
  DollarSign,
  Zap,
  Truck,
  Clock,
  Lightbulb,
  Award,
  FileText,
  Globe,
} from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation-provider"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"

// Types pour les FAQ
type FAQCategory = "general" | "technical" | "commercial" | "installation" | "financing" | "delivery" | "all"

interface FAQItem {
  id: string
  question: {
    fr: string
    en: string
  }
  answer: {
    fr: string
    en: string
  }
  category: Exclude<FAQCategory, "all">
  icon:
    | "help"
    | "check"
    | "alert"
    | "settings"
    | "tool"
    | "dollar"
    | "zap"
    | "truck"
    | "clock"
    | "lightbulb"
    | "award"
    | "file"
    | "globe"
}

// Données FAQ
const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: {
      fr: "Qu'est-ce que l'énergie solaire photovoltaïque ?",
      en: "What is photovoltaic solar energy?",
    },
    answer: {
      fr: "L'énergie solaire photovoltaïque est une technologie qui convertit directement la lumière du soleil en électricité à l'aide de panneaux composés de cellules photovoltaïques. Ces cellules sont généralement fabriquées à partir de silicium et génèrent un courant électrique lorsqu'elles sont exposées à la lumière solaire. Cette forme d'énergie est renouvelable, propre et de plus en plus abordable.",
      en: "Photovoltaic solar energy is a technology that directly converts sunlight into electricity using panels composed of photovoltaic cells. These cells are typically made of silicon and generate an electric current when exposed to sunlight. This form of energy is renewable, clean, and increasingly affordable.",
    },
    category: "general",
    icon: "help",
  },
  {
    id: "faq-2",
    question: {
      fr: "Quels sont les avantages de l'énergie solaire ?",
      en: "What are the advantages of solar energy?",
    },
    answer: {
      fr: "L'énergie solaire présente de nombreux avantages : elle est renouvelable et inépuisable, elle ne produit pas d'émissions de gaz à effet de serre pendant son fonctionnement, elle réduit votre dépendance aux fournisseurs d'électricité traditionnels, elle peut diminuer vos factures d'électricité, et les installations nécessitent peu d'entretien. De plus, dans de nombreux pays, des incitations financières sont disponibles pour encourager l'adoption de l'énergie solaire.",
      en: "Solar energy offers many advantages: it is renewable and inexhaustible, it does not produce greenhouse gas emissions during operation, it reduces your dependence on traditional electricity suppliers, it can lower your electricity bills, and the installations require little maintenance. Additionally, in many countries, financial incentives are available to encourage the adoption of solar energy.",
    },
    category: "general",
    icon: "check",
  },
  {
    id: "faq-3",
    question: {
      fr: "Combien coûte une installation solaire ?",
      en: "How much does a solar installation cost?",
    },
    answer: {
      fr: "Le coût d'une installation solaire varie considérablement en fonction de plusieurs facteurs : la taille du système, le type de panneaux solaires choisis, la complexité de l'installation, et votre localisation géographique. Pour une installation résidentielle standard, les prix peuvent varier de 5 000 € à 25 000 €. Cependant, il est important de considérer que cet investissement initial est compensé par les économies d'énergie réalisées sur le long terme et potentiellement par des incitations fiscales ou des subventions disponibles dans votre région.",
      en: "The cost of a solar installation varies considerably depending on several factors: the size of the system, the type of solar panels chosen, the complexity of the installation, and your geographic location. For a standard residential installation, prices can range from €5,000 to €25,000. However, it is important to consider that this initial investment is offset by energy savings made over the long term and potentially by tax incentives or subsidies available in your region.",
    },
    category: "commercial",
    icon: "dollar",
  },
  {
    id: "faq-4",
    question: {
      fr: "Quelle est la durée de vie des panneaux solaires ?",
      en: "What is the lifespan of solar panels?",
    },
    answer: {
      fr: "La plupart des panneaux solaires de qualité ont une durée de vie de 25 à 30 ans, avec une garantie de performance généralement de 25 ans. Cela signifie qu'après 25 ans, les panneaux continueront à produire de l'électricité, mais à un rendement légèrement réduit (généralement autour de 80% de leur capacité initiale). Les onduleurs ont généralement une durée de vie plus courte, entre 10 et 15 ans, et peuvent nécessiter un remplacement pendant la durée de vie de votre système solaire.",
      en: "Most quality solar panels have a lifespan of 25 to 30 years, with a performance warranty typically of 25 years. This means that after 25 years, the panels will continue to produce electricity, but at a slightly reduced efficiency (typically around 80% of their initial capacity). Inverters generally have a shorter lifespan, between 10 and 15 years, and may require replacement during the lifetime of your solar system.",
    },
    category: "technical",
    icon: "settings",
  },
  {
    id: "faq-5",
    question: {
      fr: "Les panneaux solaires fonctionnent-ils par temps nuageux ou en hiver ?",
      en: "Do solar panels work in cloudy weather or winter?",
    },
    answer: {
      fr: "Oui, les panneaux solaires fonctionnent même par temps nuageux ou en hiver, bien que leur production soit réduite. Les cellules photovoltaïques réagissent à la lumière visible, qui pénètre partiellement à travers les nuages. En hiver, la production est généralement plus faible en raison de journées plus courtes et d'un angle solaire moins favorable, mais les panneaux peuvent être plus efficaces par temps froid. Un système bien dimensionné prend en compte ces variations saisonnières pour assurer une production annuelle optimale.",
      en: "Yes, solar panels work even in cloudy weather or winter, although their production is reduced. Photovoltaic cells react to visible light, which partially penetrates through clouds. In winter, production is generally lower due to shorter days and a less favorable solar angle, but panels can be more efficient in cold weather. A well-sized system takes into account these seasonal variations to ensure optimal annual production.",
    },
    category: "technical",
    icon: "alert",
  },
  {
    id: "faq-6",
    question: {
      fr: "Comment entretenir mes panneaux solaires ?",
      en: "How do I maintain my solar panels?",
    },
    answer: {
      fr: "L'entretien des panneaux solaires est relativement simple. Un nettoyage périodique avec de l'eau et éventuellement un détergent doux suffit généralement. La fréquence dépend de votre environnement : dans les zones poussiéreuses ou avec beaucoup de pollution, un nettoyage plus fréquent peut être nécessaire. Il est également recommandé de faire inspecter votre système par un professionnel tous les 1 à 2 ans pour vérifier les connexions électriques et s'assurer que tout fonctionne correctement.",
      en: "Maintaining solar panels is relatively simple. Periodic cleaning with water and possibly a mild detergent is usually sufficient. The frequency depends on your environment: in dusty areas or with a lot of pollution, more frequent cleaning may be necessary. It is also recommended to have your system inspected by a professional every 1 to 2 years to check electrical connections and ensure everything is working properly.",
    },
    category: "installation",
    icon: "tool",
  },
  {
    id: "faq-7",
    question: {
      fr: "Puis-je stocker l'énergie solaire que je produis ?",
      en: "Can I store the solar energy I produce?",
    },
    answer: {
      fr: "Oui, vous pouvez stocker l'énergie solaire que vous produisez en utilisant des batteries de stockage. Ces systèmes vous permettent de conserver l'excédent d'énergie produite pendant la journée pour l'utiliser la nuit ou lors des périodes de faible ensoleillement. Les technologies de batteries ont considérablement évolué ces dernières années, offrant des solutions plus efficaces et abordables. Cependant, l'ajout d'un système de stockage augmente le coût initial de votre installation solaire.",
      en: "Yes, you can store the solar energy you produce using storage batteries. These systems allow you to store excess energy produced during the day for use at night or during periods of low sunlight. Battery technologies have evolved considerably in recent years, offering more efficient and affordable solutions. However, adding a storage system increases the initial cost of your solar installation.",
    },
    category: "technical",
    icon: "zap",
  },
  {
    id: "faq-8",
    question: {
      fr: "Combien de temps faut-il pour installer un système solaire ?",
      en: "How long does it take to install a solar system?",
    },
    answer: {
      fr: "La durée d'installation d'un système solaire varie en fonction de sa taille et de sa complexité. Pour une installation résidentielle standard, le processus d'installation proprement dit prend généralement de 1 à 3 jours. Cependant, le processus complet, incluant la conception du système, l'obtention des permis nécessaires et les inspections, peut prendre de 1 à 3 mois. Chez Sattel Energy, nous nous efforçons de rendre ce processus aussi efficace que possible pour minimiser les délais.",
      en: "The installation time for a solar system varies depending on its size and complexity. For a standard residential installation, the actual installation process typically takes 1 to 3 days. However, the complete process, including system design, obtaining necessary permits, and inspections, can take 1 to 3 months. At Sattel Energy, we strive to make this process as efficient as possible to minimize delays.",
    },
    category: "installation",
    icon: "settings",
  },
  {
    id: "faq-9",
    question: {
      fr: "Quelles sont les démarches administratives pour installer des panneaux solaires ?",
      en: "What are the administrative procedures for installing solar panels?",
    },
    answer: {
      fr: "Les démarches administratives varient selon votre pays et votre région, mais elles incluent généralement : une déclaration préalable de travaux auprès de votre mairie, une demande de raccordement auprès du gestionnaire de réseau électrique, et éventuellement des demandes de subventions ou d'aides financières. Chez Sattel Energy, nous vous accompagnons dans toutes ces démarches administratives pour faciliter votre projet d'installation solaire.",
      en: "Administrative procedures vary according to your country and region, but they generally include: a prior declaration of work to your town hall, a connection request to the electricity network manager, and possibly applications for subsidies or financial aid. At Sattel Energy, we assist you with all these administrative procedures to facilitate your solar installation project.",
    },
    category: "installation",
    icon: "tool",
  },
  {
    id: "faq-10",
    question: {
      fr: "Est-ce que je peux vendre l'excédent d'électricité que je produis ?",
      en: "Can I sell the excess electricity I produce?",
    },
    answer: {
      fr: "Dans de nombreux pays, oui, vous pouvez vendre l'excédent d'électricité que vous produisez au réseau électrique. Ce processus, appelé 'revente' ou 'injection réseau', vous permet de recevoir une compensation financière pour chaque kilowattheure (kWh) que vous injectez dans le réseau. Les tarifs et les conditions de rachat varient selon les pays et peuvent évoluer avec le temps. Nous pouvons vous conseiller sur les meilleures options disponibles dans votre région.",
      en: "In many countries, yes, you can sell the excess electricity you produce to the electrical grid. This process, called 'resale' or 'grid injection', allows you to receive financial compensation for each kilowatt-hour (kWh) that you inject into the grid. Rates and buyback conditions vary by country and may evolve over time. We can advise you on the best options available in your region.",
    },
    category: "commercial",
    icon: "dollar",
  },
  // Nouvelles questions basées sur les questions existantes dans la capture d'écran
  {
    id: "faq-11",
    question: {
      fr: "Sattel Energy propose-t-il du financement ?",
      en: "Does Sattel Energy offer financing?",
    },
    answer: {
      fr: "Oui, Sattel Energy propose plusieurs options de financement pour faciliter votre transition vers l'énergie solaire. Nous travaillons avec des partenaires financiers pour offrir des prêts à taux avantageux, des solutions de leasing et des formules de paiement échelonné. Nos conseillers peuvent vous aider à choisir la solution la plus adaptée à votre situation et vous accompagner dans les démarches administratives pour obtenir des subventions ou crédits d'impôt disponibles dans votre région.",
      en: "Yes, Sattel Energy offers several financing options to facilitate your transition to solar energy. We work with financial partners to offer loans at advantageous rates, leasing solutions, and installment payment plans. Our advisors can help you choose the solution that best suits your situation and assist you with the administrative procedures to obtain subsidies or tax credits available in your region.",
    },
    category: "financing",
    icon: "dollar",
  },
  {
    id: "faq-12",
    question: {
      fr: "Fournissez-vous un support après-vente ?",
      en: "Do you provide after-sales support?",
    },
    answer: {
      fr: "Oui ! Sattel Energy fournit l'installation, l'assistance après-vente et l'exécution de la garantie directement par l'intermédiaire de ses filiales de vente locales ou de ses distributeurs agréés. Tous les produits sont vendus avec une garantie d'usine mondiale de 12 mois sur les pièces et la main-d'œuvre. Nous proposons également des contrats de maintenance préventive et des services de monitoring à distance pour assurer la performance optimale de votre installation sur le long terme.",
      en: "Yes! Sattel Energy provides installation, after-sales support, and warranty execution directly through its local sales subsidiaries or authorized distributors. All products are sold with a 12-month worldwide factory warranty on parts and labor. We also offer preventive maintenance contracts and remote monitoring services to ensure the optimal performance of your installation over the long term.",
    },
    category: "commercial",
    icon: "check",
  },
  {
    id: "faq-13",
    question: {
      fr: "Dans quels pays expédiez-vous vos produits ?",
      en: "To which countries do you ship your products?",
    },
    answer: {
      fr: "Sattel Energy expédie ses produits dans toute l'Afrique, avec une présence particulièrement forte en Afrique centrale et de l'Ouest. Nous disposons de centres logistiques stratégiquement situés pour assurer des délais de livraison optimaux et un service après-vente de proximité. Pour les projets internationaux hors Afrique, nous étudions les demandes au cas par cas. N'hésitez pas à contacter notre équipe commerciale pour vérifier la disponibilité dans votre pays.",
      en: "Sattel Energy ships its products throughout Africa, with a particularly strong presence in Central and West Africa. We have logistically strategic centers to ensure optimal delivery times and local after-sales service. For international projects outside Africa, we study requests on a case-by-case basis. Do not hesitate to contact our sales team to check availability in your country.",
    },
    category: "delivery",
    icon: "globe",
  },
  {
    id: "faq-14",
    question: {
      fr: "Combien de temps s'écoule entre ma commande et la livraison ?",
      en: "How much time elapses between my order and delivery?",
    },
    answer: {
      fr: "Le délai entre la commande et la livraison dépend de plusieurs facteurs, notamment la disponibilité des produits en stock, votre localisation et la complexité du projet. Pour les produits standard en stock, nous pouvons généralement livrer dans un délai de 2 à 4 semaines. Pour les projets sur mesure ou les commandes importantes, le délai peut s'étendre de 6 à 12 semaines. Nous vous communiquons un calendrier précis lors de la confirmation de votre commande et vous tenons informé de l'avancement tout au long du processus.",
      en: "The time between order and delivery depends on several factors, including product availability in stock, your location, and project complexity. For standard products in stock, we can generally deliver within 2 to 4 weeks. For custom projects or large orders, the timeframe may extend from 6 to 12 weeks. We provide you with a precise schedule when confirming your order and keep you informed of progress throughout the process.",
    },
    category: "delivery",
    icon: "clock",
  },
  {
    id: "faq-15",
    question: {
      fr: "Quelle technologie propose Sattel Energy ?",
      en: "What technology does Sattel Energy offer?",
    },
    answer: {
      fr: "Sattel Energy propose une gamme complète de technologies solaires photovoltaïques, incluant des panneaux monocristallins et polycristallins de haute efficacité, des onduleurs string et micro-onduleurs, des systèmes de stockage à batteries lithium-ion, des optimiseurs de puissance, et des solutions de monitoring intelligent. Nous sélectionnons rigoureusement nos fournisseurs pour garantir la qualité, la fiabilité et la durabilité de nos produits. Notre équipe technique reste constamment à l'affût des innovations du secteur pour vous proposer les solutions les plus performantes et adaptées à vos besoins spécifiques.",
      en: "Sattel Energy offers a complete range of photovoltaic solar technologies, including high-efficiency monocrystalline and polycrystalline panels, string inverters and microinverters, lithium-ion battery storage systems, power optimizers, and intelligent monitoring solutions. We rigorously select our suppliers to guarantee the quality, reliability, and durability of our products. Our technical team constantly stays abreast of industry innovations to offer you the most efficient solutions adapted to your specific needs.",
    },
    category: "technical",
    icon: "lightbulb",
  },
  {
    id: "faq-16",
    question: {
      fr: "Avez-vous de l'expérience dans les grands appels d'offres gouvernementaux ?",
      en: "Do you have experience with large government tenders?",
    },
    answer: {
      fr: "Oui, Sattel Energy possède une solide expérience dans la réponse et l'exécution de grands projets issus d'appels d'offres gouvernementaux, particulièrement en Afrique. Notre équipe spécialisée dans les marchés publics maîtrise les procédures complexes liées à ces appels d'offres et sait répondre aux exigences techniques, administratives et financières spécifiques. Nous avons réalisé avec succès plusieurs projets d'électrification rurale, d'installations sur bâtiments publics et de mini-réseaux solaires pour des gouvernements et des organisations internationales. Nous pouvons fournir des références détaillées sur demande.",
      en: "Yes, Sattel Energy has solid experience in responding to and executing large projects from government tenders, particularly in Africa. Our team specialized in public procurement masters the complex procedures related to these tenders and knows how to meet specific technical, administrative, and financial requirements. We have successfully completed several rural electrification projects, installations on public buildings, and solar mini-grids for governments and international organizations. We can provide detailed references upon request.",
    },
    category: "commercial",
    icon: "file",
  },
  {
    id: "faq-17",
    question: {
      fr: "Quelles certifications possèdent vos produits ?",
      en: "What certifications do your products have?",
    },
    answer: {
      fr: "Tous nos produits sont certifiés selon les normes internationales les plus strictes. Nos panneaux solaires sont certifiés IEC 61215 et IEC 61730 pour la performance et la sécurité. Nos onduleurs sont conformes aux normes VDE-AR-N 4105, G83/2, AS4777 et possèdent les certifications CE. Nos systèmes de stockage respectent les normes UN38.3, IEC62619, UL1642 pour la sécurité des batteries. De plus, Sattel Energy est certifiée ISO 9001 pour la qualité de ses processus et ISO 14001 pour sa gestion environnementale. Nous pouvons fournir tous les certificats et documents de conformité sur demande.",
      en: "All our products are certified according to the strictest international standards. Our solar panels are IEC 61215 and IEC 61730 certified for performance and safety. Our inverters comply with VDE-AR-N 4105, G83/2, AS4777 standards and have CE certifications. Our storage systems comply with UN38.3, IEC62619, UL1642 standards for battery safety. Additionally, Sattel Energy is ISO 9001 certified for the quality of its processes and ISO 14001 for its environmental management. We can provide all certificates and compliance documents upon request.",
    },
    category: "technical",
    icon: "award",
  },
]

// Fonction pour obtenir l'icône correspondante
const getIcon = (iconName: FAQItem["icon"]) => {
  switch (iconName) {
    case "help":
      return <HelpCircle className="h-6 w-6" />
    case "check":
      return <CheckCircle className="h-6 w-6" />
    case "alert":
      return <AlertCircle className="h-6 w-6" />
    case "settings":
      return <Settings className="h-6 w-6" />
    case "tool":
      return <Tool className="h-6 w-6" />
    case "dollar":
      return <DollarSign className="h-6 w-6" />
    case "zap":
      return <Zap className="h-6 w-6" />
    case "truck":
      return <Truck className="h-6 w-6" />
    case "clock":
      return <Clock className="h-6 w-6" />
    case "lightbulb":
      return <Lightbulb className="h-6 w-6" />
    case "award":
      return <Award className="h-6 w-6" />
    case "file":
      return <FileText className="h-6 w-6" />
    case "globe":
      return <Globe className="h-6 w-6" />
    default:
      return <HelpCircle className="h-6 w-6" />
  }
}

// Fonction pour obtenir la couleur de l'icône
const getIconColor = (category: FAQItem["category"]) => {
  switch (category) {
    case "general":
      return "text-blue-500 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300"
    case "technical":
      return "text-green-500 bg-green-100 dark:bg-green-900/30 dark:text-green-300"
    case "commercial":
      return "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-300"
    case "installation":
      return "text-purple-500 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-300"
    case "financing":
      return "text-emerald-500 bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-300"
    case "delivery":
      return "text-orange-500 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-300"
    default:
      return "text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
  }
}

// Fonction pour obtenir la couleur de la bordure
const getBorderColor = (category: FAQItem["category"]) => {
  switch (category) {
    case "general":
      return "border-blue-200 dark:border-blue-900/50"
    case "technical":
      return "border-green-200 dark:border-green-900/50"
    case "commercial":
      return "border-yellow-200 dark:border-yellow-900/50"
    case "installation":
      return "border-purple-200 dark:border-purple-900/50"
    case "financing":
      return "border-emerald-200 dark:border-emerald-900/50"
    case "delivery":
      return "border-orange-200 dark:border-orange-900/50"
    default:
      return "border-gray-200 dark:border-gray-700"
  }
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("all")
  const { language } = useLanguage()

  // Traduction des catégories
  const categoryLabels: Record<FAQCategory, { fr: string; en: string }> = {
    all: { fr: "Tous", en: "All" },
    general: { fr: "Général", en: "General" },
    technical: { fr: "Technique", en: "Technical" },
    commercial: { fr: "Commercial", en: "Commercial" },
    installation: { fr: "Installation", en: "Installation" },
    financing: { fr: "Financement", en: "Financing" },
    delivery: { fr: "Livraison", en: "Delivery" },
  }

  // Filtrer les FAQs en fonction de la recherche et de la catégorie
  const filteredFAQs = faqItems.filter((faq) => {
    const matchesSearch =
      searchQuery === "" ||
      faq.question[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer[language].toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "all" || faq.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-900 py-12 md:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-bold mb-4">
                {language === "fr" ? "Questions fréquemment posées" : "Frequently Asked Questions"}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {language === "fr"
                  ? "Trouvez des réponses aux questions les plus courantes sur l'énergie solaire et nos services."
                  : "Find answers to the most common questions about solar energy and our services."}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative w-full md:w-auto md:min-w-[300px]"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder={language === "fr" ? "Rechercher une question..." : "Search for a question..."}
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Tabs
                value={activeCategory}
                onValueChange={(value) => setActiveCategory(value as FAQCategory)}
                className="w-full md:w-auto"
              >
                <TabsList className="grid grid-cols-3 md:grid-cols-7 w-full md:w-auto">
                  {Object.entries(categoryLabels).map(([key, label]) => (
                    <TabsTrigger key={key} value={key}>
                      {label[language]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 md:py-16">
        <div className="container">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-6">
                  {filteredFAQs.map((faq) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className={`border rounded-lg overflow-hidden shadow-sm ${getBorderColor(faq.category)}`}
                    >
                      <Accordion type="single" collapsible>
                        <AccordionItem value={faq.id} className="border-none">
                          <AccordionTrigger className="px-6 py-4 hover:no-underline bg-gray-50 dark:bg-gray-800/50">
                            <div className="flex items-center text-left gap-4">
                              <div
                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${getIconColor(
                                  faq.category,
                                )}`}
                              >
                                {getIcon(faq.icon)}
                              </div>
                              <span className="font-medium">{faq.question[language]}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                            <div className="pl-14">
                              <p>{faq.answer[language]}</p>
                              <div className="mt-4 flex">
                                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                  {categoryLabels[faq.category][language]}
                                </span>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-500 dark:text-gray-400">
                    {language === "fr"
                      ? "Aucune question ne correspond à votre recherche. Essayez avec d'autres termes."
                      : "No questions match your search. Try with other terms."}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("")
                      setActiveCategory("all")
                    }}
                    className="mt-4"
                  >
                    {language === "fr" ? "Réinitialiser la recherche" : "Reset Search"}
                  </Button>
                </motion.div>
              )}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-yellow-50 dark:from-gray-900 dark:to-yellow-900/20">
        <div className="container">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">
                  {language === "fr" ? "Vous n'avez pas trouvé votre réponse ?" : "Didn't Find Your Answer?"}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {language === "fr"
                    ? "Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques."
                    : "Our team is available to answer all your specific questions."}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black">
                    <a href="/contact">{language === "fr" ? "Contactez-nous" : "Contact Us"}</a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="mailto:info@sattelenergy.com">info@sattelenergy.com</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  )
}
