import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageHeader } from "@/components/page-header"
import { ProductGrid } from "@/components/products/product-grid"
import { getProductsByCategory } from "@/data/products"

export const metadata: Metadata = {
  title: "Kits Solaires | Sattel Energy",
  description: "Découvrez nos kits solaires complets pour une installation facile et efficace.",
}

export default function KitsPage() {
  const products = getProductsByCategory("kits")

  return (
    <>
      <Breadcrumb items={[{ label: "Produits", href: "/products" }, { label: "Kits" }]} />

      <PageHeader
        title="Kits Solaires"
        description="Nos kits solaires complets vous offrent une solution clé en main pour votre transition énergétique, avec tous les composants nécessaires pour une installation réussie."
      />

      <ProductGrid products={products} category="kits" />
    </>
  )
}
