import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageHeader } from "@/components/page-header"
import { ProductGrid } from "@/components/products/product-grid"
import { getProductsByCategory } from "@/data/products"

export const metadata: Metadata = {
  title: "Onduleurs | Sattel Energy",
  description: "Découvrez nos onduleurs de qualité pour convertir l'énergie solaire en électricité utilisable.",
}

export default function OndulerursPage() {
  const products = getProductsByCategory("onduleurs")

  return (
    <>
      <Breadcrumb items={[{ label: "Produits", href: "/products" }, { label: "Onduleurs" }]} />

      <PageHeader
        title="Onduleurs"
        description="Nos onduleurs de haute qualité convertissent efficacement l'énergie solaire en électricité utilisable pour votre maison ou votre entreprise."
      />

      <ProductGrid products={products} category="onduleurs" />
    </>
  )
}
