"use client"

import React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, Search, ChevronDown, Globe, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { QuoteForm } from "@/components/quote-form"
import { SearchDialog } from "@/components/search/search-dialog"
import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslation } from "@/lib/i18n/translations"
import { useMediaQuery } from "@/hooks/use-mobile"

export function EnhancedNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchDialogOpen, setSearchDialogOpen] = useState(false)
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)
  const pathname = usePathname()
  const [mobileSubmenu, setMobileSubmenu] = useState("")
  const { language, setLanguage } = useLanguage()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [activeItem, setActiveItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Listen for the custom event to open the quote form
  useEffect(() => {
    const handleOpenQuoteForm = () => {
      setQuoteFormOpen(true)
    }

    window.addEventListener("open-quote-form", handleOpenQuoteForm)

    return () => {
      window.removeEventListener("open-quote-form", handleOpenQuoteForm)
    }
  }, [])

  const toggleSearch = () => {
    if (searchOpen) {
      setSearchOpen(false)
    } else {
      setSearchDialogOpen(true)
    }
  }

  const openQuoteForm = () => {
    setQuoteFormOpen(true)
  }

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr")
  }

  const handleMouseEnter = (item: string) => {
    setActiveItem(item)
  }

  const handleMouseLeave = () => {
    setActiveItem(null)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Sattel Energy" width={150} height={40} className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <NavigationMenuTrigger className={activeItem === "about" ? "text-yellow-500" : ""}>
                    {getTranslation("nav.about", language)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-yellow-500/50 to-yellow-500 p-6 no-underline outline-none focus:shadow-md"
                            href="/about"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">Sattel Energy</div>
                            <p className="text-sm leading-tight text-white/90">
                              {language === "fr"
                                ? "Découvrez notre histoire, notre mission et notre vision pour un avenir énergétique durable."
                                : "Discover our history, mission, and vision for a sustainable energy future."}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/about/history" title={getTranslation("about.history", language)}>
                        {language === "fr"
                          ? "Les étapes clés de notre développement"
                          : "Key milestones in our development"}
                      </ListItem>
                      <ListItem href="/about/mission" title={getTranslation("about.mission", language)}>
                        {language === "fr"
                          ? "Notre engagement pour la transition énergétique"
                          : "Our commitment to energy transition"}
                      </ListItem>
                      <ListItem href="/about/faq" title={getTranslation("about.faq", language)}>
                        {language === "fr" ? "Questions fréquemment posées" : "Frequently asked questions"}
                      </ListItem>
                      <ListItem href="/about/partners" title={getTranslation("about.partners", language)}>
                        {language === "fr"
                          ? "Nos partenaires technologiques et commerciaux"
                          : "Our technological and commercial partners"}
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <NavigationMenuTrigger className={activeItem === "solutions" ? "text-yellow-500" : ""}>
                    {getTranslation("nav.solutions", language)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                      <li className="col-span-2">
                        <div className="mb-2 mt-4 text-xs font-semibold text-muted-foreground">
                          {language === "fr" ? "PAR SECTEUR" : "BY SECTOR"}
                        </div>
                      </li>
                      <ListItem href="/solutions/residential" title={getTranslation("solutions.residential", language)}>
                        {language === "fr"
                          ? "Solutions pour maisons individuelles et copropriétés"
                          : "Solutions for individual houses and condominiums"}
                      </ListItem>
                      <ListItem href="/solutions/commercial" title={getTranslation("solutions.commercial", language)}>
                        {language === "fr"
                          ? "Pour entreprises, bureaux et commerces"
                          : "For businesses, offices, and shops"}
                      </ListItem>
                      <ListItem href="/solutions/industrial" title={getTranslation("solutions.industrial", language)}>
                        {language === "fr"
                          ? "Grandes installations et micro-réseaux"
                          : "Large installations and microgrids"}
                      </ListItem>
                      <ListItem
                        href="/solutions/agricultural"
                        title={getTranslation("solutions.agricultural", language)}
                      >
                        {language === "fr"
                          ? "Solutions adaptées au secteur agricole"
                          : "Solutions adapted to the agricultural sector"}
                      </ListItem>
                      <li className="col-span-2">
                        <div className="mb-2 mt-4 text-xs font-semibold text-muted-foreground">
                          {language === "fr" ? "PAR TECHNOLOGIE" : "BY TECHNOLOGY"}
                        </div>
                      </li>
                      <ListItem
                        href="/solutions/photovoltaic"
                        title={getTranslation("solutions.photovoltaic", language)}
                      >
                        {language === "fr" ? "Production d'électricité solaire" : "Solar electricity production"}
                      </ListItem>
                      <ListItem href="/solutions/storage" title={getTranslation("solutions.storage", language)}>
                        {language === "fr"
                          ? "Solutions de batteries et gestion intelligente"
                          : "Battery solutions and smart management"}
                      </ListItem>
                      <ListItem href="/solutions/monitoring" title={getTranslation("solutions.monitoring", language)}>
                        {language === "fr"
                          ? "Suivi et optimisation de performance"
                          : "Performance monitoring and optimization"}
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={handleMouseLeave}>
                  <Link href="/products" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} cursor-pointer ${activeItem === "products" ? "text-yellow-500" : ""}`}
                    >
                      {getTranslation("nav.products", language)}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem onMouseEnter={() => handleMouseEnter("projects")} onMouseLeave={handleMouseLeave}>
                  <Link href="/projects/gallery" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} cursor-pointer ${activeItem === "projects" ? "text-yellow-500" : ""}`}
                    >
                      {getTranslation("nav.projects", language)}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem
                  onMouseEnter={() => handleMouseEnter("configurator")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/configurator" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} cursor-pointer ${activeItem === "configurator" ? "text-yellow-500" : ""}`}
                    >
                      {language === "fr" ? "Configurateur" : "Configurator"}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem onMouseEnter={() => handleMouseEnter("contact")} onMouseLeave={handleMouseLeave}>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} cursor-pointer ${activeItem === "contact" ? "text-yellow-500" : ""}`}
                    >
                      {getTranslation("nav.contact", language)}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side items */}
            <div className="flex items-center gap-4">
              {/* Search button */}
              <Button variant="ghost" size="icon" onClick={toggleSearch} className="shrink-0">
                <Search className="h-5 w-5" />
                <span className="sr-only">{getTranslation("nav.search", language)}</span>
              </Button>

              {/* Theme toggle */}
              <ThemeToggle />

              {/* Language toggle */}
              <Button variant="outline" size="sm" onClick={toggleLanguage} className="hidden md:flex">
                <Globe className="h-4 w-4 mr-1" />
                {language.toUpperCase()}
              </Button>

              <Button onClick={openQuoteForm} className="hidden md:inline-flex group relative overflow-hidden">
                {getTranslation("nav.quote", language)}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
              </Button>

              {/* Mobile menu button */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Menu de navigation</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[85%] sm:w-[350px] p-0">
                  <nav className="grid gap-6 text-lg font-medium h-full overflow-y-auto">
                    <div className="p-6 border-b">
                      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                        <Image
                          src="/images/logo.png"
                          alt="Sattel Energy"
                          width={100}
                          height={30}
                          className="h-8 w-auto"
                        />
                      </Link>
                    </div>

                    <div className="px-6">
                      <div className="flex items-center gap-2 mb-6">
                        <Button variant="outline" size="sm" onClick={toggleLanguage} className="flex-1">
                          <Globe className="h-4 w-4 mr-1" />
                          {language.toUpperCase()}
                        </Button>
                        <ThemeToggle />
                      </div>

                      <div className="relative mb-6">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                          type="search"
                          placeholder={getTranslation("nav.search", language)}
                          className="w-full pl-8"
                          onClick={() => setSearchDialogOpen(true)}
                          readOnly
                        />
                      </div>

                      {/* Mobile Navigation - Full menu with all items */}
                      <div className="space-y-1">
                        <Link
                          href="/"
                          className="block py-3 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-4 hover:text-yellow-500 dark:hover:text-yellow-400"
                        >
                          {language === "fr" ? "Accueil" : "Home"}
                        </Link>

                        <div className="py-2">
                          <button
                            onClick={() => setMobileSubmenu(mobileSubmenu === "about" ? "" : "about")}
                            className="flex w-full items-center justify-between py-3 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-4 hover:text-yellow-500 dark:hover:text-yellow-400"
                          >
                            {getTranslation("nav.about", language)}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${mobileSubmenu === "about" ? "rotate-180" : ""}`}
                            />
                          </button>
                          {mobileSubmenu === "about" && (
                            <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                              <Link
                                href="/about"
                                className="block py-2 px-3 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-5 hover:text-yellow-500 dark:hover:text-yellow-400"
                              >
                                Sattel Energy
                              </Link>
                              <Link
                                href="/about/history"
                                className="block py-2 px-3 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-5 hover:text-yellow-500 dark:hover:text-yellow-400"
                              >
                                {getTranslation("about.history", language)}
                              </Link>
                              <Link
                                href="/about/mission"
                                className="block py-2 px-3 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-5 hover:text-yellow-500 dark:hover:text-yellow-400"
                              >
                                {getTranslation("about.mission", language)}
                              </Link>
                              <Link
                                href="/about/faq"
                                className="block py-2 px-3 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-5 hover:text-yellow-500 dark:hover:text-yellow-400"
                              >
                                {getTranslation("about.faq", language)}
                              </Link>
                            </div>
                          )}
                        </div>

                        <div className="py-2">
                          <button
                            onClick={() => setMobileSubmenu(mobileSubmenu === "solutions" ? "" : "solutions")}
                            className="flex w-full items-center justify-between py-3 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-4 hover:text-yellow-500 dark:hover:text-yellow-400"
                          >
                            {getTranslation("nav.solutions", language)}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${mobileSubmenu === "solutions" ? "rotate-180" : ""}`}
                            />
                          </button>
                          {mobileSubmenu === "solutions" && (
                            <div className="ml-4 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                              <Link
                                href="/solutions/residential"
                                className="block py-2 px-3 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-5 hover:text-yellow-500 dark:hover:text-yellow-400"
                              >
                                {getTranslation("solutions.residential", language)}
                              </Link>
                              <Link
                                href="/solutions/commercial"
                                className="block py-2 px-3 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-5 hover:text-yellow-500 dark:hover:text-yellow-400"
                              >
                                {getTranslation("solutions.commercial", language)}
                              </Link>
                              <Link
                                href="/solutions/industrial"
                                className="block py-2 px-3 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-5 hover:text-yellow-500 dark:hover:text-yellow-400"
                              >
                                {getTranslation("solutions.industrial", language)}
                              </Link>
                            </div>
                          )}
                        </div>

                        <Link
                          href="/products"
                          className="block py-3 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-4 hover:text-yellow-500 dark:hover:text-yellow-400"
                        >
                          {getTranslation("nav.products", language)}
                        </Link>

                        <Link
                          href="/projects/gallery"
                          className="block py-3 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-4 hover:text-yellow-500 dark:hover:text-yellow-400"
                        >
                          {getTranslation("nav.projects", language)}
                        </Link>

                        <Link
                          href="/configurator"
                          className="block py-3 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-4 hover:text-yellow-500 dark:hover:text-yellow-400"
                        >
                          {language === "fr" ? "Configurateur" : "Configurator"}
                        </Link>

                        <Link
                          href="/contact"
                          className="block py-3 px-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:pl-4 hover:text-yellow-500 dark:hover:text-yellow-400"
                        >
                          {getTranslation("nav.contact", language)}
                        </Link>
                      </div>
                    </div>

                    <div className="mt-auto p-6 border-t">
                      <Button onClick={openQuoteForm} className="w-full group relative overflow-hidden">
                        {getTranslation("nav.quote", language)}
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Search Dialog */}
      <SearchDialog open={searchDialogOpen} onOpenChange={setSearchDialogOpen} />

      {/* Quote Form Dialog */}
      {quoteFormOpen && <QuoteForm open={quoteFormOpen} onOpenChange={setQuoteFormOpen} />}
    </>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground relative group",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none group-hover:text-yellow-500 transition-colors duration-200">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">
              {children}
            </p>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
