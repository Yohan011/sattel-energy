"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Building,
  CheckCircle,
  FileText,
  Globe,
  Handshake,
  Send,
  Upload,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import ScrollAnimation from "@/components/scroll-animation-provider"
import SectionHeading from "@/components/section-heading"
import { motion } from "framer-motion"

export default function PartnershipRequestPage() {
  const [formStep, setFormStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1500)
  }

  const nextStep = () => {
    if (formStep < 4) {
      setFormStep(formStep + 1)
    }
  }

  const prevStep = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1)
    }
  }

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-yellow-400/20 to-transparent">
        <div className="container">
          <div className="flex flex-col items-center">
            <Link
              href="/about/partners"
              className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à la page Partenaires
            </Link>

            <ScrollAnimation>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-3 bg-yellow-400/20 rounded-full mb-4">
                  <Handshake className="h-8 w-8 text-yellow-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Devenir Partenaire</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Rejoignez notre réseau de partenaires stratégiques et contribuez à la transition énergétique en Afrique.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Pourquoi devenir partenaire?"
              description="SATTEL Energy offre de nombreux avantages à ses partenaires pour développer ensemble des solutions énergétiques durables."
              centered
            />
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <ScrollAnimation direction="up" delay={0.1}>
              <Card className="bg-white dark:bg-gray-800 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Accès au marché africain</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bénéficiez de notre expertise locale et de notre réseau établi pour développer votre présence en Afrique.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.2}>
              <Card className="bg-white dark:bg-gray-800 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Projets d'envergure</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Participez à des projets d'électrification à grande échelle avec un impact social et environnemental significatif.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation direction="up" delay={0.3}>
              <Card className="bg-white dark:bg-gray-800 border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center mb-4">
                    <Handshake className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Collaboration stratégique</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Développez des solutions innovantes adaptées aux besoins spécifiques du marché africain.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-12 md:py-24">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Formulaire de demande de partenariat"
              description="Complétez le formulaire ci-dessous pour nous faire part de votre intérêt à devenir partenaire de SATTEL Energy."
              centered
            />
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto mt-8">
            <ScrollAnimation>
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Demande envoyée avec succès!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Merci pour votre intérêt à devenir partenaire de SATTEL Energy. Notre équipe examinera votre demande et vous contactera dans les plus brefs délais.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link href="/about/partners">Retour à la page Partenaires</Link>
                    </Button>
                    <Button variant="outline" onClick={() => {
                      setFormSubmitted(false)
                      setFormStep(1)
                    }}>
                      Soumettre une autre demande
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                  {/* Progress Steps */}
                  <div className="bg-gray-50 dark:bg-gray-900/50 p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between">
                      {[1, 2, 3, 4].map((step) => (
                        <div key={step} className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              step === formStep
                                ? "bg-yellow-400 text-black"
                                : step < formStep
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                            }`}
                          >
                            {step < formStep ? <CheckCircle className="h-4 w-4" /> : step}
                          </div>
                          <span className="text-xs mt-1 hidden sm:block">
                            {step === 1
                              ? "Informations entreprise"
                              : step === 2
                              ? "Contact principal"
                              : step === 3
                              ? "Type de partenariat"
                              : "Finalisation"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6">
                    {/* Step 1: Company Information */}
                    {formStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-xl font-semibold mb-4">Informations sur votre entreprise</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="companyName">Nom de l'entreprise *</Label>
                            <Input
                              id="companyName"
                              placeholder="Nom légal complet de votre entreprise"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="industry">Secteur d'activité *</Label>
                            <Select required>
                              <SelectTrigger id="industry">
                                <SelectValue placeholder="Sélectionnez votre secteur" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="energy">Énergie</SelectItem>
                                <SelectItem value="solar">Solaire photovoltaïque</SelectItem>
                                <SelectItem value="manufacturing">Fabrication d'équipements</SelectItem>
                                <SelectItem value="distribution">Distribution</SelectItem>
                                <SelectItem value="installation">Installation</SelectItem>
                                <SelectItem value="finance">Finance / Investissement</SelectItem>
                                <SelectItem value="consulting">Conseil</SelectItem>
                                <SelectItem value="other">Autre</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="companySize">Taille de l'entreprise *</Label>
                            <Select required>
                              <SelectTrigger id="companySize">
                                <SelectValue placeholder="Nombre d'employés" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1-10">1-10 employés</SelectItem>
                                <SelectItem value="11-50">11-50 employés</SelectItem>
                                <SelectItem value="51-200">51-200 employés</SelectItem>
                                <SelectItem value="201-500">201-500 employés</SelectItem>
                                <SelectItem value="501+">Plus de 500 employés</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="foundedYear">Année de création</Label>
                            <Input
                              id="foundedYear"
                              type="number"
                              placeholder="Ex: 2010"
                              min="1900"
                              max={new Date().getFullYear()}
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="website">Site web</Label>
                          <Input id="website" type="url" placeholder="https://www.votreentreprise.com" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="companyDescription">Description de votre entreprise *</Label>
                          <Textarea
                            id="companyDescription"
                            placeholder="Décrivez brièvement votre entreprise, ses activités principales et son expertise"
                            rows={4}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="operatingCountries">Pays d'opération *</Label>
                          <Textarea
                            id="operatingCountries"
                            placeholder="Listez les pays où votre entreprise opère actuellement"
                            rows={2}
                            required
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Primary Contact */}
                    {formStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-xl font-semibold mb-4">Contact principal</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="contactFirstName">Prénom *</Label>
                            <Input id="contactFirstName" placeholder="Prénom" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="contactLastName">Nom *</Label>
                            <Input id="contactLastName" placeholder="Nom" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="contactPosition">Poste / Fonction *</Label>
                            <Input id="contactPosition" placeholder="Ex: Directeur Commercial" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="contactEmail">Email professionnel *</Label>
                            <Input id="contactEmail" type="email" placeholder="email@entreprise.com" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="contactPhone">Téléphone *</Label>
                            <Input id="contactPhone" type="tel" placeholder="+33 1 23 45 67 89" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="contactLanguage">Langue de communication préférée</Label>
                            <Select>
                              <SelectTrigger id="contactLanguage">
                                <SelectValue placeholder="Sélectionnez une langue" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="french">Français</SelectItem>
                                <SelectItem value="english">Anglais</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="alternateContact">Contact alternatif (optionnel)</Label>
                          <Textarea
                            id="alternateContact"
                            placeholder="Nom, fonction, email et téléphone d'une personne alternative à contacter si nécessaire"
                            rows={3}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Partnership Type */}
                    {formStep === 3 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-xl font-semibold mb-4">Type de partenariat</h3>

                        <div className="space-y-4">
                          <Label>Type de partenariat souhaité *</Label>
                          <RadioGroup defaultValue="technical" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                              <RadioGroupItem value="technical" id="technical" />
                              <Label htmlFor="technical" className="font-medium cursor-pointer">
                                Partenaire technique / Fournisseur
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                              <RadioGroupItem value="distribution" id="distribution" />
                              <Label htmlFor="distribution" className="font-medium cursor-pointer">
                                Partenaire de distribution
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                              <RadioGroupItem value="financial" id="financial" />
                              <Label htmlFor="financial" className="font-medium cursor-pointer">
                                Partenaire financier / Investisseur
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                              <RadioGroupItem value="strategic" id="strategic" />
                              <Label htmlFor="strategic" className="font-medium cursor-pointer">
                                Partenaire stratégique
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                              <RadioGroupItem value="installation" id="installation" />
                              <Label htmlFor="installation" className="font-medium cursor-pointer">
                                Partenaire d'installation
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other" className="font-medium cursor-pointer">
                                Autre type de partenariat
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="partnershipDetails">Détails du partenariat envisagé *</Label>
                          <Textarea
                            id="partnershipDetails"
                            placeholder="Décrivez en détail le type de partenariat que vous souhaitez établir avec SATTEL Energy"
                            rows={4}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="valueProposition">Proposition de valeur *</Label>
                          <Textarea
                            id="valueProposition"
                            placeholder="Expliquez comment votre entreprise peut apporter de la valeur à SATTEL Energy et contribuer à sa mission"
                            rows={4}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="expectations">Attentes et objectifs *</Label>
                          <Textarea
                            id="expectations"
                            placeholder="Quels sont vos objectifs et attentes concernant ce partenariat?"
                            rows={3}
                            required
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* Step 4: Additional Information */}
                    {formStep === 4 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3 className="text-xl font-semibold mb-4">Informations complémentaires</h3>

                        <div className="space-y-2">
                          <Label htmlFor="references">Références (optionnel)</Label>
                          <Textarea
                            id="references"
                            placeholder="Mentionnez des projets similaires ou des partenariats existants pertinents"
                            rows={3}
                          />
                        </div>

                        <div className="space-y-4">
                          <Label>Documents complémentaires (optionnel)</Label>
                          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                            <Input
                              id="file"
                              type="file"
                              className="hidden"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx,.ppt,.pptx"
                            />
                            <Label htmlFor="file" className="cursor-pointer flex flex-col items-center">
                              <Upload className="h-10 w-10 text-gray-400 mb-2" />
                              <span className="text-sm font-medium mb-1">
                                {selectedFile ? selectedFile.name : "Cliquez pour télécharger un document"}
                              </span>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                PDF, Word ou PowerPoint (max 10MB)
                              </span>
                            </Label>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="additionalInfo">Informations supplémentaires (optionnel)</Label>
                          <Textarea
                            id="additionalInfo"
                            placeholder="Toute autre information que vous souhaitez partager avec nous"
                            rows={3}
                          />
                        </div>

                        <div className="flex items-start space-x-2 pt-4">
                          <Checkbox id="terms" required />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="terms"
                              className="text-sm font-normal leading-snug text-muted-foreground"
                            >
                              J'accepte que SATTEL Energy traite mes données personnelles conformément à sa politique de
                              confidentialité pour traiter ma demande de partenariat. *
                            </Label>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="newsletter" />
                          <div className="grid gap-1.5 leading-none">
                            <Label
                              htmlFor="newsletter"
                              className="text-sm font-normal leading-snug text-muted-foreground"
                            >
                              Je souhaite recevoir des informations sur les actualités et opportunités de SATTEL Energy.
                            </Label>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div className="flex justify-between mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                      <Button type="button" variant="outline" onClick={prevStep} disabled={formStep === 1}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Précédent
                      </Button>

                      {formStep < 4 ? (
                        <Button type="button" onClick={nextStep}>
                          Suivant
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      ) : (
                        <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-black">
                          Soumettre la demande
                          <Send className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </form>
                </div>
              )}
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container">
          <ScrollAnimation>
            <SectionHeading
              title="Processus de partenariat"
              description="Voici les étapes pour devenir partenaire de SATTEL Energy"
              centered
            />
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto mt-8">
            <ScrollAnimation>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[21px] top-10 bottom-10 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center z-10">
                      <FileText className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">1. Soumission de la demande</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Remplissez le formulaire de demande de partenariat avec toutes les informations pertinentes sur
                        votre entreprise et le type de partenariat souhaité.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center z-10">
                      <User className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">2. Évaluation initiale</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Notre équipe examine votre demande et évalue l'adéquation potentielle avec notre stratégie et nos
                        besoins. Cette étape prend généralement 1 à 2 semaines.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center z-10">
                      <Building className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">3. Discussion approfondie</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Si votre demande est retenue, nous organisons une réunion pour discuter plus en détail de votre
                        proposition et explorer les possibilités de collaboration.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center z-10">
                      <Handshake className="h-5 w-5 text-black" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">4. Formalisation du partenariat</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Si les discussions sont concluantes, nous établissons un accord
\
