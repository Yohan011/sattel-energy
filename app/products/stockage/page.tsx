import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageHeader } from "@/components/page-header"
import { ProductGrid } from "@/components/products/product-grid"
import { getProductsByCategory } from "@/data/products"

export const metadata: Metadata = {
  title: "Solutions de Stockage | Sattel Energy",
  description: "Découvrez nos solutions de stockage d'énergie pour optimiser votre consommation d'énergie solaire.",
}

export default function StockagePage() {
  const products = getProductsByCategory("stockage")

  return (
    <>
      <Breadcrumb items={[{ label: "Produits", href: "/products" }, { label: "Stockage" }]} />

      <PageHeader
        title="Solutions de Stockage"
        description="Nos solutions de stockage d'énergie vous permettent d'optimiser votre consommation d'énergie solaire et de réduire votre dépendance au réseau électrique."
      />

      <ProductGrid products={products} category="stockage" />
    </>
  )
}
