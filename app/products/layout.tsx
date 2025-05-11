import type React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Produits | Sattel Energy",
  description: "Découvrez notre gamme complète de produits pour vos projets d'énergie solaire.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = [
    { name: "Tous les produits", href: "/products" },
    { name: "Stockage", href: "/products/stockage" },
    { name: "Batteries", href: "/products/batteries" },
    { name: "Structures", href: "/products/structures" },
    { name: "Kits", href: "/products/kits" },
    { name: "Onduleurs", href: "/products/onduleurs" },
    { name: "Monitoring Distance", href: "/products/monitoring" },
  ]

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="text-lg font-semibold mb-4">Catégories</h3>
            <nav className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <ChevronRight className="mr-2 h-4 w-4" />
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}
