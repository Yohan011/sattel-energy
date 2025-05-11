"use client"

import { useState, useEffect } from "react"
import { ProjectCard } from "@/components/projects/project-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

type ProjectStatus = "in-progress" | "completed"
type ProjectType = "electrification" | "commercial" | "residential" | "industrial"

interface Project {
  id: string
  title: string
  location: string
  description: string
  imageSrc: string
  status: ProjectStatus
  projectType: ProjectType
  tags: string[]
  power: string
  detailsLink: string
}

// Sample project data
const projectsData: Project[] = [
  {
    id: "equity",
    title: "Prise en charge agences Equity BDCD / Kinshasa",
    location: "Kinshasa, RDC",
    description:
      "Suspendre la consommation du carburant via le Groupe Électrogène. Installation d'un système solaire complet pour assurer l'autonomie énergétique des agences bancaires.",
    imageSrc: "/assets/images/projects/equity.jpg",
    status: "in-progress",
    projectType: "commercial",
    tags: ["Agences bancaires", "Autonomie énergétique", "250kVA"],
    power: "250kVA",
    detailsLink: "/projects/equity",
  },
  {
    id: "masimbanimba",
    title: "Électrification cité Masimbanimba",
    location: "Masimbanimba, RDC",
    description:
      "Électrification des 2000 ménages de la cité de Masimbanimba. Ce projet majeur vise à fournir un accès à l'électricité propre et fiable pour améliorer les conditions de vie des habitants.",
    imageSrc: "/assets/images/projects/masimbanimba.jpg",
    status: "in-progress",
    projectType: "electrification",
    tags: ["Électrification rurale", "6MW", "2000 ménages"],
    power: "6MW",
    detailsLink: "/projects/masimbanimba",
  },
  {
    id: "luozi",
    title: "Électrification Luozi",
    location: "Luozi, RDC",
    description:
      "Électrification des plus de 1500 ménages de Luozi et des entités économiques environnantes. Le projet comprend l'installation d'un micro-réseau solaire avec stockage pour assurer une alimentation 24/7.",
    imageSrc: "/assets/images/projects/luozi.jpg",
    status: "in-progress",
    projectType: "electrification",
    tags: ["Électrification rurale", "6MW", "1500 ménages", "Entités économiques"],
    power: "6MW",
    detailsLink: "/projects/luozi",
  },
  {
    id: "minkelo",
    title: "Électrification Minkelo",
    location: "Minkelo, RDC",
    description:
      "Installation d'un système solaire hybride pour électrifier le village de Minkelo. Ce projet combine panneaux solaires, batteries de stockage et générateurs de secours pour une fiabilité maximale.",
    imageSrc: "/assets/images/projects/minkelo.jpg",
    status: "completed",
    projectType: "electrification",
    tags: ["Électrification rurale", "500kW", "Système hybride"],
    power: "500kW",
    detailsLink: "/projects/minkelo",
  },
  {
    id: "ipamu",
    title: "Hôpital Ipamu",
    location: "Ipamu, RDC",
    description:
      "Fourniture d'électricité fiable pour l'hôpital d'Ipamu. L'installation solaire permet d'assurer le fonctionnement continu des équipements médicaux critiques et d'améliorer la qualité des soins.",
    imageSrc: "/assets/images/projects/ipamu.jpg",
    status: "completed",
    projectType: "commercial",
    tags: ["Santé", "100kW", "Stockage"],
    power: "100kW",
    detailsLink: "/projects/ipamu",
  },
  {
    id: "boende",
    title: "Électrification Boende",
    location: "Boende, RDC",
    description:
      "Projet d'électrification de la ville de Boende avec un système solaire centralisé et un réseau de distribution. Cette solution apporte l'électricité à plus de 1000 foyers et commerces locaux.",
    imageSrc: "/assets/images/projects/boende.jpg",
    status: "completed",
    projectType: "electrification",
    tags: ["Électrification urbaine", "3MW", "1000 foyers"],
    power: "3MW",
    detailsLink: "/projects/boende",
  },
  {
    id: "oua",
    title: "Installation solaire pour le hub de la Cité de l'OUA",
    location: "Cité de l'OUA, Kinshasa, RDC",
    description:
      "Installation d'un système solaire complet pour alimenter le hub de la Cité de l'OUA, assurant une alimentation électrique fiable et durable pour les activités administratives et commerciales.",
    imageSrc: "/assets/images/projects/oua.jpg", // Using existing image as placeholder
    status: "completed",
    projectType: "commercial",
    tags: ["Installation solaire", "Hub commercial", "Énergie durable"],
    power: "150kW",
    detailsLink: "/projects/oua",
  },
  {
    id: "bwala-yulu",
    title: "Installation de la station de recharge pour le compte d'ANSER 2022",
    location: "Bwala Yulu, RDC",
    description:
      "Projet d'électrification rurale à Bwala Yulu réalisé pour l'Agence Nationale de l'Électrification et des Services Énergétiques en milieu Rural (ANSER), apportant l'accès à l'électricité à la communauté locale.",
    imageSrc: "/assets/images/projects/bwala-yulu.jpg", // Using existing image as placeholder
    status: "completed",
    projectType: "electrification",
    tags: ["Électrification rurale", "ANSER", "Développement communautaire"],
    power: "200kW",
    detailsLink: "/projects/bwala-yulu",
  },
  {
    id: "data-center-cen",
    title: "Installation du Back Up pour la DATA CENTER de la CENI",
    location: "Kinshasa, RDC",
    description:
      "Installation d'un système de backup énergétique pour le data center CEN, garantissant la continuité des opérations informatiques critiques même en cas de coupure du réseau électrique principal.",
    imageSrc: "/assets/images/projects/data-center-cen.jpg", // Using existing image as placeholder
    status: "completed",
    projectType: "commercial",
    tags: ["Data center", "Système de backup", "Infrastructure critique"],
    power: "300kW",
    detailsLink: "/projects/data-center-cen",
  },
]

