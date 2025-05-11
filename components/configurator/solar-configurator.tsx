"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"
import { useLanguage } from "@/lib/i18n/language-context"
import {
  Home,
  Building,
  Factory,
  Sun,
  Zap,
  Euro,
  Download,
  Share2,
  Calculator,
  BarChart3,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

// Types
type InstallationType = "residential" | "commercial" | "industrial"
type RoofType = "flat" | "sloped" | "ground"
type Orientation = "north" | "east" | "south" | "west"

interface ConfiguratorState {
  installationType: InstallationType
  roofType: RoofType
  roofArea: number
  orientation: Orientation
  annualConsumption: number
  budget: number
  batteryStorage: boolean
}

// Default values
const defaultState: ConfiguratorState = {
  installationType: "residential",
  roofType: "sloped",
  roofArea: 30,
  orientation: "south",
  annualConsumption: 5000,
  budget: 15000,
  batteryStorage: false,
}

// Calculation constants
const EFFICIENCY_FACTOR = {
  residential: 0.85,
  commercial: 0.9,
  industrial: 0.92,
}

const ORIENTATION_FACTOR = {
  north: 0.7,
  east: 0.8,
  south: 1.0,
  west: 0.8,
}

const ROOF_TYPE_FACTOR = {
  flat: 0.95,
  sloped: 1.0,
  ground: 0.98,
}

const KWH_PER_SQM_PER_YEAR = 180 // Average solar production per square meter in Europe

export default function SolarConfigurator() {
  const [state, setState] = useState<ConfiguratorState>(defaultState)
  const [currentStep, setCurrentStep] = useState(1)
  const [results, setResults] = useState<{
    systemSize: number
    annualProduction: number
    savings: number
    co2Reduction: number
    roi: number
    installationCost: number
  } | null>(null)
  const { toast } = useToast()
  const { language } = useLanguage()

  const totalSteps = 4

  // Calculate results when state changes
  useEffect(() => {
    if (currentStep === totalSteps) {
      calculateResults()
    }
  }, [currentStep, state])

  const calculateResults = () => {
    // Calculate system size in kWp
    const systemSize = (state.roofArea * ROOF_TYPE_FACTOR[state.roofType] * ORIENTATION_FACTOR[state.orientation]) / 6.5 // 6.5 sqm per kWp

    // Calculate annual production in kWh
    const annualProduction =
      systemSize *
      KWH_PER_SQM_PER_YEAR *
      EFFICIENCY_FACTOR[state.installationType] *
      ORIENTATION_FACTOR[state.orientation]

    // Calculate installation cost
    const baseCost = systemSize * 1200 // Base cost per kWp
    const batteryAdditionalCost = state.batteryStorage ? systemSize * 600 : 0 // Additional cost for battery
    const installationCost = baseCost + batteryAdditionalCost

    // Calculate annual savings (assuming €0.25 per kWh)
    const annualSavings = Math.min(annualProduction, state.annualConsumption) * 0.25

    // Calculate ROI in years
    const roi = installationCost / annualSavings

    // Calculate CO2 reduction (assuming 0.4 kg CO2 per kWh)
    const co2Reduction = annualProduction * 0.4

    setResults({
      systemSize: Number.parseFloat(systemSize.toFixed(2)),
      annualProduction: Math.round(annualProduction),
      savings: Math.round(annualSavings),
      co2Reduction: Math.round(co2Reduction),
      roi: Number.parseFloat(roi.toFixed(1)),
      installationCost: Math.round(installationCost),
    })
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleChange = <K extends keyof ConfiguratorState>(key: K, value: ConfiguratorState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }))
  }

  const handleReset = () => {
    setState(defaultState)
    setCurrentStep(1)
    setResults(null)
  }

  const handleSaveResults = () => {
    toast({
      title: language === "fr" ? "Configuration enregistrée" : "Configuration saved",
      description:
        language === "fr"
          ? "Votre configuration a été enregistrée. Nous vous contacterons bientôt."
          : "Your configuration has been saved. We will contact you soon.",
    })
  }

  // Step titles
  const stepTitles = [
    language === "fr" ? "Type d'installation" : "Installation Type",
    language === "fr" ? "Surface disponible" : "Available Area",
    language === "fr" ? "Consommation et budget" : "Consumption and Budget",
    language === "fr" ? "Résultats de la simulation" : "Simulation Results",
  ]

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600">
            {language === "fr" ? "Configurateur Solaire" : "Solar Configurator"}
          </h2>
          <p className="text-muted-foreground">
            {language === "fr"
              ? "Estimez votre installation solaire idéale en quelques étapes simples"
              : "Estimate your ideal solar installation in a few simple steps"}
          </p>
        </div>

        {/* Progress bar and steps */}
        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm">
            <span>
              {language === "fr" ? "Étape" : "Step"} {currentStep} {language === "fr" ? "sur" : "of"} {totalSteps}
            </span>
            <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
          </div>
          <Progress value={(currentStep / totalSteps) * 100} className="h-2 bg-gray-200 dark:bg-gray-700" />

          {/* Step indicators */}
          <div className="flex justify-between mt-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex flex-col items-center" style={{ width: `${100 / totalSteps}%` }}>
                <div
                  className={`w-4 h-4 rounded-full ${
                    index + 1 === currentStep
                      ? "bg-yellow-400"
                      : index + 1 < currentStep
                        ? "bg-green-500"
                        : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
                <span className="text-xs mt-1 text-center hidden md:block">{stepTitles[index]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  {language === "fr" ? "Type d'installation" : "Installation Type"}
                </h3>
                <Tabs
                  defaultValue={state.installationType}
                  onValueChange={(value) => handleChange("installationType", value as InstallationType)}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-3 mb-8 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
                    <TabsTrigger
                      value="residential"
                      className="flex flex-col gap-2 py-3 h-auto data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-md"
                    >
                      <Home className="h-6 w-6" />
                      <span>{language === "fr" ? "Résidentiel" : "Residential"}</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="commercial"
                      className="flex flex-col gap-2 py-3 h-auto data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-md"
                    >
                      <Building className="h-6 w-6" />
                      <span>{language === "fr" ? "Commercial" : "Commercial"}</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="industrial"
                      className="flex flex-col gap-2 py-3 h-auto data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 rounded-md"
                    >
                      <Factory className="h-6 w-6" />
                      <span>{language === "fr" ? "Industriel" : "Industrial"}</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="residential">
                    <p className="text-muted-foreground mb-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      {language === "fr"
                        ? "Solutions pour maisons individuelles et petits bâtiments."
                        : "Solutions for individual houses and small buildings."}
                    </p>
                  </TabsContent>
                  <TabsContent value="commercial">
                    <p className="text-muted-foreground mb-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      {language === "fr"
                        ? "Solutions pour entreprises, bureaux et commerces."
                        : "Solutions for businesses, offices, and shops."}
                    </p>
                  </TabsContent>
                  <TabsContent value="industrial">
                    <p className="text-muted-foreground mb-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      {language === "fr"
                        ? "Solutions pour grandes installations et sites industriels."
                        : "Solutions for large installations and industrial sites."}
                    </p>
                  </TabsContent>
                </Tabs>

                <div className="space-y-4 mt-6">
                  <div>
                    <Label htmlFor="roofType">{language === "fr" ? "Type de toit" : "Roof Type"}</Label>
                    <Select
                      value={state.roofType}
                      onValueChange={(value) => handleChange("roofType", value as RoofType)}
                    >
                      <SelectTrigger
                        id="roofType"
                        className="mt-1 border-gray-200 dark:border-gray-700 focus:border-yellow-500 focus:ring-yellow-500"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flat">{language === "fr" ? "Toit plat" : "Flat roof"}</SelectItem>
                        <SelectItem value="sloped">{language === "fr" ? "Toit incliné" : "Sloped roof"}</SelectItem>
                        <SelectItem value="ground">
                          {language === "fr" ? "Installation au sol" : "Ground mount"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="orientation">
                      {language === "fr" ? "Orientation principale" : "Main Orientation"}
                    </Label>
                    <Select
                      value={state.orientation}
                      onValueChange={(value) => handleChange("orientation", value as Orientation)}
                    >
                      <SelectTrigger
                        id="orientation"
                        className="mt-1 border-gray-200 dark:border-gray-700 focus:border-yellow-500 focus:ring-yellow-500"
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="north">{language === "fr" ? "Nord" : "North"}</SelectItem>
                        <SelectItem value="east">{language === "fr" ? "Est" : "East"}</SelectItem>
                        <SelectItem value="south">{language === "fr" ? "Sud" : "South"}</SelectItem>
                        <SelectItem value="west">{language === "fr" ? "Ouest" : "West"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  {language === "fr" ? "Surface disponible" : "Available Area"}
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="roofArea">
                        {language === "fr" ? "Surface disponible (m²)" : "Available area (m²)"}
                      </Label>
                      <span className="text-sm font-medium">{state.roofArea} m²</span>
                    </div>
                    <Slider
                      id="roofArea"
                      min={10}
                      max={500}
                      step={5}
                      value={[state.roofArea]}
                      onValueChange={(value) => handleChange("roofArea", value[0])}
                      className="my-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>10 m²</span>
                      <span>500 m²</span>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <h4 className="font-medium mb-2">
                      {language === "fr" ? "Estimation préliminaire" : "Preliminary Estimate"}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === "fr"
                        ? `Avec une surface de ${state.roofArea} m², vous pourriez installer environ:`
                        : `With an area of ${state.roofArea} m², you could install approximately:`}
                    </p>
                    <div className="flex items-center gap-2 text-yellow-600 dark:text-yellow-400">
                      <Sun className="h-5 w-5" />
                      <span className="font-medium">
                        {Math.round((state.roofArea / 6.5) * 10) / 10} kWp ({Math.round((state.roofArea / 6.5) * 3)}{" "}
                        {language === "fr" ? "panneaux" : "panels"})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  {language === "fr" ? "Consommation et budget" : "Consumption and Budget"}
                </h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="annualConsumption">
                        {language === "fr" ? "Consommation annuelle (kWh)" : "Annual consumption (kWh)"}
                      </Label>
                      <span className="text-sm font-medium">{state.annualConsumption} kWh</span>
                    </div>
                    <Slider
                      id="annualConsumption"
                      min={1000}
                      max={50000}
                      step={500}
                      value={[state.annualConsumption]}
                      onValueChange={(value) => handleChange("annualConsumption", value[0])}
                      className="my-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>1 000 kWh</span>
                      <span>50 000 kWh</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <Label htmlFor="budget">{language === "fr" ? "Budget (€)" : "Budget (€)"}</Label>
                      <span className="text-sm font-medium">{state.budget} €</span>
                    </div>
                    <Slider
                      id="budget"
                      min={5000}
                      max={100000}
                      step={1000}
                      value={[state.budget]}
                      onValueChange={(value) => handleChange("budget", value[0])}
                      className="my-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5 000 €</span>
                      <span>100 000 €</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <input
                      type="checkbox"
                      id="batteryStorage"
                      checked={state.batteryStorage}
                      onChange={(e) => handleChange("batteryStorage", e.target.checked)}
                      className="rounded border-gray-300 text-yellow-600 focus:ring-yellow-500 h-5 w-5"
                    />
                    <Label htmlFor="batteryStorage" className="cursor-pointer">
                      {language === "fr"
                        ? "Je souhaite inclure un système de stockage par batterie"
                        : "I want to include a battery storage system"}
                    </Label>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  {language === "fr" ? "Résultats de la simulation" : "Simulation Results"}
                </h3>

                {results && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Sun className="h-5 w-5 text-yellow-500" />
                            {language === "fr" ? "Taille du système" : "System Size"}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="text-3xl font-bold">{results.systemSize} kWp</div>
                          <p className="text-sm text-muted-foreground">
                            {Math.round(results.systemSize * 3)}{" "}
                            {language === "fr" ? "panneaux solaires" : "solar panels"}
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Zap className="h-5 w-5 text-yellow-500" />
                            {language === "fr" ? "Production annuelle" : "Annual Production"}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="text-3xl font-bold">{results.annualProduction} kWh</div>
                          <p className="text-sm text-muted-foreground">{language === "fr" ? "par an" : "per year"}</p>
                        </CardContent>
                      </Card>

                      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Euro className="h-5 w-5 text-green-500" />
                            {language === "fr" ? "Économies annuelles" : "Annual Savings"}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="text-3xl font-bold">{results.savings} €</div>
                          <p className="text-sm text-muted-foreground">{language === "fr" ? "par an" : "per year"}</p>
                        </CardContent>
                      </Card>

                      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <BarChart3 className="h-5 w-5 text-green-500" />
                            {language === "fr" ? "Retour sur investissement" : "Return on Investment"}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <div className="text-3xl font-bold">
                            {results.roi} {language === "fr" ? "ans" : "years"}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {language === "fr" ? "Temps de récupération" : "Payback period"}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                        <CardTitle>{language === "fr" ? "Coût estimé" : "Estimated Cost"}</CardTitle>
                        <CardDescription>
                          {language === "fr"
                            ? "Estimation basée sur les informations fournies"
                            : "Estimate based on the information provided"}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="text-4xl font-bold mb-4">{results.installationCost} €</div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{language === "fr" ? "Installation de base" : "Base installation"}</span>
                            <span>
                              {results.installationCost - (state.batteryStorage ? results.systemSize * 600 : 0)} €
                            </span>
                          </div>
                          {state.batteryStorage && (
                            <div className="flex justify-between text-sm">
                              <span>{language === "fr" ? "Système de stockage" : "Storage system"}</span>
                              <span>{Math.round(results.systemSize * 600)} €</span>
                            </div>
                          )}
                          <div className="flex justify-between text-sm font-medium pt-2 border-t">
                            <span>{language === "fr" ? "Total" : "Total"}</span>
                            <span>{results.installationCost} €</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex flex-col space-y-2 bg-gray-50 dark:bg-gray-800/50 rounded-b-lg">
                        <p className="text-sm text-muted-foreground w-full">
                          {language === "fr"
                            ? "Cette estimation inclut le matériel, l'installation et la mise en service. Des subventions peuvent être disponibles selon votre région."
                            : "This estimate includes equipment, installation, and commissioning. Subsidies may be available depending on your region."}
                        </p>
                        <div className="flex flex-wrap gap-2 w-full mt-4">
                          <Button
                            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black group relative overflow-hidden"
                            onClick={handleSaveResults}
                          >
                            {language === "fr" ? "Demander un devis détaillé" : "Request a detailed quote"}
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={currentStep > 1 ? handlePrevious : handleReset}
            type="button"
            className="border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {currentStep > 1 ? (
              <>
                <ChevronLeft className="mr-2 h-4 w-4" />
                {language === "fr" ? "Précédent" : "Previous"}
              </>
            ) : language === "fr" ? (
              "Réinitialiser"
            ) : (
              "Reset"
            )}
          </Button>
          {currentStep < totalSteps ? (
            <Button
              onClick={handleNext}
              type="button"
              className="bg-yellow-400 hover:bg-yellow-500 text-black group relative overflow-hidden"
            >
              {language === "fr" ? "Suivant" : "Next"}
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
            </Button>
          ) : currentStep === totalSteps && !results ? (
            <Button
              onClick={calculateResults}
              type="button"
              className="bg-yellow-400 hover:bg-yellow-500 text-black group relative overflow-hidden"
            >
              <Calculator className="mr-2 h-4 w-4" />
              {language === "fr" ? "Calculer" : "Calculate"}
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></span>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
