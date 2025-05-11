import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProductDetail } from "@/components/products/product-detail"
import { getProductById } from "@/data/products"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface ProductPageProps {
  params: {
    category: string
    id: string
  }
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductById(params.id)

  if (!product) {
    return {
      title: "Produit non trouvé | Sattel Energy",
    }
  }

  return {
    title: `${product.name} | Sattel Energy`,
    description: product.description,
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  // Format the category name for display
  const categoryNames: Record<string, string> = {
    stockage: "Stockage",
    batteries: "Batteries",
    structures: "Structures",
    kits: "Kits",
    onduleurs: "Onduleurs",
    monitoring: "Monitoring Distance",
  }

  const categoryName = categoryNames[params.category] || params.category

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Produits", href: "/products" },
          { label: categoryName, href: `/products/${params.category}` },
          { label: product.name },
        ]}
      />

      <ProductDetail product={product} />

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button asChild className="group relative overflow-hidden">
          <Link href="/contact">
            Contactez-nous
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
          </Link>
        </Button>
        <Button variant="outline" asChild className="group relative overflow-hidden">
          <Link href="/products">
            Explorer d'autres produits
            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
          </Link>
        </Button>
      </div>
    </>
  )
}
