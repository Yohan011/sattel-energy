"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslation } from "@/lib/i18n/translations"

interface SearchResult {
  title: string
  description: string
  url: string
  category: string
}

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Données de recherche simulées
const searchData: SearchResult[] = [
  {
    title: "Panneaux Solaires Haute Performance",
    description:
      "Nos panneaux solaires de haute qualité offrent un rendement optimal pour maximiser votre production d'énergie.",
    url: "/products/panels",
    category: "Produits",
  },
  {
    title: "Onduleurs Intelligents",
    description: "Convertissez efficacement l'énergie solaire en électricité utilisable avec nos onduleurs de pointe.",
    url: "/products/inverters",
    category: "Produits",
  },
  {
    title: "Systèmes de Stockage d'Énergie",
    description: "Stockez l'excès d'énergie pour une utilisation ultérieure avec nos solutions de batteries avancées.",
    url: "/products/batteries",
    category: "Produits",
  },
  {
    title: "Solutions Résidentielles",
    description: "Solutions complètes pour les maisons individuelles avec optimisation de l'autoconsommation.",
    url: "/solutions/residential",
    category: "Solutions",
  },
  {
    title: "Solutions Commerciales",
    description: "Optimisez vos espaces de toiture pour générer de l'électricité verte.",
    url: "/solutions/commercial",
    category: "Solutions",
  },
  {
    title: "Notre Histoire",
    description:
      "Découvrez le parcours de Sattel Energy depuis sa création, de l'intégration télécom à l'énergie solaire.",
    url: "/about/history",
    category: "À propos",
  },
  {
    title: "FAQ",
    description: "Trouvez des réponses aux questions les plus courantes sur l'énergie solaire et nos services.",
    url: "/about/faq",
    category: "À propos",
  },
  {
    title: "Contactez-nous",
    description: "Notre équipe est à votre disposition pour répondre à toutes vos questions.",
    url: "/contact",
    category: "Contact",
  },
]

// Traductions des titres et descriptions pour l'anglais
const searchDataEN: SearchResult[] = [
  {
    title: "High Performance Solar Panels",
    description: "Our high-quality solar panels offer optimal efficiency to maximize your energy production.",
    url: "/products/panels",
    category: "Products",
  },
  {
    title: "Smart Inverters",
    description: "Efficiently convert solar energy into usable electricity with our cutting-edge inverters.",
    url: "/products/inverters",
    category: "Products",
  },
  {
    title: "Energy Storage Systems",
    description: "Store excess energy for later use with our advanced battery solutions.",
    url: "/products/batteries",
    category: "Products",
  },
  {
    title: "Residential Solutions",
    description: "Complete solutions for individual homes with self-consumption optimization.",
    url: "/solutions/residential",
    category: "Solutions",
  },
  {
    title: "Commercial Solutions",
    description: "Optimize your roof spaces to generate green electricity.",
    url: "/solutions/commercial",
    category: "Solutions",
  },
  {
    title: "Our History",
    description: "Discover Sattel Energy's journey from its creation, from telecom integration to solar energy.",
    url: "/about/history",
    category: "About",
  },
  {
    title: "FAQ",
    description: "Find answers to the most common questions about solar energy and our services.",
    url: "/about/faq",
    category: "About",
  },
  {
    title: "Contact Us",
    description: "Our team is available to answer all your questions.",
    url: "/contact",
    category: "Contact",
  },
]

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const { language } = useLanguage()

  // Effectuer la recherche lorsque la requête change
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([])
      return
    }

    const data = language === "fr" ? searchData : searchDataEN

    // Simuler une recherche
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setResults(filtered)
  }, [searchQuery, language])

  // Réinitialiser la recherche quand le dialogue se ferme
  useEffect(() => {
    if (!open) {
      setSearchQuery("")
      setResults([])
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{getTranslation("search.title", language)}</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder={getTranslation("search.placeholder", language)}
            className="pl-10 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
              onClick={() => setSearchQuery("")}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="mt-4">
          {searchQuery && (
            <p className="text-sm text-muted-foreground mb-4">
              {results.length} {getTranslation("search.results", language)} "{searchQuery}"
            </p>
          )}

          {searchQuery && results.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                {getTranslation("search.noResults", language)} "{searchQuery}"
              </p>
            </div>
          )}

          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <Link href={result.url} onClick={() => onOpenChange(false)}>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{result.title}</h3>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {result.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{result.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
