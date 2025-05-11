"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n/language-context"
import ScrollAnimation from "@/components/scroll-animation-provider"

type Milestone = {
  year: string
  title: {
    fr: string
    en: string
  }
  description: {
    fr: string
    en: string
  }
}

const milestones: Milestone[] = [
  {
    year: "1997",
    title: {
      fr: "Création de SATTEL",
      en: "Creation of SATTEL",
    },
    description: {
      fr: "SATTEL est fondée en 1997 en République du Congo avec une mission claire : apporter des solutions technologiques innovantes aux populations africaines, en particulier congolaises. L'entreprise se positionne rapidement comme un intégrateur de réseaux télécoms et informatiques, avec une volonté d'élargir progressivement ses activités vers les énergies renouvelables.",
      en: "SATTEL was founded in 1997 in the Republic of Congo with a clear mission: to bring innovative technological solutions to African populations, particularly Congolese. The company quickly positioned itself as a telecom and IT network integrator, with a desire to gradually expand its activities towards renewable energies.",
    },
  },
  {
    year: "1998–2005",
    title: {
      fr: "Développement des solutions télécoms",
      en: "Development of telecom solutions",
    },
    description: {
      fr: "Durant ses premières années, SATTEL se spécialise dans la terminaison d'appels internationaux, collaborant avec des partenaires européens et internationaux tels que Gateway (Royaume-Uni), BEONE (Suisse), Telemedia et B3G (France). Cette activité a permis à l'entreprise de bâtir une solide expertise dans les infrastructures télécoms, notamment dans la gestion de minutes d'appel, l'intégration de réseaux, et l'interconnexion des opérateurs.",
      en: "During its early years, SATTEL specialized in international call termination, collaborating with European and international partners such as Gateway (UK), BEONE (Switzerland), Telemedia and B3G (France). This activity allowed the company to build solid expertise in telecom infrastructures, particularly in call minute management, network integration, and operator interconnection.",
    },
  },
  {
    year: "2006–2012",
    title: {
      fr: "Diversification technologique",
      en: "Technological diversification",
    },
    description: {
      fr: "SATTEL élargit ses compétences vers des technologies plus variées, notamment : VSAT (Very Small Aperture Terminal), pour fournir un accès internet satellite dans les zones rurales ; VPN sécurisés pour les entreprises ; Solutions Wi-Fi communautaires. Cette phase de diversification renforce la vocation de SATTEL à fournir des solutions numériques accessibles à tous, même dans les régions les plus isolées.",
      en: "SATTEL expanded its skills towards more varied technologies, including: VSAT (Very Small Aperture Terminal), to provide satellite internet access in rural areas; Secure VPNs for businesses; Community Wi-Fi solutions. This diversification phase reinforced SATTEL's vocation to provide digital solutions accessible to all, even in the most isolated regions.",
    },
  },
  {
    year: "2013–2017",
    title: {
      fr: "Début de l'engagement dans le solaire",
      en: "Beginning of solar commitment",
    },
    description: {
      fr: "Consciente des défis liés à l'accès à l'électricité en Afrique centrale, SATTEL commence à proposer des installations solaires domestiques et professionnelles. L'objectif est double : pallier les insuffisances du réseau électrique national et offrir une alternative fiable, économique et écologique.",
      en: "Aware of the challenges related to electricity access in Central Africa, SATTEL began offering domestic and professional solar installations. The objective was twofold: to compensate for the inadequacies of the national electricity grid and to offer a reliable, economical, and ecological alternative.",
    },
  },
  {
    year: "2018",
    title: {
      fr: "Lancement de la division énergie solaire",
      en: "Launch of the solar energy division",
    },
    description: {
      fr: "SATTEL crée officiellement une branche dédiée aux énergies renouvelables, notamment le solaire photovoltaïque. Elle développe des solutions adaptées aux ménages, écoles, centres de santé, entreprises et collectivités, tout en garantissant un suivi technique et une maintenance locale.",
      en: "SATTEL officially created a branch dedicated to renewable energies, particularly photovoltaic solar. It developed solutions adapted to households, schools, health centers, businesses, and communities, while guaranteeing technical monitoring and local maintenance.",
    },
  },
  {
    year: "2020",
    title: {
      fr: "Vision d'un développement durable",
      en: "Vision of sustainable development",
    },
    description: {
      fr: "L'entreprise réaffirme son ambition : contribuer activement au développement économique et social du Congo par l'électrification des zones non connectées et la promotion des énergies propres. La stratégie de SATTEL repose sur trois piliers : Accessibilité des prix pour les populations ; Protection de l'environnement ; Fiabilité technique et longévité des installations.",
      en: "The company reaffirmed its ambition: to actively contribute to the economic and social development of Congo through the electrification of unconnected areas and the promotion of clean energies. SATTEL's strategy is based on three pillars: Price accessibility for populations; Environmental protection; Technical reliability and longevity of installations.",
    },
  },
  {
    year: "2023",
    title: {
      fr: "Projets nationaux et partenariats",
      en: "National projects and partnerships",
    },
    description: {
      fr: "SATTEL s'implique dans plusieurs projets à l'échelle nationale, en collaboration avec des ONG, des gouvernements locaux et des bailleurs internationaux. Elle met en œuvre des centrales solaires rurales, des kits solaires domestiques intelligents, et des solutions hybrides adaptées aux besoins spécifiques du territoire congolais.",
      en: "SATTEL is involved in several projects at the national level, in collaboration with NGOs, local governments, and international donors. It implements rural solar power plants, smart domestic solar kits, and hybrid solutions adapted to the specific needs of the Congolese territory.",
    },
  },
]

