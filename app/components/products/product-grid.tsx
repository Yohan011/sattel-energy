import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export interface Product {
  id: string
  name: string
  description: string
  image: string
  price?: string
  category: string
  features?: string[]
}

interface ProductGridProps {
  products: Product[]
  category?: string
}

export function ProductGrid({ products, category }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden flex flex-col h-full">
          <div className="aspect-video relative">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle className="line-clamp-2">{product.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{product.description}</p>
            {product.price && <p className="mt-2 font-semibold">{product.price}</p>}
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/products/${category || product.category}/${product.id}`}>Voir les détails</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
