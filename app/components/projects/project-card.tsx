import Link from "next/link"
import { MapPin, Building, Home, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  location: string
  description: string
  imageSrc: string
  status: "completed" | "in-progress"
  projectType: "commercial" | "residential" | "industrial" | "electrification"
  tags?: string[]
  power?: string
  detailsLink: string
}

export function ProjectCard({
  title,
  location,
  description,
  imageSrc,
  status,
  projectType,
  tags = [],
  power,
  detailsLink,
}: ProjectCardProps) {
  // Get the appropriate icon based on project type
  const getProjectTypeIcon = () => {
    switch (projectType) {
      case "commercial":
        return <Building className="h-5 w-5" />
      case "residential":
        return <Home className="h-5 w-5" />
      case "industrial":
        return <Building className="h-5 w-5" />
      case "electrification":
        return <Building className="h-5 w-5" />
      default:
        return <Building className="h-5 w-5" />
    }
  }

  return (
    <div className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow transition-all hover:shadow-md">
      <div className="relative">
        {/* Status badge */}
        <div className="absolute right-3 top-3 z-10">
          <Badge
            className={`${
              status === "completed" ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {status === "completed" ? "Terminé" : "En Cours"}
          </Badge>
        </div>

        {/* Project image */}
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Project type badge */}
        <div className="absolute left-3 top-3 z-10">
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm dark:bg-black/80 flex items-center gap-1">
            {getProjectTypeIcon()}
            <span>
              {projectType === "commercial"
                ? "Commercial"
                : projectType === "residential"
                  ? "Résidentiel"
                  : projectType === "industrial"
                    ? "Industriel"
                    : "Électrification"}
            </span>
          </Badge>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-1 flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          {location}
        </div>

        <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        {power && (
          <div className="mt-4 inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
            Puissance: {power}
          </div>
        )}

        <div className="mt-4">
          <Button
            asChild
            variant="outline"
            className="w-full group relative overflow-hidden hover:border-yellow-400 hover:text-yellow-600 transition-all duration-300"
          >
            <Link href={detailsLink} className="flex items-center justify-center">
              Voir les détails
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/10 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