export default function HistoryPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  })

  // Scroll handler for highlighting the active milestone
  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const elements = timelineRef.current.querySelectorAll(".milestone-item")
        const windowHeight = window.innerHeight

        let closestElement = 0
        let closestDistance = Number.POSITIVE_INFINITY

        elements.forEach((el, index) => {
          const rect = el.getBoundingClientRect()
          const distanceToCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2)

          if (distanceToCenter < closestDistance) {
            closestDistance = distanceToCenter
            closestElement = index
          }
        })

        setActiveIndex(closestElement)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-scroll to first milestone on load
  useEffect(() => {
    const timer = setTimeout(() => {
      const firstMilestone = document.querySelector(".milestone-item")
      if (firstMilestone) {
        firstMilestone.scrollIntoView({ behavior: "smooth", block: "center" })
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // Scroll to a specific milestone
  const scrollToMilestone = (index: number) => {
    const elements = timelineRef.current?.querySelectorAll(".milestone-item")
    if (elements && elements[index]) {
      elements[index].scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/20 dark:to-gray-900">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {language === "fr" ? "Notre Histoire" : "Our History"}
              </h1>
              <p className="text-xl mb-8">
                {language === "fr"
                  ? "Découvrez le parcours de Sattel Energy depuis sa création, de l'intégration télécom à l'énergie solaire."
                  : "Discover Sattel Energy's journey from its creation, from telecom integration to solar energy."}
              </p>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <Button onClick={() => scrollToMilestone(0)} className="bg-yellow-400 hover:bg-yellow-500 text-black">
                  {language === "fr" ? "Explorer notre histoire" : "Explore our history"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Timeline Navigation */}
      <div className="sticky top-20 z-10 bg-white dark:bg-gray-900 shadow-sm py-4 mb-8">
        <div className="container">
          <div className="flex overflow-x-auto gap-4 pb-2 no-scrollbar">
            {milestones.map((milestone, index) => (
              <Button
                key={index}
                variant={activeIndex === index ? "default" : "outline"}
                className={`whitespace-nowrap ${
                  activeIndex === index ? "bg-yellow-400 text-black hover:bg-yellow-500" : ""
                }`}
                onClick={() => scrollToMilestone(index)}
              >
                {milestone.year}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div ref={containerRef} className="container mb-24">
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-1 bg-yellow-200 dark:bg-yellow-900/50 md:transform md:-translate-x-1/2"
            style={{
              scaleY: scrollYProgress,
            }}
          />

          <div className="space-y-24 py-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`milestone-item relative ${
                  index % 2 === 0 ? "md:pr-[50%]" : "md:pl-[50%] md:flex md:flex-row-reverse"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}
                >
                  {/* Year bubble - Improved positioning for perfect vertical centering */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      index % 2 === 0 ? "left-[-40px] md:left-[-40px]" : "left-[-40px] md:right-[-40px] md:left-auto"
                    } flex items-center justify-center z-10`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-black font-bold shadow-md"
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-yellow-600 dark:text-yellow-400 font-semibold">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold">{milestone.title[language]}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{milestone.description[language]}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
