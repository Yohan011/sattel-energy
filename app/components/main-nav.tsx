"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

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
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MainNav() {
  return (
    <>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>À propos de nous</NavigationMenuTrigger>
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
                        Découvrez notre histoire, notre mission et notre vision pour un avenir énergétique durable.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/about/company" title="Notre entreprise">
                  Histoire, valeurs et équipe dirigeante
                </ListItem>
                <ListItem href="/about/mission" title="Mission & Vision">
                  Notre engagement pour la transition énergétique
                </ListItem>
                <ListItem href="/about/careers" title="Carrières">
                  Rejoignez notre équipe passionnée
                </ListItem>
                <ListItem href="/about/partners" title="Partenaires">
                  Nos partenaires technologiques et commerciaux
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                <li className="col-span-2">
                  <div className="mb-2 mt-4 text-xs font-semibold text-muted-foreground">PAR SECTEUR</div>
                </li>
                <ListItem href="/solutions/residential" title="Résidentiel">
                  Solutions pour maisons individuelles et copropriétés
                </ListItem>
                <ListItem href="/solutions/commercial" title="Commercial">
                  Pour entreprises, bureaux et commerces
                </ListItem>
                <ListItem href="/solutions/industrial" title="Industriel">
                  Grandes installations et micro-réseaux
                </ListItem>
                <ListItem href="/solutions/agricultural" title="Agricole">
                  Solutions adaptées au secteur agricole
                </ListItem>
                <li className="col-span-2">
                  <div className="mb-2 mt-4 text-xs font-semibold text-muted-foreground">PAR TECHNOLOGIE</div>
                </li>
                <ListItem href="/solutions/photovoltaic" title="Photovoltaïque">
                  Production d'électricité solaire
                </ListItem>
                <ListItem href="/solutions/storage" title="Stockage">
                  Solutions de batteries et gestion intelligente
                </ListItem>
                <ListItem href="/solutions/monitoring" title="Monitoring">
                  Suivi et optimisation de performance
                </ListItem>
                <ListItem href="/solutions/ev-charging" title="Recharge VE">
                  Bornes de recharge pour véhicules électriques
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Produits</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                <ListItem href="/products/panels" title="Panneaux solaires">
                  Modules photovoltaïques haute performance
                </ListItem>
                <ListItem href="/products/inverters" title="Onduleurs">
                  Conversion et optimisation de l'énergie
                </ListItem>
                <ListItem href="/products/batteries" title="Batteries">
                  Systèmes de stockage d'énergie
                </ListItem>
                <ListItem href="/products/monitoring" title="Monitoring">
                  Systèmes de suivi et de contrôle
                </ListItem>
                <ListItem href="/products/mounting" title="Structures">
                  Systèmes de montage et fixations
                </ListItem>
                <ListItem href="/products/accessories" title="Accessoires">
                  Câbles, connecteurs et composants
                </ListItem>
                <li className="col-span-2">
                  <Link
                    href="/products"
                    className="flex w-full items-center justify-center rounded-md bg-muted p-4 text-sm font-medium transition-colors hover:bg-muted/80"
                  >
                    Voir tous les produits
                    <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                  </Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/resources" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Ressources</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/clients" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Clients</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contacter</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu de navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              Sattel Energy
            </Link>
            <div className="grid gap-3">
              <Link href="/about" className="flex items-center justify-between">
                À propos de nous
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/solutions" className="flex items-center justify-between">
                Solutions
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/products" className="flex items-center justify-between">
                Produits
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/resources">Ressources</Link>
              <Link href="/clients">Clients</Link>
              <Link href="/contact">Contacter</Link>
            </div>
            <div className="grid gap-2">
              <Button className="w-full">Catalogue des produits</Button>
              <Button variant="outline" className="w-full">
                Demander un devis
              </Button>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
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
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
