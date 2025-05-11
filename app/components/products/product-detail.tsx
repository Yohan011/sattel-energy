import Image from "next/image"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import type { Product } from "@/components/products/product-grid"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="relative aspect-square">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover rounded-lg" />
      </div>
      <div>
        <Button variant="outline" size="sm" asChild className="mb-4">
          <Link href={`/products/${product.category}`}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux produits
          </Link>
        </Button>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        {product.price && (
          <p className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4">{product.price}</p>
        )}
        <div className="prose dark:prose-invert max-w-none mb-6">
          <p>{product.description}</p>
        </div>

        {product.features && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Caractéristiques principales</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="sm:flex-1">
            Demander un devis
          </Button>
          <Button variant="outline" size="lg" className="sm:flex-1">
            Télécharger la fiche technique
          </Button>
        </div>
      </div>
    </div>
  )
}
