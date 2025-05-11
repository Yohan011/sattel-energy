"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, ArrowRight, Send, MessageSquare, CheckCircle, ChevronRight } from "lucide-react"
import Link from "next/link"
import ScrollAnimation from "@/components/scroll-animation-provider"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/i18n/language-context"
import Image from "next/image"

export default function ContactPage() {
  const { language } = useLanguage()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  const openQuoteForm = () => {
    window.location.href = "/quote"
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white dark:from-yellow-900/10 dark:to-gray-900 py-16 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">
                {language === "fr" ? "Commençons votre voyage solaire !" : "Let's start your solar journey!"}
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                {language === "fr"
                  ? "Notre équipe est prête à vous accompagner dans votre transition vers l'énergie solaire. Contactez-nous dès aujourd'hui pour discuter de votre projet."
                  : "Our team is ready to accompany you in your transition to solar energy. Contact us today to discuss your project."}
              </p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-yellow-400 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <ScrollAnimation direction="up" delay={0.1}>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5 text-yellow-500" />
                  {language === "fr" ? "Nos coordonnées" : "Our contact details"}
                </h2>
                <div className="space-y-6">
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                          <MapPin className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{language === "fr" ? "Adresse" : "Address"}</h3>
                          <p className="text-muted-foreground mt-1">225 Avenue Kalembelembe, Quartier Lingwala, Kinshasa, République Démocratique du Congo</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                          <Phone className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{language === "fr" ? "Téléphone" : "Phone"}</h3>
                          <p className="text-muted-foreground mt-1">+243 992 190 518</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                          <Mail className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p className="text-muted-foreground mt-1">info@sattelenergy.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400/20">
                          <Clock className="h-5 w-5 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            {language === "fr" ? "Horaires d'ouverture" : "Opening hours"}
                          </h3>
                          <p className="text-muted-foreground mt-1">
                            {language === "fr"
                              ? "Lundi - Vendredi: 9h00 - 18h00"
                              : "Monday - Friday: 9:00 AM - 6:00 PM"}
                          </p>
                          <p className="text-muted-foreground">
                            {language === "fr" ? "Samedi - Dimanche: Fermé" : "Saturday - Sunday: Closed"}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollAnimation>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <ScrollAnimation direction="up" delay={0.3}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Send className="mr-2 h-5 w-5 text-yellow-500" />
                    {language === "fr" ? "Envoyez-nous un message" : "Send us a message"}
                  </h2>

                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-12"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {language === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!"}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {language === "fr"
                          ? "Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais."
                          : "Thank you for contacting us. Our team will get back to you as soon as possible."}
                      </p>
                      <Button onClick={() => setFormSubmitted(false)}>
                        {language === "fr" ? "Envoyer un autre message" : "Send another message"}
                      </Button>
                    </motion.div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">{language === "fr" ? "Nom complet" : "Full name"}</Label>
                          <Input
                            id="name"
                            placeholder={language === "fr" ? "Votre nom" : "Your name"}
                            className="border-gray-200 dark:border-gray-700 focus:border-yellow-500 focus:ring-yellow-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder={language === "fr" ? "votre@email.com" : "your@email.com"}
                            className="border-gray-200 dark:border-gray-700 focus:border-yellow-500 focus:ring-yellow-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">{language === "fr" ? "Téléphone" : "Phone"}</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+33 6 12 34 56 78"
                            className="border-gray-200 dark:border-gray-700 focus:border-yellow-500 focus:ring-yellow-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="userType">{language === "fr" ? "Qui êtes-vous ?" : "Who are you?"}</Label>
                          <Select>
                            <SelectTrigger
                              id="userType"
                              className="border-gray-200 dark:border-gray-700 focus:border-yellow-500 focus:ring-yellow-500"
                            >
                              <SelectValue
                                placeholder={language === "fr" ? "Sélectionnez une option" : "Select an option"}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="distribution">
                                {language === "fr" ? "Entreprise de distribution" : "Distribution company"}
                              </SelectItem>
                              <SelectItem value="professional">
                                {language === "fr" ? "Client professionnel" : "Professional client"}
                              </SelectItem>
                              <SelectItem value="government">
                                {language === "fr" ? "Institution gouvernementale" : "Government institution"}
                              </SelectItem>
                              <SelectItem value="residential">
                                {language === "fr" ? "Client résidentiel" : "Residential client"}
                              </SelectItem>
                              <SelectItem value="other">{language === "fr" ? "Autres" : "Other"}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">{language === "fr" ? "Sujet" : "Subject"}</Label>
                        <Input
                          id="subject"
                          placeholder={language === "fr" ? "Sujet de votre message" : "Subject of your message"}
                          className="border-gray-200 dark:border-gray-700 focus:border-yellow-500 focus:ring-yellow-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{language === "fr" ? "Message" : "Message"}</Label>
                        <Textarea
                          id="message"
                          placeholder={language === "fr" ? "Votre message" : "Your message"}
                          rows={6}
                          className="border-gray-200 dark:border-gray-700 focus:border-yellow-500 focus:ring-yellow-500"
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          className="group relative overflow-hidden w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-black"
                        >
                          {language === "fr" ? "Envoyer le message" : "Send message"}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-400/90 to-yellow-500/90 text-black relative overflow-hidden">
        <div className="absolute inset-0 bg-opacity-50 z-0">
          <Image
            src="/assets/images/solar-panels-bg.jpg"
            alt="Solar panels background"
            fill
            className="object-cover mix-blend-overlay opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "fr" ? "Prêt à passer à l'énergie solaire?" : "Ready to switch to solar energy?"}
            </h2>
            <p className="text-lg mb-8 text-black/80">
              {language === "fr"
                ? "Nos experts sont à votre disposition pour vous accompagner dans votre projet d'énergie solaire."
                : "Our experts are at your disposal to accompany you in your solar energy project."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openQuoteForm}
                className="group relative overflow-hidden inline-block px-6 py-3 text-white bg-black rounded-md hover:bg-black/90 transition-colors"
              >
                {language === "fr" ? "Demander un devis" : "Request a quote"}
                <ChevronRight className="inline-block ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
              </button>
              <Link
                href="/contact"
                className="group relative overflow-hidden inline-block px-6 py-3 text-black border-2 border-black rounded-md hover:bg-black/5 transition-colors"
              >
                {language === "fr" ? "Nous contacter" : "Contact us"}
                <ChevronRight className="inline-block ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-200 dark:bg-gray-700 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">
            {language === "fr" ? "Carte interactive ici" : "Interactive map here"}
          </p>
        </div>
      </section>
    </main>
  )
}
