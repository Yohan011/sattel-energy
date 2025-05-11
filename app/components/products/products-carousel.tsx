"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/i18n/language-context"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductsCarousel() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const products = [
    {
      title: language === "fr" ? "Panneaux solaires" : "Solar Panels",
      description:
        language === "fr"
          ? "Panneaux photovoltaïques de dernière génération avec rendement optimisé."
          : "Latest generation photovoltaic panels with optimized efficiency.",
      imageSrc: "/assets/images/products/panels.jpg",
      href: "/products/panels",
      category: language === "fr" ? "Panneaux" : "Panels",
    },
    {
      title: language === "fr" ? "Onduleurs intelligents" : "Smart Inverters",
      description:
        language === "fr"
          ? "Conversion DC/AC avec monitoring intégré et optimisation de la production."
          : "DC/AC conversion with integrated monitoring and production optimization.",
      imageSrc: "/assets/images/products/inverters.jpg",
      href: "/products/inverters",
      category: language === "fr" ? "Onduleurs" : "Inverters",
    },
    {
      title: language === "fr" ? "Systèmes de stockage" : "Storage Systems",
      description:
        language === "fr"
          ? "Systèmes de stockage complets pour assurer l'autonomie énergétique de votre maison."
          : "Complete storage systems to ensure energy autonomy for your home.",
      imageSrc: "/assets/images/products/stockage.jpg",
      href: "/products/stockage",
      category: language === "fr" ? "Stockage" : "Storage",
    },
    {
      title: language === "fr" ? "Batteries LiFePO4" : "LiFePO4 Batteries",
      description:
        language === "fr"
          ? "Batteries lithium-ion pour stocker votre énergie et l'utiliser quand vous en avez besoin."
          : "Lithium-ion batteries to store your energy and use it when you need it.",
      imageSrc: "/assets/images/products/monitoring.jpg",
      href: "/products/batteries",
      category: language === "fr" ? "Batteries" : "Batteries",
    },
    {
      title: language === "fr" ? "Structures de montage" : "Mounting Structures",
      description:
        language === "fr"
          ? "Solutions de montage adaptées à tous types de toits et terrains."
          : "Mounting solutions adapted to all types of roofs and terrains.",
      imageSrc: "/assets/images/products/optimizers.jpg",
      href: "/products/mounting",
      category: language === "fr" ? "Structures" : "Structures",
    },
    {
      title: language === "fr" ? "Kits solaires" : "Solar Kits",
      description:
        language === "fr"
          ? "Solutions complètes prêtes à installer pour tous vos besoins énergétiques."
          : "Complete ready-to-install solutions for all your energy needs.",
      imageSrc: "/assets/images/products/kits.jpg",
      href: "/products/kits",
      category: language === "fr" ? "Kits" : "Kits",
    },
  ]

  const visibleProducts = isMobile ? 1 : 3
  const maxIndex = products.length - visibleProducts

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleProducts)}%)`,
            width: `${(products.length / visibleProducts) * 100}%`,
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="px-2"
              style={{ width: `${100 / products.length}%`, flexShrink: 0, flexGrow: 0 }}
            >
              <ProductCard
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                href={product.href}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm z-10 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background/80 backdrop-blur-sm z-10 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}
