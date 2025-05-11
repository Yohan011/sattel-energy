"use client"

import type * as React from "react"

interface SectionHeadingProps {
  title: React.ReactNode
  description: React.ReactNode
  centered?: boolean
}

export function SectionHeading({ title, description, centered }: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-4 text-muted-foreground md:text-lg">{description}</p>
    </div>
  )
}

export default SectionHeading
