"use client"

import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface NewsCardProps {
  title: string
  description: string
  date: string
  category: string
  href: string
}

export function NewsCard({ title, description, date, category, href }: NewsCardProps) {
  const { language } = useLanguage()

  return (
    <Card className="group transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{category}</Badge>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link
          href={href}
          className="inline-flex items-center text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          {language === "fr" ? "Lire la suite" : "Read more"}
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </CardFooter>
    </Card>
  )
}