export default function EnhancedGallery() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedPower, setSelectedPower] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [sortOption, setSortOption] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  // Apply filters and sorting
  useEffect(() => {
    let result = [...projectsData]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply status filter
    if (selectedStatus !== "all") {
      result = result.filter((project) => project.status === selectedStatus)
    }

    // Apply type filter
    if (selectedType !== "all") {
      result = result.filter((project) => project.projectType === selectedType)
    }

    // Apply power filter
    if (selectedPower !== "all") {
      switch (selectedPower) {
        case "small":
          result = result.filter((project) => {
            const powerValue = Number.parseInt(project.power?.replace(/[^0-9]/g, "") || "0")
            return powerValue < 500
          })
          break
        case "medium":
          result = result.filter((project) => {
            const powerValue = Number.parseInt(project.power?.replace(/[^0-9]/g, "") || "0")
            return powerValue >= 500 && powerValue < 3000
          })
          break
        case "large":
          result = result.filter((project) => {
            const powerValue = Number.parseInt(project.power?.replace(/[^0-9]/g, "") || "0")
            return powerValue >= 3000
          })
          break
      }
    }

    // Apply sorting
    switch (sortOption) {
      case "newest":
        // For demo purposes, we'll just keep the original order
        break
      case "oldest":
        result = [...result].reverse()
        break
      case "alphabetical":
        result = [...result].sort((a, b) => a.title.localeCompare(b.title))
        break
      case "location":
        result = [...result].sort((a, b) => a.location.localeCompare(b.location))
        break
    }

    setFilteredProjects(result)
  }, [searchQuery, selectedStatus, selectedType, selectedPower, sortOption])

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedStatus("all")
    setSelectedType("all")
    setSelectedPower("all")
    setSortOption("newest")
  }

  return (
    <div className="container py-8">
      {/* Search and filter section */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder={language === "fr" ? "Rechercher un projet..." : "Search for a project..."}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4" />
              {language === "fr" ? "Filtres" : "Filters"}
            </Button>
            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={language === "fr" ? "Trier par" : "Sort by"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{language === "fr" ? "Plus récents" : "Newest"}</SelectItem>
                <SelectItem value="oldest">{language === "fr" ? "Plus anciens" : "Oldest"}</SelectItem>
                <SelectItem value="alphabetical">{language === "fr" ? "Alphabétique" : "Alphabetical"}</SelectItem>
                <SelectItem value="location">{language === "fr" ? "Localisation" : "Location"}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Expanded filters */}
        {showFilters && (
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">{language === "fr" ? "Filtres avancés" : "Advanced Filters"}</h3>
              <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 gap-1 text-xs">
                <X className="h-3 w-3" />
                {language === "fr" ? "Réinitialiser" : "Reset"}
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === "fr" ? "Statut" : "Status"}</label>
                <Tabs value={selectedStatus} onValueChange={setSelectedStatus} className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="all">{language === "fr" ? "Tous" : "All"}</TabsTrigger>
                    <TabsTrigger value="completed">{language === "fr" ? "Terminés" : "Completed"}</TabsTrigger>
                    <TabsTrigger value="in-progress">{language === "fr" ? "En cours" : "In Progress"}</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === "fr" ? "Type" : "Type"}</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder={language === "fr" ? "Tous les types" : "All types"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{language === "fr" ? "Tous les types" : "All types"}</SelectItem>
                    <SelectItem value="commercial">{language === "fr" ? "Commercial" : "Commercial"}</SelectItem>
                    <SelectItem value="residential">{language === "fr" ? "Résidentiel" : "Residential"}</SelectItem>
                    <SelectItem value="industrial">{language === "fr" ? "Industriel" : "Industrial"}</SelectItem>
                    <SelectItem value="electrification">
                      {language === "fr" ? "Électrification" : "Electrification"}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">{language === "fr" ? "Puissance" : "Power"}</label>
                <Select value={selectedPower} onValueChange={setSelectedPower}>
                  <SelectTrigger>
                    <SelectValue placeholder={language === "fr" ? "Toutes puissances" : "All power ranges"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{language === "fr" ? "Toutes puissances" : "All power ranges"}</SelectItem>
                    <SelectItem value="small">{language === "fr" ? "< 500 kW" : "< 500 kW"}</SelectItem>
                    <SelectItem value="medium">{language === "fr" ? "500 kW - 3 MW" : "500 kW - 3 MW"}</SelectItem>
                    <SelectItem value="large">{language === "fr" ? "> 3 MW" : "> 3 MW"}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredProjects.length}{" "}
          {language === "fr"
            ? `projet${filteredProjects.length > 1 ? "s" : ""} trouvé${filteredProjects.length > 1 ? "s" : ""}`
            : `project${filteredProjects.length > 1 ? "s" : ""} found`}
        </p>
      </div>

      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              location={project.location}
              description={project.description}
              imageSrc={project.imageSrc}
              status={project.status}
              projectType={project.projectType}
              tags={project.tags}
              power={project.power}
              detailsLink={project.detailsLink}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-12">
          <p className="mb-4 text-center text-muted-foreground">
            {language === "fr"
              ? "Aucun projet ne correspond à vos critères de recherche."
              : "No projects match your search criteria."}
          </p>
          <Button variant="outline" onClick={resetFilters}>
            {language === "fr" ? "Réinitialiser les filtres" : "Reset filters"}
          </Button>
        </div>
      )}
    </div>
  )
}
