import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageHeader } from "@/components/page-header"
import { ProductGrid } from "@/components/products/product-grid"
import { getProductsByCategory } from "@/data/products"

export const metadata: Metadata = {
  title: "Monitoring Distance | Sattel Energy",
  description: "Découvrez nos solutions de surveillance à distance pour vos installations solaires.",
}

export default function MonitoringPage() {
  const products = getProductsByCategory("monitoring")

  return (
    <>
      <Breadcrumb items={[{ label: "Produits", href: "/products" }, { label: "Monitoring Distance" }]} />

      <PageHeader
        title="Monitoring Distance"
        description="Nos solutions de surveillance à distance vous permettent de suivre les performances de votre installation solaire en temps réel et d'optimiser votre production d'énergie."
      />

      <ProductGrid products={products} category="monitoring" />
    </>
  )
}
