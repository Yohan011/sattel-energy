"use client"

import type React from "react"
import Link from "next/link"
import { Battery, Building, Cog, Factory, Home, Key, LineChart, Network, ParkingSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"

interface SolutionCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export function SolutionCard({ title, description, icon, href }: SolutionCardProps) {
  const IconComponent = getIcon(icon)
  const { language } = useLanguage()

  return (
    <Card className="group transition-all hover:shadow-md">
      <CardHeader>
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/20">
          <IconComponent className="h-5 w-5 text-yellow-600" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="ghost" size="sm" className="group-hover:bg-yellow-400/10" asChild>
          <Link href={href}>
            {language === "fr" ? "En savoir plus" : "Learn more"}
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function getIcon(name: string) {
  const icons: Record<string, React.ComponentType<any>> = {
    Home,
    Battery,
    LineChart,
    Building,
    ParkingSquare,
    Key,
    Factory,
    Network,
    Cog,
  }

  return icons[name] || Home
}
