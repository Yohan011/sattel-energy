"use client"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface ProductCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
  category: string
}

export function ProductCard({ title, description, imageSrc, href, category }: ProductCardProps) {
  const { language } = useLanguage()

  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg?height=400&width=600"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <Badge variant="secondary" className="mb-3">
          {category}
        </Badge>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4">
          <Button variant="outline" size="sm" asChild>
            <Link href={href}>
              {language === "fr" ? "En savoir plus" : "Learn more"}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
