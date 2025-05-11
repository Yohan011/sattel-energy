import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageHeader } from "@/components/page-header"
import { ProductGrid } from "@/components/products/product-grid"
import { getProductsByCategory } from "@/data/products"

export const metadata: Metadata = {
  title: "Structures | Sattel Energy",
  description: "Découvrez nos structures de montage robustes pour panneaux solaires.",
}

export default function StructuresPage() {
  const products = getProductsByCategory("structures")

  return (
    <>
      <Breadcrumb items={[{ label: "Produits", href: "/products" }, { label: "Structures" }]} />

      <PageHeader
        title="Structures"
        description="Nos structures de montage robustes assurent une installation sécurisée et durable de vos panneaux solaires, adaptées à tous types de toitures et terrains."
      />

      <ProductGrid products={products} category="structures" />
    </>
  )
}
