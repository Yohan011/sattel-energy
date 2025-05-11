"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Tag } from "lucide-react"

// Project types
type ProjectCategory = "commercial" | "electrification" | "centrale" | "eclairage" | "stockage" | "all"

interface Project {
  id: number
  title: string
  category: Exclude<ProjectCategory, "all">
  location: string
  power?: string
  capacity?: string
  year?: string
  client?: string
  progress?: number
  description: string
  imageSrc: string
  tags: string[]
}

// Sample data
const ongoingProjects: Project[] = [
  {
    id: 1,
    title: "Prise en charge agences Equity BDCD / Kinshasa",
    category: "commercial",
    location: "Kinshasa, RDC",
    power: "250kVA",
    description: "Suspendre la consommation du carburant via le Groupe Électrogène...",
    progress: 35,
    imageSrc: "/assets/images/projects/equity.jpg",
    tags: ["Agences bancaires", "250kVA", "Autonomie énergétique"],
  },
  {
    id: 2,
    title: "Électrification cité Masimbanimba",
    category: "electrification",
    location: "Masimbanimba, RDC",
    power: "6MW",
    description: "Électrification des 2000 ménages...",
    progress: 45,
    imageSrc: "/assets/images/projects/masimbanimba.jpg",
    tags: ["Électrification rurale", "6MW", "2000 ménages"],
  },
  {
    id: 3,
    title: "Électrification Luozi",
    category: "electrification",
    location: "Luozi, RDC",
    power: "6MW",
    description: "Électrification des plus de 1500 ménages...",
    progress: 60,
    imageSrc: "/assets/images/projects/luozi.jpg",
    tags: ["Électrification rurale", "6MW", "1500 ménages", "Entités économiques"],
  },
  {
    id: 4,
    title: "Agrandissement central Minkelo",
    category: "centrale",
    location: "Minkelo, RDC",
    power: "500kVA",
    description: "Agrandir la centrale existante pour connecter les abonnés...",
    progress: 70,
    imageSrc: "/assets/images/projects/minkelo.jpg",
    tags: ["Agrandissement", "500kVA", "Centrale solaire"],
  },
]

const completedProjects: Project[] = [
  {
    id: 5,
    title: "Micro Centrale Solaire à Ipamu et Bwala Yulu",
    category: "eclairage",
    location: "Ipamu, RDC",
    year: "2023",
    client: "ANSER",
    description: "Installation d'un système d'éclairage solaire dans la ville d'Ipamu...",
    imageSrc: "/assets/images/ipamu.jpg",
    tags: ["Micro centrale", "Éclairage public", "Électrification rurale"],
  },
  {
    id: 6,
    title: "Chambre Froide Solaire à Minkelo",
    category: "stockage",
    location: "Minkelo, Kongo Central, RDC",
    year: "2023",
    capacity: "500 m³",
    description: "Installation d'une chambre froide de 500 m³ pour les produits agricoles...",
    imageSrc: "/assets/images/minkelo.jpg",
    tags: ["Chambre froide solaire", "Conservation agricole", "Énergie renouvelable"],
  },
  {
    id: 7,
    title: "Lampadaires Solaires à Boende",
    category: "eclairage",
    location: "Boende, RDC",
    year: "2023",
    client: "ANSER",
    description: "Installation de lampadaires solaires pour améliorer la sécurité nocturne...",
    imageSrc: "/assets/images/boende.jpg",
    tags: ["Éclairage solaire", "Mobilisation locale", "Transformation urbaine"],
  },
]

// Category mapping for display
const categoryLabels: Record<ProjectCategory, string> = {
  all: "Tous",
  commercial: "Commercial",
  electrification: "Électrification",
  centrale: "Centrales",
  eclairage: "Éclairage Public",
  stockage: "Stockage Froid",
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
}

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [filteredOngoing, setFilteredOngoing] = useState(ongoingProjects)
  const [filteredCompleted, setFilteredCompleted] = useState(completedProjects)

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredOngoing(ongoingProjects)
      setFilteredCompleted(completedProjects)
    } else {
      setFilteredOngoing(ongoingProjects.filter((project) => project.category === activeCategory))
      setFilteredCompleted(completedProjects.filter((project) => project.category === activeCategory))
    }
  }, [activeCategory])

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Nos Projets</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as ProjectCategory)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === key
                ? "bg-yellow-400 text-black font-medium"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects Tabs */}
      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="ongoing">En Cours</TabsTrigger>
          <TabsTrigger value="completed">Terminés</TabsTrigger>
        </TabsList>

        {/* Ongoing Projects */}
        <TabsContent value="ongoing">
          <AnimatePresence mode="wait">
            <motion.div
              key={`ongoing-${activeCategory}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredOngoing.length > 0 ? (
                filteredOngoing.map((project) => <ProjectCard key={project.id} project={project} status="ongoing" />)
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    Aucun projet en cours dans cette catégorie pour le moment.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </TabsContent>

        {/* Completed Projects */}
        <TabsContent value="completed">
          <AnimatePresence mode="wait">
            <motion.div
              key={`completed-${activeCategory}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCompleted.length > 0 ? (
                filteredCompleted.map((project) => (
                  <ProjectCard key={project.id} project={project} status="completed" />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 dark:text-gray-400">
                    Aucun projet terminé dans cette catégorie pour le moment.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  status: "ongoing" | "completed"
}

function ProjectCard({ project, status }: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48">
        <Image
          src={project.imageSrc || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge variant={status === "ongoing" ? "default" : "secondary"} className="font-medium">
            {status === "ongoing" ? "En Cours" : "Terminé"}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <Badge variant="outline" className="bg-white/80 dark:bg-black/50 backdrop-blur-sm">
            {categoryLabels[project.category]}
          </Badge>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>

        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3">
          <span className="inline-block mr-3">{project.location}</span>
          {project.year && <span className="inline-block">Année: {project.year}</span>}
        </div>

        {status === "ongoing" && project.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progression</span>
              <span>{project.progress}%</span>
            </div>
            <Progress value={project.progress} className="h-2" />
          </div>
        )}

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <div key={index} className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full flex items-center">
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          {project.power && (
            <div className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 px-2 py-1 rounded">
              Puissance: {project.power}
            </div>
          )}
          {project.capacity && (
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">
              Capacité: {project.capacity}
            </div>
          )}
          {project.client && (
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
              Client: {project.client}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
