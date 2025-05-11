"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, ArrowLeft, ArrowRight, Send, Building, Home, Factory } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import { getTranslation } from "@/lib/i18n/translations"

interface QuoteFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function QuoteForm({ open, onOpenChange }: QuoteFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: "",
    propertyType: "",
    location: "",
    needs: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const { language } = useLanguage()

  const totalSteps = 4

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission, e.g., sending data to your backend
    console.log("Form submitted:", formData)
    // Show the success message
    setStep(totalSteps + 1)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{getTranslation("quote.title", language)}</DialogTitle>
          <DialogDescription>{getTranslation("quote.subtitle", language)}</DialogDescription>
        </DialogHeader>

        {/* Progress indicator */}
        <div className="relative my-4">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 -translate-y-1/2" />
          <div className="relative flex justify-between">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-colors ${
                    idx + 1 <= step
                      ? "bg-yellow-400 text-black"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {idx + 1 < step ? <CheckCircle className="w-5 h-5" /> : idx + 1}
                </div>
                <span className="text-xs mt-1">
                  {getTranslation("quote.step", language)} {idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="py-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[300px] flex flex-col"
            >
              {step === 1 && (
                <div className="space-y-6 py-4 flex-grow">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{getTranslation("quote.projectType", language)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getTranslation("quote.projectType.subtitle", language)}
                    </p>
                  </div>

                  <Tabs
                    defaultValue={formData.projectType || "residential"}
                    className="w-full"
                    onValueChange={(value) => handleChange("projectType", value)}
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="residential" className="flex flex-col gap-2 py-3 h-auto">
                        <Home className="h-6 w-6" />
                        <span>{getTranslation("quote.projectType.residential", language)}</span>
                      </TabsTrigger>
                      <TabsTrigger value="commercial" className="flex flex-col gap-2 py-3 h-auto">
                        <Building className="h-6 w-6" />
                        <span>{getTranslation("quote.projectType.commercial", language)}</span>
                      </TabsTrigger>
                      <TabsTrigger value="industrial" className="flex flex-col gap-2 py-3 h-auto">
                        <Factory className="h-6 w-6" />
                        <span>{getTranslation("quote.projectType.industrial", language)}</span>
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="residential" className="mt-8 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="propertyType">
                          {language === "fr" ? "Type de propriété" : "Property Type"}
                        </Label>
                        <Select
                          value={formData.propertyType}
                          onValueChange={(value) => handleChange("propertyType", value)}
                        >
                          <SelectTrigger id="propertyType">
                            <SelectValue
                              placeholder={
                                language === "fr" ? "Sélectionnez le type de propriété" : "Select property type"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="house">
                              {language === "fr" ? "Maison individuelle" : "Single-family house"}
                            </SelectItem>
                            <SelectItem value="apartment">{language === "fr" ? "Appartement" : "Apartment"}</SelectItem>
                            <SelectItem value="building">{language === "fr" ? "Immeuble" : "Building"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>

                    <TabsContent value="commercial" className="mt-8 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="commercialType">
                          {language === "fr" ? "Type d'établissement" : "Establishment Type"}
                        </Label>
                        <Select
                          value={formData.propertyType}
                          onValueChange={(value) => handleChange("propertyType", value)}
                        >
                          <SelectTrigger id="commercialType">
                            <SelectValue
                              placeholder={
                                language === "fr" ? "Sélectionnez le type d'établissement" : "Select establishment type"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="office">{language === "fr" ? "Bureau" : "Office"}</SelectItem>
                            <SelectItem value="store">{language === "fr" ? "Commerce" : "Store"}</SelectItem>
                            <SelectItem value="hotel">{language === "fr" ? "Hôtel" : "Hotel"}</SelectItem>
                            <SelectItem value="school">{language === "fr" ? "École" : "School"}</SelectItem>
                            <SelectItem value="other">{language === "fr" ? "Autre" : "Other"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>

                    <TabsContent value="industrial" className="mt-8 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="industrialType">
                          {language === "fr" ? "Type d'installation" : "Installation Type"}
                        </Label>
                        <Select
                          value={formData.propertyType}
                          onValueChange={(value) => handleChange("propertyType", value)}
                        >
                          <SelectTrigger id="industrialType">
                            <SelectValue
                              placeholder={
                                language === "fr" ? "Sélectionnez le type d'installation" : "Select installation type"
                              }
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="factory">{language === "fr" ? "Usine" : "Factory"}</SelectItem>
                            <SelectItem value="warehouse">{language === "fr" ? "Entrepôt" : "Warehouse"}</SelectItem>
                            <SelectItem value="agricultural">
                              {language === "fr" ? "Exploitation agricole" : "Agricultural operation"}
                            </SelectItem>
                            <SelectItem value="other">{language === "fr" ? "Autre" : "Other"}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{getTranslation("quote.location.title", language)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getTranslation("quote.location.subtitle", language)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">
                        {language === "fr" ? "Emplacement du projet" : "Project Location"}
                      </Label>
                      <Input
                        id="location"
                        placeholder={getTranslation("quote.location.placeholder", language)}
                        value={formData.location}
                        onChange={(e) => handleChange("location", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="needs">{getTranslation("quote.location.needs", language)}</Label>
                      <Textarea
                        id="needs"
                        placeholder={getTranslation("quote.location.needs.placeholder", language)}
                        rows={4}
                        value={formData.needs}
                        onChange={(e) => handleChange("needs", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{getTranslation("quote.contact.title", language)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getTranslation("quote.contact.subtitle", language)}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{getTranslation("quote.contact.name", language)}</Label>
                      <Input
                        id="name"
                        placeholder={language === "fr" ? "Votre nom" : "Your name"}
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">{getTranslation("quote.contact.email", language)}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={language === "fr" ? "votre@email.com" : "your@email.com"}
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">{getTranslation("quote.contact.phone", language)}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">{getTranslation("quote.contact.company", language)}</Label>
                      <Input
                        id="company"
                        placeholder={language === "fr" ? "Nom de votre entreprise" : "Your company name"}
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6 py-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">{getTranslation("quote.message.title", language)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {getTranslation("quote.message.subtitle", language)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {language === "fr" ? "Message (facultatif)" : "Message (optional)"}
                      </Label>
                      <Textarea
                        id="message"
                        placeholder={getTranslation("quote.message.placeholder", language)}
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === totalSteps + 1 && (
                <div className="flex flex-col items-center justify-center py-8 space-y-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{getTranslation("quote.success.title", language)}</h3>
                  <p className="text-muted-foreground">{getTranslation("quote.success.message", language)}</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <DialogFooter className="mt-4">
          {step <= totalSteps && (
            <div className="flex justify-between w-full">
              <Button type="button" variant="outline" onClick={handlePrevious} disabled={step === 1}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                {getTranslation("quote.buttons.previous", language)}
              </Button>

              {step < totalSteps ? (
                <Button type="button" onClick={handleNext} className="group relative overflow-hidden">
                  {getTranslation("quote.buttons.next", language)}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black group relative overflow-hidden"
                >
                  {getTranslation("quote.buttons.send", language)}
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                </Button>
              )}
            </div>
          )}

          {step > totalSteps && (
            <Button type="button" onClick={() => onOpenChange(false)} className="w-full">
              {getTranslation("quote.buttons.close", language)}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
