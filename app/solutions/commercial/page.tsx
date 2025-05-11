"use client"

import { Building, TrendingUp, Lightbulb, Award, BarChart } from "lucide-react"
import Translate from "@/components/translate"
import SolutionHero from "@/components/solutions/solution-hero"
import SolutionFeatures from "@/components/solutions/solution-features"
import SolutionBenefits from "@/components/solutions/solution-benefits"
import SolutionProcess from "@/components/solutions/solution-process"
import SolutionCta from "@/components/solutions/solution-cta"
import SolutionTestimonial from "@/components/solutions/solution-testimonial"

export default function CommercialSolutionsPage() {
  const features = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: <Translate text="solutions.commercial.features.costs.title" />,
      description: <Translate text="solutions.commercial.features.costs.description" />,
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: <Translate text="solutions.commercial.features.brand.title" />,
      description: <Translate text="solutions.commercial.features.brand.description" />,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: <Translate text="solutions.commercial.features.compliance.title" />,
      description: <Translate text="solutions.commercial.features.compliance.description" />,
    },
    {
      icon: <BarChart className="h-6 w-6" />,
      title: <Translate text="solutions.commercial.features.value.title" />,
      description: <Translate text="solutions.commercial.features.value.description" />,
    },
  ];

  const benefits = [
    {
      title: <Translate text="solutions.commercial.benefits.roi.title" />,
      description: <Translate text="solutions.commercial.benefits.roi.description" />,
      icon: <TrendingUp className="h-6 w-6" />,
      iconColor: "text-green-500",
    },
    {
      title: <Translate text="solutions.commercial.benefits.certification.title" />,
      description: <Translate text="solutions.commercial.benefits.certification.description" />,
      icon: <Award className="h-6 w-6" />,
      iconColor: "text-blue-500",
    },
    {
      title: <Translate text="solutions.commercial.benefits.independence.title" />,
      description: <Translate text="solutions.commercial.benefits.independence.description" />,
      icon: <Lightbulb className="h-6 w-6" />,
      iconColor: "text-yellow-500",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: <Translate text="solutions.commercial.process.audit.title" />,
      description: <Translate text="solutions.commercial.process.audit.description" />,
    },
    {
      number: 2,
      title: <Translate text="solutions.commercial.process.study.title" />,
      description: <Translate text="solutions.commercial.process.study.description" />,
    },
    {
      number: 3,
      title: <Translate text="solutions.commercial.process.admin.title" />,
      description: <Translate text="solutions.commercial.process.admin.description" />,
    },
    {
      number: 4,
      title: <Translate text="solutions.commercial.process.installation.title" />,
      description: <Translate text="solutions.commercial.process.installation.description" />,
    },
    {
      number: 5,
      title: <Translate text="solutions.commercial.process.maintenance.title" />,
      description: <Translate text="solutions.commercial.process.maintenance.description" />,
    },
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <SolutionHero
        title={<Translate text="solutions.commercial.hero.title" />}
        description={<Translate text="solutions.commercial.hero.description" />}
        image="/assets/images/solutions/commercial.png"
        icon={<Building size={24} />}
      />

      <SolutionFeatures
        title={<Translate text="solutions.commercial.features.title" />}
        subtitle={<Translate text="solutions.commercial.features.subtitle" />}
        features={features}
      />

      <SolutionBenefits
        title={<Translate text="solutions.commercial.benefits.title" />}
        subtitle={<Translate text="solutions.commercial.benefits.subtitle" />}
        benefits={benefits}
      />

      <SolutionProcess
        title={<Translate text="solutions.commercial.process.title" />}
        subtitle={<Translate text="solutions.commercial.process.subtitle" />}
        steps={processSteps}
      />

      <SolutionTestimonial
        quote={<Translate text="solutions.commercial.testimonial.quote" />}
        author={<Translate text="solutions.commercial.testimonial.author" />}
        location={<Translate text="solutions.commercial.testimonial.location" />}
      />

      <SolutionCta
        title={<Translate text="solutions.commercial.cta.title" />}
        description={<Translate text="solutions.commercial.cta.description" />}
        primaryButtonText={<Translate text="solutions.cta.primary" />}
        primaryButtonHref="/contact"
        secondaryButtonText={<Translate text="solutions.cta.secondary" />}
        secondaryButtonHref="/quote"
      />
    </main>
  )
}
