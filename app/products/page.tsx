import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Produits | Sattel Energy",
  description: "Découvrez notre gamme complète de produits pour vos projets d'énergie solaire.",
}

export default function ProductsPage() {
  const categories = [
    {
      name: "Stockage",
      description: "Solutions de stockage d'énergie pour optimiser votre consommation",
      image: "/assets/images/products/stockage.jpg",
      href: "/products/stockage",
    },
    {
      name: "Batteries",
      description: "Batteries de haute performance pour le stockage d'énergie solaire",
      image: "/assets/images/products/batteries.jpg",
      href: "/products/batteries",
    },
    {
      name: "Structures",
      description: "Structures de montage robustes pour panneaux solaires",
      image: "/assets/images/products/structure.jpg",
      href: "/products/structures",
    },
    {
      name: "Kits",
      description: "Kits solaires complets pour une installation facile",
      image: "/assets/images/products/kits.jpg",
      href: "/products/kits",
    },
    {
      name: "Onduleurs",
      description: "Onduleurs de qualité pour convertir l'énergie solaire",
      image: "/assets/images/products/onduleurs.jpg",
      href: "/products/onduleurs",
    },
    {
      name: "Monitoring Distance",
      description: "Solutions de surveillance à distance pour vos installations",
      image: "/assets/images/products/monitoring.jpg",
      href: "/products/monitoring",
    },
  ]

  return (
    <>
      <Breadcrumb items={[{ label: "Produits" }]} />

      <PageHeader
        title="Nos Produits"
        description="Découvrez notre gamme complète de produits pour vos projets d'énergie solaire. Nous proposons des solutions adaptées à tous vos besoins énergétiques."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.href} className="overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video relative">
              <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{category.name}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={category.href}>
                  Découvrir
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}
