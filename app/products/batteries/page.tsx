import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageHeader } from "@/components/page-header"
import { ProductGrid } from "@/components/products/product-grid"
import { getProductsByCategory } from "@/data/products"

export const metadata: Metadata = {
  title: "Batteries | Sattel Energy",
  description: "Découvrez nos batteries de haute performance pour le stockage d'énergie solaire.",
}

export default function BatteriesPage() {
  const products = getProductsByCategory("batteries")

  return (
    <>
      <Breadcrumb items={[{ label: "Produits", href: "/products" }, { label: "Batteries" }]} />

      <PageHeader
        title="Batteries"
        description="Nos batteries de haute performance vous offrent une solution fiable pour stocker l'énergie solaire produite et l'utiliser quand vous en avez besoin."
      />

      <ProductGrid products={products} category="batteries" />
    </>
  )
}
