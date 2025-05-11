"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/lib/i18n/language-context"
import { Translate } from "@/components/translate"

export function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-muted">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.png" alt="Sattel Energy" width={150} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground">
              <Translate text="footer.description" />
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              <Translate text="footer.quickLinks" />
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  <span>
                    <Translate text="nav.about" />
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  <span>
                    <Translate text="nav.solutions" />
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  <span>
                    <Translate text="nav.products" />
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/gallery"
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  <span>
                    <Translate text="nav.projects" />
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/configurator"
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  <span>{language === "fr" ? "Configurateur" : "Configurator"}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  <span>
                    <Translate text="nav.contact" />
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about/partners"
                  className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
                >
                  <span>{language === "fr" ? "Nos Partenaires" : "Our Partners"}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              <Translate text="footer.contact" />
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>225 Avenue Kalembelembe, Quartier Lingwala, Kinshasa, République Démocratique du Congo</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+243 992 190 518</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@sattelenergy.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              <Translate text="footer.newsletter" />
            </h3>
            <p className="mb-4 text-muted-foreground">
              {language === "fr"
                ? "Inscrivez-vous pour recevoir nos dernières actualités et offres."
                : "Subscribe to receive our latest news and offers."}
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder={language === "fr" ? "Votre email" : "Your email"} />
              <Button type="submit" className="w-full">
                <Translate text="footer.newsletter.cta" />
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Sattel Energy. <Translate text="footer.rights" />
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
              >
                <span>
                  <Translate text="footer.privacy" />
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/terms"
                className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
              >
                <span>
                  <Translate text="footer.terms" />
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/cookies"
                className="hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200 relative group"
              >
                <span>
                  <Translate text="footer.cookies" />
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
